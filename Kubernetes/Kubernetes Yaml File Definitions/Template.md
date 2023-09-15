---
last-modified: 2023-09-15
tags:
  - kubernetes
---
> [!example]
> ```yaml
> template:
>    metadata:
>      labels:
>        app: example-app
>    spec:
>      volumes:
>        - name: your-secret-volume
>          secret:
>            secretName: your-secret-name
>      imagePullSecrets:
>        - name: acr-secret
>      containers:
>      - name: your-container
>        image: your-image-url
>        imagePullPolicy: Always
>        ports:
>          - containerPort: 8080
>        env:
>          - name: EnvironmentVariable
>            value: "Hello world!"
>          - name: YourSecretEnvironmentVariable
>            valueFrom:
>                secretKeyRef:
>                  name: your-secret-name 
>                  key: your-secret-key
>        volumeMounts:
>          - name: your-secret-volume
>            mountPath: "/app/secrets"
>            readOnly: true
>     strategy:
>	     type: RollingUpdate
>		     maxUnavailable: 1
>		     maxSurge: 1
>  ```

## Definition

> [!quoteno]
> Specifies the label(s) that must exist on [[Kubernetes Declarative Resource Definitions#pod|Pods]] for them to be managed by a [[Kubernetes Declarative Resource Definitions#Deployment|Deployment]].