---
last-modified: 2023-09-27
tags:
  - kubernetes
  - "#might-add-more"
---
When using private image registries for storing images, it is often the case that the registry is private only to authenticated users who have credentials for connecting to them. This guide will serve to authenticate Kubernetes, so that it is able to pull images and create containers from those images, without running into authentication issues during the image pull process. 

>[!example]+ Azure Private Registry Options 
>>[!warning] Important
>>If you are deploying to AKS authentication for pulling images from Azure's private registry is handled for you already. No need to perform any manual authentication
>
>>[!abstract]+ Option 1: Admin User
>>
>>>[!warning]
>>>This option is only recommended for development environments.
>>
>>>[!example] Steps
>>>1. In Azure, select the Container Registry where all of your relevant images are stored.
>>>2. Navigate to the 'Access Keys' tab.
>>>3. Within this tab, you should see an 'Admin user' field. Make sure the checkbox is checked, and now you should see a username associated with the registry, as well as two separate passwords.
>>>4. Create the kubernetes secret in kubernetes command line:
>>>```
>>>kubectl create secret docker-registry image-credentials-secret --docker-server=your-server --docker-username=your-admin-username --docker-password=your-admin-password
>>>```
>>>>[!danger] Warning
>>>>Make sure to wrap your admin password in quotes, otherwise there is a chance it might not be created properly.
>
>>[!abstract]+ Option 2: New Service Principle
>>>[!example] Steps
>>>1. Through command line, create a service principle that will be used for giving ACR pull permissions:
>>>```shell
>>>az ad sp create-for-rbac --name http://your-service-principle-name --scopes /subscriptions/your-subscription-id/resourceGroups/your-resource-group/providers/Microsoft.ContainerRegistry/registries/your-acr-name --role acrpull
>>>```
>>>2. Temporarily take note of the app id, and the password.
>>>3. Create the kubernetes secret:
>>>```shell
>>>kubectl create secret docker-registry image-credentials-secret --docker-server=your-acr-server --docker-username=your-appId --docker-password=your-password
>>>```
>>>>[!danger] Warning
>>>>Make sure to wrap your password in quotes, otherwise there is a chance it might not be created properly.
>
>>[!abstract]+ Option 3: Existing Service Principle 
>>> [!example] Steps
>>> 1. If you already have the appId and password associated with the service principle, **skip to step 7**.
>>> 2. In the Azure portal, navigate to the app registry associated with your ACR. If your not sure where to find this, go to the **Access control (IAM)** tab of your ACR, and then to the **Role assignments** tab. Here you can check for the registry you need. The registry should have at minimum AcrPull permissions. Note down the name, as this is what we will search for.
>>> 3. Now leave the registry page, and go to the App registries section where you can search for registries. Search for the name of the registry you noted down. (Clicking on the link that is provided in the **Access control (IAM)** will not take you to the correct page)
>>> 4. Here in the overview, note down the **Application (client) ID**.
>>> 5. Navigate to the **Certificates & secrets** page, and then the **Client secrets** tab.
>>> 6. If you already have the secret noted, **skip to step 7**, otherwise, delete the already existing secret and create a new one in its place. Once created, make sure you note down temporarily the value of the secret, as this is only displayed once and we will be using it as the password when we create the secret in Kubernetes.
>>>7. Create the kubernetes secret:
>>>```shell
>>>kubectl create secret docker-registry image-credentials-secret --docker-server=your-acr-server --docker-username=your-appId --docker-password=your-client-secret
>>>```
>>>>[!danger] Warning
>>>>Make sure to wrap your password in quotes, otherwise there is a chance it might not be created properly.
>
>>[!abstract]+ Option 4: Secret Already Exists
>>Often times with working within a cluster, a secret of this nature has already been created. Even if you are creating a brand new deployment from scratch, you can use an already existing secret on a cluster to access a registry by just specifying its name when specifying your containers.

---

 >[!example]+ Docker Hub Private Registry
 >>[!example] Steps
>>1. Create the Secret in through the kubernetes command line.
>>```
>>kubectl create secret docker-registry image-credentials-secret --docker-server=https://index.docker.io/v1/ --docker-username=your-dockerhub-username --docker-password=your-dockerhub-password
>> ```
>> 2. That's it.
