# Docker-CLI
The following commands will get you started with the basic features of the Docker CLI.
Keep in mind that with version 1.13 Docker introduced so-called *management commands*.[*](https://blog.couchbase.com/docker-1-13-management-commands/) 

```bash
docker # prints the list of available commands
docker info # prints info about the running docker engine

docker ps # prints a list of all running containers
docker container ls # mgmt command for above
docker ps -a # prints a list of all (running and stopped) containers
docker container ls -a # mgmt command for above

docker images # prints a list of the available (downloaded) images
docker image ls # mgmt command for above

docker pull alpine # download the alpine image from Docker Hub
docker pull alpine:3.1 # download the alpine image with the tag "3.1" from Docker Hub

docker run ubuntu # runs an Ubuntu container, but exits immediately because no start command was specified
docker run -it ubuntu # runs Ubuntu with stdin and stdout opened, a bash will be shown
  ll
  cd tmp
docker run -it ubuntu bash # explicitely run bash in an Ubuntu container
docker run -it --rm ubuntu bash # run bash in Ubuntu and remove the container (--rm) immediately after it was stopped
docker run -it -v D:\temp:/tmp alpine # runs an alpine container with a mapped directory; replace the argument of -v with your pathes
  cd tmp
  ll
  touch test.txt 
  cat demo.txt
  vi demo.txt # remember :q to exit vi ;)
docker run -d nginx:alpine # starts nginx:alpine as a daemonized container (in the background), no port mappings defined
docker run -d -p 8080:80 nginx:alpine # run nginx:alpine with the port 80 mapped to the host port 8080
docker run -p 8080:80 nginx:alpine # run nginx:alpine in foreground
docker run -d -p 8080:80 --name snek_nginx nginx:alpine # run nginx with ports mapped in the background and supply a name

docker logs snek_nginx # show logs of container snek_nginx
docker logs -f snek_nginx # show logs of container snek_nginx with live-reloading

docker attach snek_nginx # attach to the running process of container snek_nginx

docker exec -it snek_nginx sh # start a shell (sh) in the running container snek_nginx
  ll

docker stop snek_nginx # stop a container
docker kill snek_nginx # force a container to stop

docker rm snek_nginx # remove a stopped container
docker container rm snek_nginx # mgmt command for above

docker rmi alpine:3.1 # remove an image 
docker image rm alpine:3.1 # mgmt command for above
```
