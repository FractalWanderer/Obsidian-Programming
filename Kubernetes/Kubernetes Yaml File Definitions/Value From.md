---
last-modified: 2023-09-18
tags:
  - kubernetes
---
>[!example]
>``` yaml
> valueFrom:
> 	fieldRef:
> 		fieldPath: metadata.name
> 		
> valueFrom:
>    secretKeyRef:
> 	 name: your-secret-name 
> 	 key: your-secret-key
> 	 
> valueFrom:
> 	resourceFieldRef:
> 		containerName: my-container
> 		resource: container-resource
> 		
> valueFrom:
> 	configMapKeyRef:
> 		name: my-configmap
> 		key: my-key
>  ```

## Example

>[!quoteno]
>The location to retrieve an environment variable from.

## Field Ref

>[!quoteno]
>Allows you to set an environment variable based on various fields of the Pod itself.


>[!example] Common Use Cases
>```
>metadata.name (The name of the pod.)
>metadata.namespace (The namespace where the Pod is running)
>metadata.labels \['\<Label\>'\] (Specific label value for a label assigned to the Pod.)
>metadata.annotations\[\<Annotation\>\] (The value of a specific annotations assigned to the Pod.)
>metadata.uid (The unique ID of the Pod.)
>spec.nodeName (The name of the node where the Pod is running.)
>spec.serviceAccountName (The name of the ServiceAccount attached to the Pod.)
>status.hostIP (The IP address of the node where the Pod is running.)
>status.podIP (The IP address allocated to the Pod)
>status.podIPs (The list of IP addresses for the Pode if it has more than one.)
>```


