---
last-modified: 2023-09-14
tags:
  - kubernetes
---
# Kubernetes Declarative Resource Definitions
## Basics
---
#### Pod

>[!quoteno]
>A pod is a house for one or more containers.
#### Service

> [!quoteno]
> A service is a resource that you can use for exposing pods so that other pods can interact with them.
###### Cluster IP

>[!quoteno]
>Used for exposing applications internally to the cluster. Great for allowing inter-pod communication to occur, without exposing a pod to the internet.

###### Node Port

>[!quoteno]
>Exposes a service on a port (the same port) on every node of the cluster. You can access the service externally by using '\<NodeIP\>:\<NodePort\>'
>
>Node ports are good for quick testing, as well as scenarios where low-level routing is ideal.


#### Node

> [!quoteno]
> A representation of a worker machine, VM, or physical machine.
#### Config Map

> [!quoteno]
> Stores non-confidential data in key-value pairs. Used for configuration.
#### Secret

>[!quoteno]
>Similar to a config map, except for confidential data.

#### Namespace

>[!quoteno]
> A Namespace in Kubernetes is essentially a virtual cluster within a physical cluster. It provides a scope for names of resources, allowing you to organize and isolate them into separate logical units. Think of it like a folder in a file system, where you can group related applications, services, and resources. Namespaces make it easier to manage permissions, resource quotas, and multi-tenancy issues in a more complex Kubernetes environment. In simpler terms, it's a way to divide your big playground into smaller, more manageable areas for different teams or projects.

## Workloads
---
#### Deployment

> [!quoteno]
> Manages desired state for Pods and ReplicaSets, mainly for stateless applications.
> [[Stateless vs Stateful]]
#### Replica Set

> [!quoteno]
> Ensures a specified number of identical Pods are running.
#### Stateful Set

> [!quoteno]
> For stateful applications. Manages deployment and scaling but maintains a sticky identity.
#### Daemon Set

>[!quoteno]
>Ensures that all or some Nodes run a copy of a Pod, often for node-level tasks.
#### Job

> [!quoteno]
> Manages a task that runs to completion rather than serving long-lived endpoints.

#### Cron Job

> [!quoteno]
> Manages time-based Jobs, essentially the crontab of Kubernetes.
## Storage
---
#### Persistent Volume

> [!quoteno]
> Represents a storage resource in a cluster, like a disk in the cloud.
#### Persistent Volume Claim

> [!quoteno]
> A request for storage that can be fulfilled by a persistent volume.
#### Storage Class

> [!quoteno]
> Describes different "classes" of storage that can be provisioned.

## Discovery & Load Balancing
---
#### Ingress

> [!quoteno]
> Manages external access to the services in your cluster.
#### Endpoint

> [!quoteno]
> Exposes a set of IP addresses for a service.
#### APIResource

> [!quoteno]
> Lists the API resources available in your cluster.
#### Network Policy

> [!quoteno]
> Specifies how Pods communicate with each other.

## Config & Metadata
---
#### CustomResourceDefinition (CRD)

> [!quoteno]
> Extends Kubernetes API by defining new resource types.
#### HorizontalPodAutoscaler

>[!quoteno]
>Automatically scales the number of Pods based on observed metrics.
#### PodDisruptionBudget

> [!quoteno]
> Specifies acceptable levels of disruption during voluntary terminations.
## RBAC & Security
---
#### Role

> [!quoteno]
> Defines a set of permissions within a Namespace.
#### ClusterRole

> [!quoteno]
> Defines permissions across the cluster.
#### RoleBinding

> [!quoteno]
> Assigns a Role to a set of users within a Namespace.
#### ClusterRoleBinding

> [!quoteno]
> Assigns a ClusterRole to a set of users.
#### ServiceAccount

> [!quoteno]
> A special type of account used by Pods to interact with the Kubernetes API.
## Others
---
#### Event

> [!quoteno]
> Provides actionable insights into specific events in a cluster.
#### LimitRange

> [!quoteno]
> Sets resource usage constraints for each Namespace.
#### ResourceQuota

> [!quoteno]
> Sets resource usage limits for a Namespace.
