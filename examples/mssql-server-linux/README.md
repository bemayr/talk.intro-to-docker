# microsoft/mssql-server-linux

TODO
Resource: https://blogs.msdn.microsoft.com/orrinedenfield/2017/10/sql-server-on-linux-on-docker-quick-and-easy/


```powershell
docker run -d -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Snek2018" -p 1433:1433 --name snek_sqlserver microsoft/mssql-server-linux
docker cp ${pwd}\data\AdventureWorksLT2012_Data.mdf snek_sqlserver:/var/opt/mssql/data/AdventureWorksLT2012_Data.mdf
```
