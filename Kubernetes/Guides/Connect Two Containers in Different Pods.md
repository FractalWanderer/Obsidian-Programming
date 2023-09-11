---
last-modified: 2023-09-11
tags:
  - kubernetes
  - guide
---
## Enabling Communication
---
#### Pre-requisites

1. A kubernetes cluster with which to work with.
2. Two pod deployments, each of which need at minimum 1 container as the sender, and 1 container as the receiver.

#### Step 1

Create two service yaml files, one for each pod in the following format:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: service1
spec:
  selector:
    app: Pod1AppLabel
  ports:
    - protocol: TCP
      port: 80
      targetPort: [YourPod1AppPort]
```

#### Step 2

Apply the services to each pod:
