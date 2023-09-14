---
last-modified: 2023-09-13
tags:
  - kubernetes
cssclasses:
  - wider-code-sm
---
## Initial File Configuration
---
> [!example]
> 
>```yaml
>apiVersion: apps/v1
>kind: YourKindHere
>metadata:
 > 	name: example-deployment
 > 	namespace: example-namespace
 > ```

[[API Version]]
[[Kind]]
[[Metadata]]
##### Labels

> [!quoteno]
> Key-value pairs attached to resources for filtering and selection.

## Spec
---
> [!quoteno]
> The `spec` (specification) outlines the desired state for the resource. This can include a wide array of settings and configurations, such as `replicas` for Deployments or `ports` for Services.

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

#### Replicas

> [!quoteno]
> The desired number of identical pods to be running. If not specified, defaults to 1.

#### Selector

> [!quoteno]
> Specifies how to find pods that match a certain criteria. Used for both deployments and services for routing traffic to pods.

> [!example]
> ``` yaml
>   selector:
>     matchLabels:
>       app: example-app
> ```

#### Template

> [!quoteno]
> Specifies the label(s) that must exist on [[Kubernetes Declarative Resource Definitions#pod|Pods]] for them to be managed by a [[Kubernetes Declarative Resource Definitions#Deployment|Deployment]].

> [!example]
> ```yaml
>   template:
>     metadata:
>       labels:
>         app: example-app
>  ```
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
