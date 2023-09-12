---
last-modified: 2023-09-12
tags:
  - kind
  - kubernetes
---
## Pre-requisites
---
1. An installation of the [Docker Engine](https://docs.docker.com/engine/install/). The engine comes installed out of the box with [Docker Desktop](https://docs.docker.com/get-docker/) for a nice user interface.
2. A running kubernetes cluster to deploy to. For this example, I will be using a [[Creating a Local Kind Kubernetes Cluster|Kind]] cluster.
3. An [Azure Container Registry](https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ContainerRegistry%2Fregistries) (ACR) to pull images from. If you are not using ACR, most of this guide will still work fine, but there is some configuration specific for this use case.
4. One or more applications you want to deploy to the cluster. This example uses two test projects for the deployment.
## Create a Deployment Yaml File
---
Create the yaml file that we will use for the deployment. You can name this file whatever you like, as long as it has the .yaml extension. I will be naming mine __deployment.yaml__.

#### Step 1: Initial File Configuration
---
The first portion of the file is the definition that kubernetes will use for determining the kind of service we are applying, what api version to use, and the metadata related to the file. ![[Kubernetes Resources#Deployment|DeploymentService]]
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
	name: test-deployment
```

