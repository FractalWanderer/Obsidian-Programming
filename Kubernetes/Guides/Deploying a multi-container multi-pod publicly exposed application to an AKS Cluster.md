---
last-modified: 2023-09-25
tags:
  - kubernetes
  - AKS
  - guide
---
## Overview
---
This guide will serve to help with deploying a sophisticated application with the following characteristics:
1. One public facing application that needs to be interacted with over the internet.
2. More than one pod deployment, of which there is a requirement of communication between pods. (ie. pod to pod internal communication)
## Pre-requisites
---
1. A kubernetes cluster to deploy to created in Azure, specifically with a restricted range of ip addresses for the purposes of this guide.
2. Two or more apps to deploy to the cluster, one of which has a publicly interactable interface (be that an api, web app, ect.) This guide will use two test applications that are stored in a private Azure container registry, feel free to use them for following the guide if you have access to them. You should be able to follow fine with other applications too, but there may be application specific configuration.
3. Image pull secrets defined on the Kubernetes cluster you are working with. In this case the name of the secret is acr-credentials-secret.

## User Secrets
---
>[!hint]
>If the cluster you are working on already has secrets defined for connecting to a private registry defined, or your repositories are public, skip this section. In later sections, you can also omit the field 'imagePullSecrets' from your YAML file.

This section gives an overview of how to add

![[Accessing Private Image Registries]]


## Yaml File
---
#### Step 1: First Deployment
---
The section will give an overview of the first deployment, in this case we'll be deploying the home-base application. This will serve as the publicly exposed entry point into our cluster, as well as the application that will communicate to our other application, outpost.

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
>			imagePullSecrets:
>				- name: acr-credentials-secret
>```

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
>			imagePullSecrets:
>				acr-credentials-secret
>```

Nothing too special about this one. The only noteworthy portion is the specific port we are exposing on the container, port 80, which we will use when we create a cluster ip service to expose it later. The service we use will allow us to send HTTP requests from 'home-base' to 'outpost' internally.

####