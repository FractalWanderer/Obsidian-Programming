---
last-modified: 2023-09-15
tags:
  - kubernetes
---
>[!example]
>``` yaml
> spec:
>  volumes:
>    - name: your-secret-volume
> 	 secret:
> 	   secretName: your-secret-name
>  imagePullSecrets:
>    - name: acr-secret
>  containers:
>  - name: your-container
>    image: your-image-url
>    imagePullPolicy: Always
>    ports:
> 	 - containerPort: 8080
>    env:
> 	 - name: EnvironmentVariable
> 	   value: "Hello world!"
> 	 - name: YourSecretEnvironmentVariable
> 	   valueFrom:
> 		   secretKeyRef:
> 			 name: your-secret-name 
> 			 key: your-secret-key
>    volumeMounts:
> 	 - name: your-secret-volume
> 	   mountPath: "/app/secrets"
> 	   readOnly: true
>  ```

[[Pod Volumes]]
[[Kubernetes/Kubernetes Yaml File Definitions/Image Pull Secrets|Image Pull Secrets]]
[[Kubernetes/Kubernetes Yaml File Definitions/Containers|Containers]]

