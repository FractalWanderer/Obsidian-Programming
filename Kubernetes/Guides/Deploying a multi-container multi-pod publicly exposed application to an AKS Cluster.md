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

This deployment follows most typical deployment specifications, but our app uses an environment variable that targets a strange host:

>[!example]
>```yaml
> env:
>  - name: OutpostPath
>    value: http://outpost-service:80
>```
