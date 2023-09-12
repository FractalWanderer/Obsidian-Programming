## Basics
---
#### Pod
A pod is a house for one or more containers.

#### Service
A service is a resource that you can use for exposing pods so that other pods can interact with them.

#### Namespace
A logical partitioning of cluster resources into isolated environments.

#### Node
A representation of a worker machine, VM, or physical machine.

#### Config Map
Stores non-confidential data in key-value pairs. Used for configuration.

#### Secret
Similar to a config map, except for confidential data.

## Workloads
---
#### Deployment
Manages desired state for Pods and ReplicaSets, mainly for stateless applications. Stateless here does not mean that the application doesn't use state itself, but rather that the application stores the state it uses externally. For example, an SQL database would be considered "stateful"