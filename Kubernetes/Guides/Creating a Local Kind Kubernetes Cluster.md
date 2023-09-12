---
last-modified: 2023-09-11
tags:
  - kind
  - kubernetes
---
## Step 1
---
#### Install Chocolatey (optional)
[Chocolatey Installation](https://chocolatey.org/install)

#### Install kind
[Kind Installation](https://kind.sigs.k8s.io/docs/user/quick-start/#installation) 

I personally recommend using chocolatey for the installation, as it makes the process pretty much pain free. No need to set any environment variable, or do any additional configuration.

## Step 2
---
#### Create a Kind Cluster

```shell
kind create cluster
```

## Step 3
---
#### Profit

That is literally all you need to do if you don't need any specific configuration. Kind is great for local testing before deploying to a cloud environment.

For specific configuration, see: [Kind Quick Start](https://kind.sigs.k8s.io/docs/user/quick-start/)
