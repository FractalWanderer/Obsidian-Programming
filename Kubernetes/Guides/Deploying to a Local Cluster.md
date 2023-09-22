---
tags:
  - kind
  - kubernetes
last-modified: 2023-09-21
cssclasses:
  - code-overflow-auto
  - wider-code-md
---
## Pre-requisites
---
1. An installation of the [Docker Engine](https://docs.docker.com/engine/install/). The engine comes installed out of the box with [Docker Desktop](https://docs.docker.com/get-docker/) for a nice user interface.
2. A running kubernetes cluster to deploy to. For this example, I will be using a [[Creating a Local Kind Kubernetes Cluster|Kind]] cluster.
3. An [Azure Container Registry](https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ContainerRegistry%2Fregistries) (ACR) to pull images from. If you are not using ACR, most of this guide will still work fine, but there is some configuration specific for this use case.
4. One or more applications you want to deploy to the cluster. This example uses two test projects that can talk to each other for the deployment.
## Create a Deployment Yaml File
---
Create the yaml file that we will use for the deployment. You can name this file whatever you like, as long as it has the .yaml extension. I will be naming mine __deployment.yaml__.

#### Step 1: Initial File Configuration
---
The first portion of the file is the definition that kubernetes will use for determining the kind of resource we are applying, what api version to use, and the metadata related to the file.

>[!example]
>```yaml
>apiVersion: apps/v1
>kind: Deployment
>metadata:
>	name: test-deployment
> ```

#### Step 2: Spec [[Replicas]]
---
Now moving on to the next portion of the yaml file, we have the spec. This portion is pretty extensive and will be where most of the important stuff happens. (Although really everything is important)

This is the section of the file that determines what containers to run, how many of them to run, what resources/environment variables they have access to, etc.

We'll start by adding the spec and specifying within the spec the number of replicas (identical pods) we aim to have running:

>[!example]
>```yaml
>apiVersion: apps/v1
>kind: Deployment
>metadata:
>	name: test-deployment
> spec:  
> 	replicas: 2
>```

Setting the replicas will make it the 'goal' of the Kubernetes cluster to always have this many identical pods running, and if any crash and/or shut down, an attempt will be made by the cluster to get back to this number of running pods.

#### Step 3: Spec [[Selector]]
---
Now, just like before we'll add in another section to the file called 'selector'.

>[!example]
>```yaml
>apiVersion: apps/v1
>kind: Deployment
>metadata:
>	name: test-deployment
> spec:
>	replicas: 2
>	selector:
>		matchLabels:
>			app: outpost-base-app
>```

The selector here determines which pods will get managed by the deployment. It will look for any and all pods that have a matching label, in this case 'outpost-base-app' is the label it searches for. Once the deployment is created, this selector is set in stone as immutable, which means extra precaution should be taken when deciding it.

#### Step 4: Spec Template [[Metadata]]
---
In this section we'll add in the 'template' portion of the spec, as well as the metadata associated with it.

>[!example]
>```yaml
>apiVersion: apps/v1
>kind: Deployment
>metadata:
>	name: test-deployment
> spec:
>	replicas: 2
>	selector:
>		matchLabels:
>			app: outpost-base-app
>	template:
>		metadata:
>			labels:
>				app: outpost-base-app
>```

Note here that the labels section 'app' label matches exactly with the 'app' in the matchLabels section. This metadata is what allows the selector to target the pod, of which we are going to define in the next step.

#### Step 5: [[Pod Template Spec]]
---
Now we will define yet another 'spec' section, but this spec will no longer be for the [[Deployment Spec|Deployment]], but rather for the [[Pod Template Spec|Pod]] that we are wanting to deploy and replicate.

>[!example]
>```yaml
>apiVersion: apps/v1
>kind: Deployment
>metadata:
>	name: test-deployment
> spec:
>	replicas: 2
>	selector:
>		matchLabels:
>			app: outpost-base-app 
>	template:
>		metadata:
>			labels:
>				app: outpost-base-app
>		spec:
>			containers:
>				- name: outpost
>				  image: russellcellularcontainerregistry.azurecr.io/outpost
>				  imagePullPolicy: Always
>					  ports:
>						  - containerPort: 80
>				- name: home-base
>				  image: russellcellularcontainerregistry.azurecr.io/home-base
>				  imagePullPolicy: Always
>				  env:
>					  - name: OutpostPath
>					    value: http://localhost:80

This section defines all of the containers we want to be managed by the pod. You can name them whatever you want, but the image section must point to the registry (be that public or private) from which the pod can pull it. In this case the registry is a private azure container registry.
###### Ports (optional)

We'll also need to expose any ports for our containers. In this case, we'll open ports on both apps. One will be used for us to talk to from our machines, and the other will be used for the two containers to communicate.
###### Environment Variables (optional)

As well as ports, this is also where we can set any environment variables that our apps rely on. In this case, only one of the apps actually requires an environment variable.

#### Step 6: Cluster Image Secrets
---
>[!info] 
>This section is only required if you have a private container registry.

>[!example]- Azure Private Registry Options 
>>[!abstract]- Option 1: Admin User
>>
>>>[!warning]
>>>This option is only recommended for development environments.
>>
>>>[!example] Steps
>>>1. In Azure, select the Container Registry where all of your relevant images are stored.
>>>2. Navigate to the 'Access Keys' tab.
>>>3. Within this tab, you should see an 'Admin user' field. Make sure the checkbox is checked, and now you should see a username associated with the registry, as well as two separate passwords.
>>>4. Create the kubernetes secret in kubernetes command line:
>>>```
>>>kubectl create secret docker-registry image-credentials-secret --docker-server=your-server --docker-username=your-admin-username --docker-password=your-admin-password
>>>```
>>>>[!danger] Warning
>>>>Make sure to wrap your admin password in quotes, otherwise there is a chance it might not be created properly.
>
>>[!abstract]- Option 2: New Service Principle
>>>[!example] Steps
>>>1. Through command line, create a service principle that will be used for giving ACR pull permissions:
>>>```shell
>>>az ad sp create-for-rbac --name http://your-service-principle-name --scopes /subscriptions/your-subscription-id/resourceGroups/your-resource-group/providers/Microsoft.ContainerRegistry/registries/your-acr-name --role acrpull
>>>```
>>>2. Temporarily take note of the app id, and the password.
>>>3. Create the kubernetes secret:
>>>```shell
>>>kubectl create secret docker-registry image-credentials-secret --docker-server=your-acr-server --docker-username=your-appId --docker-password=your-password
>>>```
>>>>[!danger] Warning
>>>>Make sure to wrap your admin password in quotes, otherwise there is a chance it might not be created properly.
>
>>[!abstract]- Option 3: Existing Service Principle 
>>> [!example] Steps
>>> 1. If you already have the appId and password associated with the service principle, **skip to step 7**.
>>> 2. In the Azure portal, navigate to the app registry associated with your ACR. If your not sure where to find this, go to the **Access control (IAM)** tab of your ACR, and then to the **Role assignments** tab. Here you can check for the registry you need. The registry should have at minimum AcrPull permissions. Note down the name, as this is what we will search for.
>>> 3. Now leave the registry page, and go to the App registries section where you can search for registries. Search for the name of the registry you noted down. (Clicking on the link that is provided in the **Access control (IAM)** will not take you to the correct page)
>>> 4. Here in the overview, note down the **Application (client) ID**.
>>> 5. Navigate to the **Certificates & secrets** page, and then the **Client secrets** tab.
>>> 6. If you already have the secret noted, **skip to step 7**, otherwise, delete the already existing secret and create a new one in its place. Once created, make sure you note down temporarily the value of the secret, as this is only displayed once and we will be using it as the password when we create the secret in Kubernetes.
>>>7. Create the kubernetes secret:
>>>```shell
>>>kubectl create secret docker-registry image-credentials-secret --docker-server=your-acr-server --docker-username=your-appId --docker-password=your-client-secret
>>>```
>>>>[!danger] Warning
>>>>Make sure to wrap your admin password in quotes, otherwise there is a chance it might not be created properly.

 >[!example]- Docker Hub Private Registry
 >>[!example] Steps
>>1. Create the Secret in through the kubernetes command line.
>>```
>>kubectl create secret docker-registry image-credentials-secret --docker-server=https://index.docker.io/v1/ --docker-username=your-dockerhub-username --docker-password=your-dockerhub-password
>> ```
>> 2. That's it.

#### Step 7: Image Pull Secrets
---
>[!info] 
>This section is only required if you have a private container registry.

All that is required to use the secret that we just added in the previous step, is to tell the deployment which secret contains our credentials with the 'imagePullSecrets' field.

>[!example]
>```yaml
>apiVersion: apps/v1
>kind: Deployment
>metadata:
>	name: test-deployment
> spec:
>	replicas: 2
>	selector:
>		matchLabels:
>			app: outpost-base-app 
>	template:
>		metadata:
>			labels:
>				app: outpost-base-app
>		spec:
>			containers:
>				- name: outpost
>				  image: russellcellularcontainerregistry.azurecr.io/outpost
>				  imagePullPolicy: Always
>					  ports:
>						  - containerPort: 80
>				- name: home-base
>				  image: russellcellularcontainerregistry.azurecr.io/home-base
>				  imagePullPolicy: Always
>				  env:
>					  - name: OutpostPath
>					    value: http://localhost:80
>			imagePullSecrets:
>				- name: acr-credentials-secret
>```

This is the final yaml file we will be using for the deployment.

#### Step 8: Apply The Deployment
---
Now we have our full deployment yaml and we are ready to apply it.

>[!example]
>```yaml
>apiVersion: apps/v1
>kind: Deployment
>metadata:
>	name: test-deployment
> spec:
>	replicas: 2
>	selector:
>		matchLabels:
>			app: outpost-base-app 
>	template:
>		metadata:
>			labels:
>				app: outpost-base-app
>		spec:
>			containers:
>				- name: outpost
>				  image: russellcellularcontainerregistry.azurecr.io/outpost
>				  imagePullPolicy: Always
>					  ports:
>						  - containerPort: 80
>				- name: home-base
>				  image: russellcellularcontainerregistry.azurecr.io/home-base
>				  imagePullPolicy: Always
>				  env:
>					  - name: OutpostPath
>					    value: http://localhost:80
>			imagePullSecrets:
>				- name: acr-credentials-secret
>```

To deploy, we will once again use the Kubernetes command line. Just make sure beforehand that you change your current directory to the directory that contains your yaml file.

```shell
kubectl apply -f deployment.yaml
```
## Check Deployment Status
---
Now you should have deployed to the cluster, and now we'll check and make sure everything is running correctly.

#### Step 1: Check Deployments
---
This is pretty simple. We will just be checking to see if the deployment is running.

>[!example]
>>[!info] Command
>>```shell
>>kubectl get deployments
>>```
>
>>[!success] Expected Outcome
>>```
>>NAME              READY   UP-TO-DATE   AVAILABLE   AGE
>>test-deployment   1/1     1            1           12m
>>```

#### Step 2: Check Pods
---
Similar to the last step, we'll just take a look into the pods and see if they have any issues.

>[!example]
>>[!info] Get Pods Command
>>```shell
>>kubectl get pods
>>```
>
>>[!success] Expected Outcome
>>```
>>NAME                               READY   STATUS    RESTARTS   AGE
>>test-deployment-84c5578f9c-s2m2t   2/2     Running   0          16m
>>```
>
>If you run into any issues here with your pods, use this command to debug issues:
>>[!error] Issue Checking Command
>>```shell
>>kubectl describe pods
>>```
>> This is also a general use command for getting more information about the pods, if you want to use it for that purpose.

At this point, if the pods are running as expected, there are further steps you can take to validate that they are working properly, but that is outside the scope of this guide. Move on to step 3 if you used the example images used in this guide.
#### Step 3: Test Inter-Container Communication
---
>[!info]
>This section is only required if you used the same example images as the guide for the deployment. Otherwise, you are on your own from here!

>[!example]
>We'll use a command to forward a port from our local machine to a container on the pod, that way we can send HTTP requests from our machine, to a specific container within the pod.
>>[!info] Port Forwarding Command
>>```shell
>>kubectl port-forward your-pod-name your-local-port:your-container-port
>>```
>
>>[!success] Expected Outcome
>>```
>>Forwarding from 127.0.0.1:8081 -> 81
>>Forwarding from [::1]:8081 -> 81
>>```
>
>>[!tip] 
>>The container port we'll want to target will be port 81 from our example. Using port 81 will let us see both containers talking to each other at a later stage. For simplicity sake, I'll be using port 8081 for my local port.

>[!abstract] Requests
>Now we are able to send HTTP requests to the specified port. You can use your method of choice for this, but Postman works great. To target your endpoint (assuming your ip address are the same as my result) you will use 127.0.0.1 as the host.
>> [!example] Request List
>> http://127.0.0.1:8081/HomeBase/SendCommand?command=EstablishConnection
>> http://127.0.0.1:8081/HomeBase/SendCommand?command=GetHealthReport
>> http://127.0.0.1:8081/HomeBase/SendCommand?command=GetWater
>> http://127.0.0.1:8081/HomeBase/SendCommand?command=GetCalories
>> http://127.0.0.1:8081/HomeBase/SendCommand?command=SendResources

## Definitions
---
![[Kubernetes Declarative Resource Definitions#Deployment|Deployment Service]]

## Examples
---
#### Deployment File Example

![[Deployment Example|Yaml File Definitions]]
