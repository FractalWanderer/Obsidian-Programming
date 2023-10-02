---
last-modified: 2023-09-28
tags:
  - kubernetes
---
# Env

>[!example]
>``` yaml
> env:
>  - name: EnvironmentVariable
>    value: "Hello world!"
>  - name: YourSecretEnvironmentVariable
>    valueFrom:
> 	   secretKeyRef:
> 		 name: your-secret-name 
> 		 key: your-secret-key
>  - name: YourFieldRef
>	valueFrom:
>		fieldRef:
>			fieldPath: path
>  - name: YourResourceFieldRef
>    valueFrom:
> 	   resourceFieldRef:
> 		   containerName: your-container
> 		   resource: container-resource
>  - name: YourConfigMap
>    valueFrom:
> 	   configMapKeyRef:
> 		   name: your-config-map
> 		   key: your-key
>  ```

## Definitions

> [!quoteno]
> Any and all environment variables that will be used for the specific container it is defined under.

## Name

> [!quoteno]
> The name of the environment variable.

## Value

>[!quoteno]
>The value of the environment variable.

[[Value From]]
