---
last-modified: 9/13/2023
tags:
  - kubernetes
cssclasses:
  - hide-callout-titles
---
## API Version

> [!question] 
> The api version of a resource is specific to the resource you are targeting. When specifying an api version with 'apiVersion: ~version~' it tells kubernetes which version of the specific resource to use. Then kubernetes will use that version when applying the resource to a cluster. Generally speaking, the most typical version you will see used is 'apps/v1'.

#### Metadata

```
Meta data is exactly what it sounds like. It is just more information related to the particular resource that will be applied, in this case, a Deployment. The name test-deployment, although this could be anything.
```

