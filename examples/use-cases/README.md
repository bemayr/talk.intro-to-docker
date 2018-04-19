# More stuff you can do with Docker

## [Pi-hole®](https://pi-hole.net/)
> A black hole for Internet advertisements
> Network-wide ad blocking via your own Linux hardware
> No client-side software required

Pi-hole is an application that allows you to block ads via DNS-blocking. It is originally intended to be installed on a Raspberry PI, but there is a [Docker Container](https://hub.docker.com/r/diginc/pi-hole/) for it.

### Example Powershell Configuration
```powershell
function pihole-start      { docker run -d --name pihole --restart=always -p 53:53/tcp -p 53:53/udp -p 80:80 --cap-add=NET_ADMIN -e ServerIP="127.0.0.1" diginc/pi-hole:alpine }
function pihole-stop       { docker stop pihole; docker rm pihole }
function pihole-display    { docker exec pihole pihole chronometer }
function pihole-refresh    { docker exec pihole pihole updateGravity }
function pihole-update     { docker exec pihole pihole updatePihole }
function pihole-dashboard  { start http://pi.hole/admin/ }
function pihole            { docker exec pihole pihole ${args} }
function pihole-deactivate { netsh interface ip set dns "Wi-Fi" dhcp }
function pihole-activate   { netsh interface ipv4 add dnsserver "Wi-Fi" address=127.0.0.1 index=1 }
```

## Linux Experiments
Sometimes I just want to try something (on Linux) without keeping all the changes and it would be nice to try this in a *sandboxed* environment.
I usually do `docker run -it --rm ubuntu bash` to start hacking. The `-it` flag opens `stdin` and `stdout` and `--rm` removes the container after it is stopped.

## Local nginx for dev purposes
Sometimes I quickly need a simple static webserver for previewing static sites. In my case I just run `nginx <port>`, e.g. `nginx 8080` to preview the website.
```powershell
function nginx { docker run -it --rm -v ${pwd}:/usr/share/nginx/html:ro -p ${args}:80 nginx:alpine; start ('http://localhost:' + ${args}) }
```
This mounts the current directory into nginx and starts it bound to the supplied port.
You could also use something like [mongoose](https://github.com/cesanta/mongoose), or some kind of Python or node.js stuff, but then you would have to install something globally.
The Docker-Solution simply works on every machine.

## [softaware/webdev](https://github.com/softawaregmbh/docker-webdev)

## [lirantal/dockly](https://github.com/lirantal/dockly)
TODO: docker-socket, monitoring
```
docker run -it -v /var/run/docker.sock:/var/run/docker.sock lirantal/dockly
```
