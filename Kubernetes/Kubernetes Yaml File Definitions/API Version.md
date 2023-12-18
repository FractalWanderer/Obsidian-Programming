---
last-modified: 2023-09-14
tags:
  - kubernetes
---
# API Version

> [!example]
> ```yaml
> apiVersion: apps/v1
> ```

## Definition

> [!quoteno]
> The api version of a resource is specific to the resource you are targeting. When specifying an api version with 'apiVersion: <version​>' it tells kubernetes which version of the specific resource to use. Then kubernetes will use that version when applying the resource to a cluster. 

## Common API Versions

> [!quoteno]
> `apps/v1`: For Deployments, StatefulSets, and DaemonSets.
> `v1`: For Pods, Services, and ConfigMaps.
> `networking.k8s.io/v1`: For NetworkPolicies and Ingress.
