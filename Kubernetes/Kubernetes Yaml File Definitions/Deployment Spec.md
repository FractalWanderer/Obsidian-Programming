---
last-modified: 2023-09-15
tags:
  - kubernetes
---
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
#### Ports

> [!quoteno]
> Defines the ports that the container exposes. This is generally just the same end result as what you would normally do in Docker for a given container.

#### Volume Mount

> [!quoteno]
> Specifies what volumes should be mounted to a container.

#### Strategy

> [!quoteno]
> Defines how updates to a Deployment should be rolled out.

##### Strategy Types
---
###### RollingUpdate

> [!quoteno]
> Incrementally replaces old Pods with new ones while maintaining service availability. 
###### Recreate

> [!quoteno]
> Terminates all existing Pods before new ones are created. Causes downtime for your application.

