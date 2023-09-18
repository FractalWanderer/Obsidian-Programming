---
last-modified: 2023-09-18
tags:
  - kubernetes
---

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
