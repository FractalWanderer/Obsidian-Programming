---
last-modified: 2023-09-12
tags:
  - kubernetes
cssclasses:
  - hide-callout-titles
---
## Basics
---
#### Pod

>[!question]
>A pod is a house for one or more containers.
#### Service

> [!question]
> A service is a resource that you can use for exposing pods so that other pods can interact with them.
A service is a resource that you can use for exposing pods so that other pods can interact with them.
#### Namespace

> [!question]
> A service is a resource that you can use for exposing pods so that other pods can interact with them.
#### Node

> [!question]
> A representation of a worker machine, VM, or physical machine.
#### Config Map

> [!question]
> Stores non-confidential data in key-value pairs. Used for configuration.
#### Secret

>[!question]
>Similar to a config map, except for confidential data.

## Workloads
---
#### Deployment

> [!question]
> Manages desired state for Pods and ReplicaSets, mainly for stateless applications.
> [[Stateless vs Stateful]]
#### Replica Set

> [!question]
> Ensures a specified number of identical Pods are running.
#### Stateful Set

> [!question]
> For stateful applications. Manages deployment and scaling but maintains a sticky identity.
#### Daemon Set

>[!question]
>Ensures that all or some Nodes run a copy of a Pod, often for node-level tasks.
#### Job

> [!question]
> Manages a task that runs to completion rather than serving long-lived endpoints.

#### Cron Job

> [!question]
> Manages time-based Jobs, essentially the crontab of Kubernetes.
## Storage
---
#### Persistent Volume

> [!question]
> Represents a storage resource in a cluster, like a disk in the cloud.
#### Persistent Volume Claim

> [!question]
> A request for storage that can be fulfilled by a persistent volume.
#### Storage Class

> [!question]
> Describes different "classes" of storage that can be provisioned.

## Discovery & Load Balancing
---
#### Ingress

> [!question]
> Manages external access to the services in your cluster.
#### Endpoint

> [!question]
> Exposes a set of IP addresses for a service.
#### APIResource

> [!question]
> Lists the API resources available in your cluster.
#### Network Policy

> [!question]
> Specifies how Pods communicate with each other.

## Config & Metadata
---
#### CustomResourceDefinition (CRD)

```
Extends Kubernetes API by defining new resource types.
```

#### HorizontalPodAutoscaler

```
Automatically scales the number of Pods based on observed metrics.
```

#### PodDisruptionBudget

```
Specifies acceptable levels of disruption during voluntary terminations.
```

## RBAC & Security
---
#### Role

```
Defines a set of permissions within a Namespace.
```

#### ClusterRole

```
Defines permissions across the cluster.
```

#### RoleBinding

```
Assigns a Role to a set of users within a Namespace.
```

#### ClusterRoleBinding

```
Assigns a ClusterRole to a set of users.
```

#### ServiceAccount

```
A special type of account used by Pods to interact with the Kubernetes API.
```

## Others
---
#### Event

```
Provides actionable insights into specific events in a cluster.
```

#### LimitRange

```
Sets resource usage constraints for each Namespace.
```

#### ResourceQuota

```
Sets resource usage limits for a Namespace.
```

![[Kubernetes Yaml File Definitions]]