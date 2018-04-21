# microsoft/mssql-server-linux
Runnint SQL Server in a Linux Container is really easy thanks to Microsoft's great `microsoft/mssql-server-linux` image.
Just make sure you assigned your Docker VM at least 2 GBs of RAM.

```powershell
docker run -d -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Snek2018" -p 1433:1433 --name snek_sqlserver microsoft/mssql-server-linux
docker cp ${pwd}\data\AdventureWorksLT2012_Data.mdf snek_sqlserver:/var/opt/mssql/data/AdventureWorksLT2012_Data.mdf
# connect to the database running in the container (like you would connect to a normal database)
# run scripts/attach.sql
# now you can run demo queries against your SQL Database in the container
```

For more information take a look at this *awesome* [blog-article](https://blogs.msdn.microsoft.com/orrinedenfield/2017/10/sql-server-on-linux-on-docker-quick-and-easy/).
