# Creating an Image
The following code snippet is used to demonstrate the process of creating an image using `docker commit <...>`.
It works, but please use the recommended way of creating images using a [*Dockerfile*](../dockerfiles)

```sh
docker run -d -p 8080:80 --name nginx_manual nginx:alpine
# open browser @http://localhost:8080/
docker exec -it nginx_manual sh
  cd usr/share/nginx/html
  vi index.html #remember :qw ;)
  # change h1 to 'Welcome to SNEK 2018'
  # refresh browser
  exit
docker commit nginx_manual snek/nginx_manual:1.0

docker stop nginx_manual

docker run -p 8081:80 snek/nginx_manual:1.0
# open browser @http://localhost:8081/
```
