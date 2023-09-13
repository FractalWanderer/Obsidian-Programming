---
last-modified: 9/13/2023
tags:
  - kubernetes
---
## API Version
---
> [!quoteno]
> The api version of a resource is specific to the resource you are targeting. When specifying an api version with 'apiVersion: ~version~' it tells kubernetes which version of the specific resource to use. Then kubernetes will use that version when applying the resource to a cluster. Generally speaking, the most typical version you will see used is 'apps/v1'.

## Metadata
---
> [!quoteno]
> Meta data is exactly what it sounds like. It is just more information related to the particular resource that will be applied.

## Spec
---
> [!quoteno]
> The spec is the so called "desired state" that you want to achieve for a given resource.
