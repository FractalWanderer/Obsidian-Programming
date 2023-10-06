---
last-modified: 2023-10-04
tags:
  - kubernetes
  - AKS
  - guide
cssclasses:
  - inline-code-block
---
# Deploying a Multi-Container Multi-Pod publicly exposed application to an AKS Cluster
## Overview
---
This guide will serve to help with deploying a sophisticated application with the following characteristics:
1. One public facing application that needs to be interacted with over the internet.
2. More than one pod deployment, of which there is a requirement of communication between pods. (ie. pod to pod internal communication)
## Pre-requisites
---
1. A kubernetes cluster to deploy to created in Azure, specifically with a restricted range of ip addresses for the purposes of this guide.
2. Two or more apps to deploy to the cluster, one of which has a publicly interactable interface (be that an api, web app, ect.) This guide will use two test applications that are stored in a private Azure container registry, feel free to use them for following the guide if you have access to them. You should be able to follow fine with other applications too, but there may be application specific configuration.

## Yaml File
---
#### Step 1: First Deployment
---
The section will give an overview of the first deployment. In this case we'll be deploying the home-base application. This will serve as the publicly exposed entry point into our cluster, as well as the application that will communicate to our other application, outpost.

>[!example]
>```yaml
>apiVersion: apps/v1
>kind: Deployment
>metadata:
>	name: home-base-deployment
>spec:
>	replicas: 1
>	selector:
>		matchLabels:
>			app: home-base
>	template:
>		metadata:
>			labels:
>				app: home-base
>		spec:
>			containers:
>				- name: home-base
>				  image: russellcellularcontainerregistry.azurecr.io/home-base
>				  imagePullPolicy: Always
>				  ports:
>					  - containerPort: 81
>				  env:
>					  - name: OutpostPath
>					    value: http://outpost-service:80
>```

###### Environment Variable
This deployment follows most typical deployment specifications. Where our use case here differs lies in the environment variable that targets a strange host:

>[!example]
>```yaml
> env:
>  - name: OutpostPath
>    value: http://outpost-service:80
>```

This host name targets a service that we will create later on in the guide. You can use a host name that matches this formatting if the context satisfies these requirements:
1. Both pods that need to communicate are located in the same [[Kubernetes Declarative Resource Definitions#Namespace|namespace]].
2. A [[Kubernetes Declarative Resource Definitions#Service|service]] has been defined that can be targeted and that exposes the specific port of the other pod that requests need routed to. In this case, the service we will create at a later point has meta data defining "outpost-service" as the name. This outpost-service will route requests from the service itself, to a port contained on another pod that the service targets.

#### Step 2: Second Deployment
---
Now we'll move onto the next deployment, which in this case is quite similar to the first. This one is actually slightly simpler.

>[!example]
>```yaml
>apiVersion: apps/v1
>kind: Deployment
>metadata:
>	name: outpost-deployment
>spec:
>	replicas: 1
>	selector:
>		matchLabels:
>			app: outpost
>	template:
>		metadata:
>			labels
>				app: outpost
>		spec:
>			containers:
>				- name: outpost
>				  image: russellcellularcontainerregistry.azurecr.io/outpost
>				  imagePullPolicy: Always
>				  ports:
>					  - containerPort: 80
>```

Nothing too special about this one. The only noteworthy portion is the specific port we are exposing on the container, port 80, which we will use when we create a cluster ip service to expose it later. The service we use will allow us to send HTTP requests from 'home-base' to 'outpost' internally.

#### Step 3: First Service
---
Now we'll move on to creating our first service! This service will simply expose the outpost container for internal communication between pods. The type of the service that gets created is known as a "cluster ip" service, although we will not explicitly define this; cluster ip is the default value for a service.

>[!example]
>```yaml
>apiVersion: v1
>kind: Service
>metadata:
>	name: outpost-service
>spec:
>	selector:
>		app: outpost
>	ports:
>		- protocol: TCP
>		  port: 80
>		  targetPort: 80
>```

>[!abstract] Yaml Fields
 >> [!example]+ Meta Data
 >> When creating the service, the name that is specified in the metadata is the name that other applications will use as the host name when sending HTTP requests.
 >> 
>>In the home base app from before, we specified the host to target this particular service in the 'OupostPath' environment variable.
>>
>>![[#Environment Variable]]
>
>
>> [!example]+ Selector
>>In order to talk to the outpost we have to specify the specific same selector that was defined on the label for the app we are targeting. In this case, the original label we defined for outpost was just 'outpost', so that is what we will target.
>
>>[!example]+ Ports
>>
>>>[!example] port
>>>The port that we expose for the service (keep in mind, this is the service port, not the targetPort) is the port that we will use when we want to send requests to outpost. Think of this port as the window into the outpost container.
>>
>>>[!example] targetPort
>>>Once we select a particular app, now we are able to target the ports within the app. Since the port we originally exposed for outpost was port 80, this is the port that we will target. The traffic from the service will route to this port.

#### Step 4: Second Service
---
Moving on we have our second (and last) service that we need. This service will publicly expose the home base application, so that we can send requests from postman and verify that our internal pod communication is working. This service will be a 'LoadBalancer', and is generally good for low complexity applications that need to be publicly exposed to the internet.

>[!example]
>```yaml
>apiVersion: v1
>kind: Service
>metadata:
>	name: home-base-service
>	# Optional
>	annotations:
>		service.beta.kubernetes.io/azure-dns-label-name: home-base
>spec:
>	type: LoadBalancer
>	selector:
>		app: home-base
>	ports:
>		- protocol: TCP
>		  port: 79
>		  targetPort: 81
>```

The definitions here are nearly identical to the first service that we created, except that we target a different app, and we specify the type. In this case, we are using a LoadBalancer as a way of exposing the home base to the public internet. Optionally, we are also using an annotation so that Azure automatically sets up a DNS for us to use. This way we won't have to change the specific IP address we target later, if we redeploy the service. Either is fine, but having a DNS is preferable for our use case.

#### Step 5: Apply Yaml File
---
Now we have the full yaml file, and we are ready to apply it to the cluster! Now is a good time to double check your file, and look for any indentation mistakes or other errors.

>[!example]
>```yaml
># Home Base Deployment
>apiVersion: apps/v1
>kind: Deployment
>metadata:
>	name: home-base-deployment
>spec:
>	replicas: 1
>	selector:
>		matchLabels:
>			app: home-base
>	template:
>		metadata:
>			labels:
>				app: home-base
>		spec:
>			containers:
>				- name: home-base
>				  image: russellcellularcontainerregistry.azurecr.io/home-base
>				  imagePullPolicy: Always
>				  ports:
>					  - containerPort: 81
>				  env:
>					  - name: OutpostPath
>					    value: http://outpost-service:80
>---
># Outpost Deployment
>apiVersion: apps/v1
>kind: Deployment
>metadata:
>	name: outpost-deployment
>spec:
>	replicas: 1
>	selector:
>		matchLabels:
>			app: outpost
>	template:
>		metadata:
>			labels
>				app: outpost
>		spec:
>			containers:
>				- name: outpost
>				  image: russellcellularcontainerregistry.azurecr.io/outpost
>				  imagePullPolicy: Always
>				  ports:
>					  - containerPort: 80
>---
># Outpost Service
>apiVersion: v1
>kind: Service
>metadata:
>	name: outpost-service
>spec:
>	selector:
>		app: outpost
>	ports:
>		- protocol: TCP
>		  port: 80
>		  targetPort: 80
>---
># Home Base Service
>apiVersion: v1
>kind: Service
>metadata:
>	name: home-base-service
>	# Optional
>	annotations:
>		service.beta.kubernetes.io/azure-dns-label-name: home-base
>spec:
>	type: LoadBalancer
>	selector:
>		app: home-base
>	ports:
>		- protocol: TCP
>		  port: 79
>		  targetPort: 81
>```

So after you have looked everything over, and double checked that everything in the file is formatted correctly, it is time to run the kubectl apply command.

```shell
kubectl apply -f your-file-name.yaml
```
>[!important]
>If you have multiple files for each deployment/service, just run the apply command for each one. Optionally, you can combined them all into a single file by separating them with '---' like the example. Then you only need to apply the one file.

## Check Resource Deployments Status
---
So now everything should be up and running, including all of the deployments and services, so now we need to give them all a good look over and make sure they are all running as expected.

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
>>NAME                   READY   UP-TO-DATE   AVAILABLE   AGE
>>home-base-deployment   1/1     1            1           2m
>>outpost-deployment     1/1     1            1           2m
>>```

#### Step 2: Check Services
---
This is pretty simple. We will just be checking to see if the deployment is running.

>[!example]
>>[!info] Command
>>```shell
>>kubectl get services
>>```
>
>>[!success] Expected Outcome ^[The formatting here on the expected outcome isn't perfect, as some parts wrap to the next line, but just pretend like line wrapping doesn't happen. ]
>>```
>>NAME                TYPE           CLUSTER-IP    EXTERNAL-IP     PORT(S)        AGE
>>home-base-service   LoadBalancer   10.0.18.150   52.154.255.88   79:30521/TCP   2m
>>kubernetes          ClusterIP      10.0.0.1      none          443/TCP        7d20h
>>outpost-service     ClusterIP      10.0.39.40    none          80/TCP         2m
>>```

Notice here how we have an external IP address assigned to the home-base-service. If you didn't use an annotation to specify a host DNS, then this is what you will target as the host name for testing. If you specified a host name, Azure adds a bit to the host, and it generally follows this format:

>[!quoteno]
>your-choosen-dns-name.centralus.cloudapp.azure.com

#### Step 3: Send Test Requests
---
For the example we worked with, the format for the host with the specific port we exposed will be:

> [!quoteno]
> home-base.centralus.cloudapp.azure.com:79

> [!abstract] Requests
> Using this host name, you can now go ahead and send some requests to it using whatever method you want to use for sending HTTP requests.
>> [!example] Request List
>> http://home-base.centralus.cloudapp.azure.com:79/HomeBase/SendCommand?command=EstablishConnection
>> 
>> http://home-base.centralus.cloudapp.azure.com:79/HomeBase/SendCommand?command=GetHealthReport
>> 
>> http://home-base.centralus.cloudapp.azure.com:79/HomeBase/SendCommand?command=GetWater
>> 
>> http://home-base.centralus.cloudapp.azure.com:79/HomeBase/SendCommand?command=GetCalories
>> 
>> http://home-base.centralus.cloudapp.azure.com:79/HomeBase/SendCommand?command=SendResources

Play around with the requests a bit, make sure you are getting successful responses, and that's about all there is left to do!

## Additional Examples
---
#### Deployment File Example

![[Deployment Example|Yaml File Definitions]]
#todo add a service example