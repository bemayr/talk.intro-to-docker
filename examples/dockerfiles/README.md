# Dockerfiles
This is the recommended way of creating Docker Images.
Using a *Dockerfile* the instructions for creating an image are specified there.
In this case it simply uses the small `alpine:nginx` base image and copies the *website* to the public nginx html directory.
Using *.dockerignore* we can specify files which should be excluded during the build, so we can fasten up the build process.

```sh
docker build -t snek/hi . # build an image with the name "snek/hi" using the current directory (.) as the build path
docker run -d --rm -p 8080:80 snek/hi # test the built image
# open browser @http://localhost:8080
```
