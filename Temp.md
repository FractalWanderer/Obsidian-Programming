#### Ports

> [!quoteno]
> Defines the ports that the container exposes. This is generally just the same end result as what you would normally do in Docker for a given container.

#### Volume Mount

> [!quoteno]
> Specifies what volumes should be mounted to a container.

#### Strategy

> [!quoteno]
> Defines how updates to a Deployment should be rolled out.

##### Strategy Types
---
###### RollingUpdate

> [!quoteno]
> Incrementally replaces old Pods with new ones while maintaining service availability. 
###### Recreate

> [!quoteno]
> Terminates all existing Pods before new ones are created. Causes downtime for your application.

