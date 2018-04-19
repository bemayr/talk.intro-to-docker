# Creating an Image

TODO: write documentation

```sh
docker run -d -p 8080:80 --name nginx_manual nginx:alpine
# open browser @http://localhost:8080/
docker exec -it nginx_manual sh
  cd usr/share/nginx/html
  vi index.html
  # change h1 to 'Welcome to SNEK 2018'
# refresh browser
  exit
docker commit nginx_manual snek/nginx_manual:1.0

docker stop nginx_manual

docker run -p 8081:80 snek/nginx_manual:1.0
# open browser @http://localhost:8081/
```
