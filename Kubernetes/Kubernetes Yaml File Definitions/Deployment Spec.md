---
last-modified: 2023-09-15
tags:
  - kubernetes
---
# Deployment Spec

> [!quoteno]
> The deployment spec defines all configuration related to the deployment. This includes the number of replicas, the template defining the pods, any volumes to include on the deployment, ect.

> [!example]
> ```yaml
> spec:
>   replicas: 1
>   selector:
>     matchLabels:
>       app: example-app
>   template:
>     metadata:
>       labels:
>         app: example-app
>     spec:
>       volumes:
>         - name: your-secret-volume
>           secret:
>             secretName: your-secret-name
>       imagePullSecrets:
>         - name: acr-secret
>       containers:
>       - name: your-container
>         image: your-image-url
>         imagePullPolicy: Always
>         ports:
>           - containerPort: 8080
>         env:
>           - name: EnvironmentVariable
>             value: "Hello world!"
>           - name: YourSecretEnvironmentVariable
>             valueFrom:
>                 secretKeyRef:
>                   name: your-secret-name 
>                   key: your-secret-key
>         volumeMounts:
>           - name: your-secret-volume
>             mountPath: "/app/secrets"
>             readOnly: true
>      strategy:
> 	     type: RollingUpdate
> 		     maxUnavailable: 1
> 		     maxSurge: 1
> ```

[[Replicas]]
[[Selector]]
[[Pod Template]]
