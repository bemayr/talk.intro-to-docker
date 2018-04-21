# Docker Registry
> A Registry is a stateless, highly scalable server side application that stores and lets you distribute Docker images. [- Docker Docs](https://docs.docker.com/registry/#what-it-is)

For distributing Docker Images you need a registry where those are hosted and can be pulled from.
The official Docker Registry is [Docker Hub](https://hub.docker.com/).
You don't need an account to pull images, just to push them.

Take a look how many images [Microsoft](https://hub.docker.com/search/?isAutomated=0&isOfficial=0&page=1&pullCount=0&q=microsoft&starCount=0) has hosted on the official Docker Hub.
Even [softaware](https://hub.docker.com/search/?isAutomated=0&isOfficial=0&page=1&pullCount=0&q=softaware&starCount=0) hosts its own images on the Docker Hub.

## Self-Host a registry
You can also self-host your registry by using an official Docker Image. For demonstration purposes it is as simple as running the following command:
```bash
docker run -d -p 5000:5000 --restart always --name registry registry:2
```
Keep in mind that this registry is by no way protected by any security measurements.

## [Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry/)
There are also a few managed container registries out there, as an example Azure offers the service *Container Registry*. The advantages of such a managed, hosted registry are e.g. you don't have to update the registry by yourself, supply your own storage, manage backups or role your own authorization.
