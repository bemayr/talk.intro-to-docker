# docker-compose
*docker-compose* is a tool for managing the build and lifecycle of multiple containers.
In this example the backend is built using [.NET Core](https://dotnet.github.io/) and the frontend using [React](https://reactjs.org/).
Use the following commands to build and run the example.

```powershell
cd BTC.Converter
docker-compose build
docker-compose build frontend
docker-compose up
# open browser @localhost:8080
```
