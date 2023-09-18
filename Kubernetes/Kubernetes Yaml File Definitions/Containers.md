---
last-modified: 2023-09-18
tags:
  - kubernetes
---
>[!example]
>``` yaml
>  containers:
>  - name: your-container
>    image: your-image-url
>    imagePullPolicy: Always
>    ports:
> 	 - containerPort: 8080
>    env:
> 	 - name: EnvironmentVariable
> 	   value: "Hello world!"
> 	 - name: YourSecretEnvironmentVariable
> 	   valueFrom:
> 		   secretKeyRef:
> 			 name: your-secret-name 
> 			 key: your-secret-key
>    volumeMounts:
> 	 - name: your-secret-volume
> 	   mountPath: "/app/secrets"
> 	   readOnly: true
>  ```

## Definition

>[!quoteno]
>Defines the containers that will be running for the given pod.

## Name

> [!quoteno]
> The name of the container

## Image

>[!quoteno]
>The url where the pod will retrieve the image for the container.

> [!example]
> ```http
> docker.io/library/nginx:latest
> ```

## Image Pull Policy

> [!quoteno]
> Determines how often the image is pulled from its registry.

## Ports

> [!quoteno]
> Defines the ports that the container exposes. This is generally just the same end result as what you would normally do in Docker for a given container.

[[Env]]