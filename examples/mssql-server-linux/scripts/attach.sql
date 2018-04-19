-- Attach the MDF file copied into the container
USE [master]

GO

CREATE DATABASE [AdventureWorksLT2012] ON
    (FILENAME = N'/var/opt/mssql/data/AdventureWorksLT2012_Data.mdf')
    FOR ATTACH;

GO
