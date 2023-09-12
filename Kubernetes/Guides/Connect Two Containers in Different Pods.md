---
last-modified: 2023-09-11
tags:
  - kubernetes
  - guide
---
## Pre-requisites

1. A kubernetes cluster with which to work with.
2. Two pod deployments, each of which need at minimum 1 container as the sender, and 1 container as the receiver.

## Step 1

Create two service yaml files, one for each pod in the following format:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: serviceConnection
spec:
  selector:
    app: Pod1AppLabel
  ports:
    - protocol: TCP
      port: 80
      targetPort: [YourPod1AppPort]
```

## Step 2

Apply the services to each pod:

![[Kubernetes kubctl Command Line Commands#Deployment Commands#Apply a Yaml File]]

## Step 3

Use the DNS name to access if the given pod is contained within the same namespace:

``` http
http://serviceConnection/<YourEndpointHere>
```

In the case where the pod is not contained within the same namespace, use:

```http
http://serviceConnection.default.svc.cluster.local/<YourEndpointHere>
```
