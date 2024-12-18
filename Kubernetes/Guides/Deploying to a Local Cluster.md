---
tags:
  - kind
  - kubernetes
  - guide
  - finished
last-modified: 2023-09-28
cssclasses:
  - code-overflow-auto
---
# Deploying to a Local Cluster
## Overview
---
Deploying to a local cluster is a great way to get some testing done locally before deploying to the cloud. This guide shows exactly how to do just that. The guide serves as a generic overview of how to deploy two applications running and communicating within a single pod, but following along with it, including the test applications, is the easiest way to follow. (Since there isn't any other specific configuration required)

## Pre-requisites
---
1. An installation of the [Docker Engine](https://docs.docker.com/engine/install/). The engine comes installed out of the box with [Docker Desktop](https://docs.docker.com/get-docker/) for a nice user interface.
2. A running kubernetes cluster to deploy to. For this example, I will be using a [[Creating a Local Kind Kubernetes Cluster|Kind]] cluster.
3. An [Azure Container Registry](https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ContainerRegistry%2Fregistries) (ACR) to pull images from. If you are not using ACR, most of this guide will still work fine, but there is some configuration specific for this use case.
4. One or more applications you want to deploy to the cluster. This example uses two test projects that can talk to each other for the deployment.
5. An installation of the [Kubernetes command line tool](https://kubernetes.io/docs/tasks/tools/).

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
>				  ports:
>					  - containerPort: 80
>				- name: home-base
>				  image: russellcellularcontainerregistry.azurecr.io/home-base
>				  imagePullPolicy: Always
>				  ports:
>					  - containerPort: 81
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
>[!important] 
>This section can be skipped if you are using a public registry.

[[Creating Private Image Registry Secrets]]

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
>				  image: yourcontainerregistry.azurecr.io/outpost
>				  imagePullPolicy: Always
>					  ports:
>						  - containerPort: 80
>				- name: home-base
>				  image: yourcontainerregistry.azurecr.io/home-base
>				  imagePullPolicy: Always
>				  ports:
>					  - containerPort: 81
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
>				  image: yourcontainerregistry.azurecr.io/outpost
>				  imagePullPolicy: Always
>					  ports:
>						  - containerPort: 80
>				- name: home-base
>				  image: yourcontainerregistry.azurecr.io/home-base
>				  imagePullPolicy: Always
>				  ports:
>					  - containerPort: 81
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
>We'll use a command to forward a port from our local machine to a container on the pod, that way we can send HTTP requests from our machine, to a specific container within the pod. In this case, we have home-base exposed on port 81, so that is what we target during the port forward.
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
>Now we are able to send HTTP requests to the specified port. You can use your method of choice for this, but Postman works great. To target your endpoint use either localhost or 127.0.0.1 for the host name.
>> [!example] Request List
>> http://127.0.0.1:8081/HomeBase/SendCommand?command=EstablishConnection
>> http://127.0.0.1:8081/HomeBase/SendCommand?command=GetHealthReport
>> http://127.0.0.1:8081/HomeBase/SendCommand?command=GetWater
>> http://127.0.0.1:8081/HomeBase/SendCommand?command=GetCalories
>> http://127.0.0.1:8081/HomeBase/SendCommand?command=SendResources

## Definitions
---
[[Kubernetes Declarative Resource Definitions#Deployment|Deployment Service]]

## Additional Examples
---
#### Deployment File Example

[[Deployment Example]]
