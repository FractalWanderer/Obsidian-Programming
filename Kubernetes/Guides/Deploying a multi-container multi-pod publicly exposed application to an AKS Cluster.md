---
last-modified: 2023-09-25
tags:
  - kubernetes
  - AKS
  - guide
---
## Pre-requisites
---
1. A kubernetes cluster to deploy to created in Azure, specifically with a restricted range of ip addresses for the purposes of this guide.
2. Two or more apps to deploy to the cluster, one of which has a publicly interactable interface (be that an api, web app, ect.) This guide will use two test applications that are stored in a private Azure container registry, feel free to use them for following the guide if you have access to them. You should be able to follow fine with other applications too, but there may be application specific configuration.

## Overview
---
This guide will serve to help with deploying a sophisticated application with the following characteristics:
1. One public facing application that needs to be interacted with over the internet.
2. More than one pod deployment, of which there is a requirement of communication between pods. (ie. pod to pod internal communication)