---
last-modified: 2023-09-12
tags:
  - kind
  - kubernetes
---
## Pre-requisites
---
1. An installation of the [Docker Engine](https://docs.docker.com/engine/install/). The engine comes installed out of the box with [Docker Desktop](https://docs.docker.com/get-docker/) for a nice user interface.
2. A running kubernetes cluster to deploy to. For this example, I will be using a [[Creating a Local Kind Kubernetes Cluster|Kind]] cluster
## Step 1
---
Create the yaml file that we will use for the deployment. You can name this file whatever you like, but I will be naming mine __deployment.yaml__.