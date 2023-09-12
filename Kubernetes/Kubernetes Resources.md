---
last-modified: 2023-09-12
tags:
  - kubernetes
---
## Basics
---
#### Pod

```
A pod is a house for one or more containers.
```

#### Service

```
A service is a resource that you can use for exposing pods so that other pods can interact with them.
```

#### Namespace

```
A logical partitioning of cluster resources into isolated environments.
```

#### Node

```
A representation of a worker machine, VM, or physical machine.
```

#### Config Map

```
Stores non-confidential data in key-value pairs. Used for configuration.
```

#### Secret

```
Similar to a config map, except for confidential data.
```

## Workloads
---
#### Deployment

```
Manages desired state for Pods and ReplicaSets, mainly for stateless applications.
```
[[Stateless vs Stateful]]
#### Replica Set

```
Ensures a specified number of identical Pods are running.
```

#### Stateful Set

```
For stateful applications. Manages deployment and scaling but maintains a sticky identity.
```

#### Daemon Set

```
Ensures that all or some Nodes run a copy of a Pod, often for node-level tasks.
```

#### Job

```
Manages a task that runs to completion rather than serving long-lived endpoints.
```

#### Cron Job

```
Manages time-based Jobs, essentially the crontab of Kubernetes.
```

## Storage
---
#### Persistent Volume

```
Represents a storage resource in a cluster, like a disk in the cloud.
```

#### Persistent Volume Claim

```
A request for storage that can be fulfilled by a persistent volume.
```

#### Storage Class

```
Describes different "classes" of storage that can be provisioned.
```

## Discovery & Load Balancing
---
#### Ingress

```
Manages external access to the services in your cluster.
```

#### Endpoint

```
Exposes a set of IP addresses for a service.
```

#### APIResource

```
Lists the API resources available in your cluster.
```

#### Network Policy

```
Specifies how Pods communicate with each other.
```

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


## Yaml File Definitions
---
#### API Version

```
The api version of a resource is specific to the resource you are targeting. When specifying an api version with 'apiVersion: <Version>' it tells kubernetes which version of the specific resource to use. Then kubernetes will use that version when applying the resource to a cluster. Generally speaking, the most typical version you will see used is 'apps/v1'.
```

