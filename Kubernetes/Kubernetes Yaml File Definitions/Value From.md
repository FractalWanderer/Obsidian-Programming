---
last-modified: 2023-09-28
tags:
  - kubernetes
---
# Value From

>[!example]
>``` yaml
> valuesFrom:
>    fieldRef:
> 	   fieldPath: path
>    secretKeyRef:
> 	   name: your-secret-name 
> 	   key: your-secret-key
>    resourceFieldRef:
> 	   containerName: your-container
> 	   resource: container-resource
>     configMapKeyRef:
> 	   name: your-configmap
> 	   key: your-key
>  ```

## Definition

>[!quoteno]
>The location to retrieve an environment variable from.

## Field Ref

>[!quoteno]
>Allows you to set an environment variable based on various fields of the Pod itself.

>[!example] Common Use Cases
>__metadata.name__ (The name of the pod.)
>
>__metadata.namespace__ (The namespace where the Pod is running)
>
>__metadata.labels__ \['\<Label\>'\] (Specific label value for a label assigned to the Pod.)
>
>__metadata.annotations__ \[\<Annotation\>\] (The value of a specific annotations assigned to the Pod.)
>
>__metadata.uid__ (The unique ID of the Pod.)
>
>__spec.nodeName__ (The name of the node where the Pod is running.)
>
>__spec.serviceAccountName__ (The name of the ServiceAccount attached to the Pod.)
>
>__status.hostIP__ (The IP address of the node where the Pod is running.)
>
>__status.podIP__ (The IP address allocated to the Pod)
>
>__status.podIPs__ (The list of IP addresses for the Pod if it has more than one.)

## Resource Field Ref

> [!quoteno]
> Provides information relating to the low level processing configuration for the container on which it is defined.

>[!example] Common Use Cases  
>**limits.cpu** (CPU limit set for the container.)
>
>__limits.memory__ (Memory limit set for the container.)
>
>__limits.ephemeral-storage__ (Ephemeral storage limit set for the container.)
>
>**requests.cpu** (CPU request set for the container.)
>
>__requests.memory__ (Memory request set for the container.)
>
>__requests.ephemeral-storage__ (Ephemeral storage request set for the container.)

## Config Map Key Ref

>[!quoteno]
>Allows you to pull in configuration values from a [[Kubernetes/ConfigMap|Config Map]] and use them as environment variables.
