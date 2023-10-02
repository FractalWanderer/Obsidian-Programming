---
last-modified: 2023-09-14
tags:
  - kubernetes
---
# Metadata

> [!example]
> ```yaml
> metadata:
>	name: example-deployment
>	namespace: example-namespace
>	labels:
> 		app: example-app
> 		environment: production
> 	annotations:
> 		example.com/icon: "rocket"
> ```
## Definition

> [!quoteno]
> Meta data is exactly what it sounds like. It is just more information related to the particular resource that will be applied.

## Name

> [!quoteno]
> The `name` under metadata uniquely identifies a resource within a namespace. It serves as a "handle" for interacting with the resource.

## Namespace

> [!quoteno] 
> The `namespace` is an optional field. When omitted, the resource is assumed to belong to the 'default' namespace. Namespaces are a way to divide cluster resources between multiple users and are a cornerstone for RBAC (Role-Based Access Control).

## Labels

> [!quoteno]
> Makes the Deployment easier to find and operate on later.

## Annotatons

> [!quoteno]
> Optional additional information that is non-identifying in nature.

