---
last-modified: 2023-09-13
tags:
  - kubernetes
---
## Basics
---
#### Pod

>[!questionno]
>A pod is a house for one or more containers.
#### Service

> [!questionno]
> A service is a resource that you can use for exposing pods so that other pods can interact with them.
A service is a resource that you can use for exposing pods so that other pods can interact with them.
#### Namespace

> [!questionno]
> A service is a resource that you can use for exposing pods so that other pods can interact with them.
#### Node

> [!questionno]
> A representation of a worker machine, VM, or physical machine.
#### Config Map

> [!questionno]
> Stores non-confidential data in key-value pairs. Used for configuration.
#### Secret

>[!questionno]
>Similar to a config map, except for confidential data.

## Workloads
---
#### Deployment

> [!questionno]
> Manages desired state for Pods and ReplicaSets, mainly for stateless applications.
> [[Stateless vs Stateful]]
#### Replica Set

> [!questionno]
> Ensures a specified number of identical Pods are running.
#### Stateful Set

> [!questionno]
> For stateful applications. Manages deployment and scaling but maintains a sticky identity.
#### Daemon Set

>[!questionno]
>Ensures that all or some Nodes run a copy of a Pod, often for node-level tasks.
#### Job

> [!questionno]
> Manages a task that runs to completion rather than serving long-lived endpoints.

#### Cron Job

> [!questionno]
> Manages time-based Jobs, essentially the crontab of Kubernetes.
## Storage
---
#### Persistent Volume

> [!questionno]
> Represents a storage resource in a cluster, like a disk in the cloud.
#### Persistent Volume Claim

> [!questionno]
> A request for storage that can be fulfilled by a persistent volume.
#### Storage Class

> [!questionno]
> Describes different "classes" of storage that can be provisioned.

## Discovery & Load Balancing
---
#### Ingress

> [!questionno]
> Manages external access to the services in your cluster.
#### Endpoint

> [!questionno]
> Exposes a set of IP addresses for a service.
#### APIResource

> [!questionno]
> Lists the API resources available in your cluster.
#### Network Policy

> [!questionno]
> Specifies how Pods communicate with each other.

## Config & Metadata
---
#### CustomResourceDefinition (CRD)

> [!questionno]
> Extends Kubernetes API by defining new resource types.
#### HorizontalPodAutoscaler

>[!questionno]
>Automatically scales the number of Pods based on observed metrics.
#### PodDisruptionBudget

> [!questionno]
> Specifies acceptable levels of disruption during voluntary terminations.
## RBAC & Security
---
#### Role

> [!questionno]
> Defines a set of permissions within a Namespace.
#### ClusterRole

> [!questionno]
> Defines permissions across the cluster.
#### RoleBinding

> [!questionno]
> Assigns a Role to a set of users within a Namespace.
#### ClusterRoleBinding

> [!questionno]
> Assigns a ClusterRole to a set of users.
#### ServiceAccount

> [!questionno]
> A special type of account used by Pods to interact with the Kubernetes API.
## Others
---
#### Event

> [!questionno]
> Provides actionable insights into specific events in a cluster.
#### LimitRange

> [!questionno]
> Sets resource usage constraints for each Namespace.
#### ResourceQuota

> [!questionno]
> Sets resource usage limits for a Namespace.
