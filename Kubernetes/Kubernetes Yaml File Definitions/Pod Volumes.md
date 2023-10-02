---
last-modified: 2023-09-15
tags:
  - kubernetes
---
# Pod Volume

>[!example]
>``` yaml
> volumes:
>   - name: your-secret-volume
> 	secret:
> 	  secretName: your-secret-name
>   - name: your-host-path-volume
> 	 hostPath:
> 		 path: /data/some/folder
> 		 type: DirectoryOrCreate
>   - name: your-empty-dir-volume
> 	 emptyDir: {}
>  ```

## Definition

>[!quoteno]
>Used for mounting storage, either from the host or external storage. These specifically relate to the pod for which they are defined, and can be used by containers that use the pod definition.

## Name

>[!quoteno]
>The name of the volume.