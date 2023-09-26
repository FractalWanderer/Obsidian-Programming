---
last-modified: 2023-09-25
tags:
  - kubernetes
  - guide
  - unfinished
---
---
## Pre-requisites

1. A kubernetes cluster with which to work with. See [[Creating a Local Kind Kubernetes Cluster]]
2. Two applications to deploy that can communicate through HTTP/HTTPS.

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
