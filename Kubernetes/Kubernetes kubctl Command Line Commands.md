---
tags:
  - no-end-in-sight
  - kubernetes
last-modified: 2023-06-09
---
## Deployment Commands
---
#### Create Deployment

```shell
kubectl create deployment <DeploymentName> --image=<ImageName>
```

#### Update Deployment

```shell
kubectl set image deployment/<DeploymentName> <ContainerName>=<NewImage>
```

#### Rollback Deployment

```shell
kubectl rollout undo deployment/<DeploymentName>
```

#### Scale Deployment

```shell
kubectl scale deployment <DeploymentName> --replicas=<NumberOfReplicas>
```

#### Pause/Resume Deployment

```shell
kubectl rollout pause deployment/<DeploymentName>
kubectl rollout resume deployment/<DeploymentName>
```

#### Apply a Yaml File

```shell
kubectl apply -f <YourYamlFile>.yaml
```

#### Delete a Deployment

```shell
kubectl delete deployment <DeploymentName>
```

## Status Checking Commands
---
#### Get Current Cluster Context

```shell
kubectl config current-context
```
#### Get Pods

```shell
kubectl get pods
```

#### Describe Pods

```shell
kubectl describe pod <PodName>
```

#### Get Deployments

```shell
kubectl get deployments
```

#### Get All Resources

```shell
kubectl get all
```

#### Check Rollout Status

```shell
kubectl rollout status deployment/<DeploymentName>
```

## Secret Commands
---
#### Create Secret from Literal

```shell
kubectl create secret generic <SecretName> --from-literal=key=value
```
###### Alternative

```shell
kubectl create secret generic <SecretName> --from-literal=key=value --from-literal=key=value --from-literal=key=value
```

#### Create Secret from File

```shell
kubectl create secret generic <SecretName> --from-file=<FilePath>
```

#### Get Secrets

```shell
kubectl get secrets
```

#### Get Specific Secret
! needs tested
```shell
kubectl get secret <SecretsName> -o jsonpath="{.data.<KeyName>}"
```

#### Describe Secret

```shell
kubectl describe secret <SecretName>
```

#### Delete Secret

```shell
kubectl delete secret <SecretName>
```

## Container Interaction Commands
---
#### View Logs for a Container

```shell
kubectl logs <PodName> -c <ContainerName>
```

#### Stream Live Logs

```shell
kubectl logs -f <PodName> -c <ContainerName>
```

#### Get Logs from Terminated Container

```shell
kubectl logs -p <PodName> -c <ContainerName>
```

#### Execute Commands in Running Container

```shell
kubectl exec -it <PodName> -c <ContainerName> -- /bin/bash
```

#### Copy Files to/from a Container

```shell
kubectl cp <LocalFilePath> <PodName>:<ContainerFilePath> -c <ContainerName>
```

#### Port Forward to a Pod

```shell
kubectl port-forward <PodName> <LocalPort>:<ContainerPort>
```

## Delete Commands
---
#### Delete a Pod

```shell
kubectl delete pod <PodName>
```

#### Force Delete a Stuck Pod

```shell
kubectl delete pod <PodName> --force --grace-period=0
```

#### Delete All Pods with a Label

```shell
kubectl delete pods -l <LabelSelector>
```

#### Delete Deployment

```shell
kubectl delete deployment <DeploymentName>
```

#### Delete Service

```shell
kubectl delete service <ServiceName>
```

#### Delete Everything in a Namespace

```shell
kubectl delete all --all -n <Namespace>
```

#### Delete Namespace

```shell
kubectl delete namespace <Namespace>
```

#### Rolling Restart of a Deployment

```shell
kubectl rollout restart deployment <DeploymentName>
```


