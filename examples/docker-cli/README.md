# Docker-CLI

TODO

```powershell
docker # overwhelming (management commands + history)
docker info

docker ps
docker container ls
docker ps -a
docker container ls -a

docker images
docker image ls 

docker pull alpine
docker pull alpine:3.1

docker run ubuntu # does nothing
docker run -it ubuntu
  ll
  cd tmp
docker run -it ubuntu bash
docker run -it --rm ubuntu bash
docker run -it -v D:\temp:/tmp alpine
  cd tmp
  ll
  cat demo.txt
  vi demo.txt
docker run -d nginx:alpine # nothing reachable
docker run -d -p 8080:80 nginx:alpine # daemonized
docker run -p 8080:80 nginx:alpine
docker run -d -p 8080:80 --name snek_nginx nginx:alpine 

docker logs snek_nginx
docker logs -f snek_nginx

docker attach snek_nginx

docker exec -it snek_nginx sh
  ll

docker stop snek_nginx
docker kill snek_nginx

docker rm snek_nginx
docker container rm snek_nginx

docker rmi alpine:3.1
docker image rm alpine:3.1
```
