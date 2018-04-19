/* check if database exists */
SELECT name, database_id, create_date
FROM sys.databases;

/* dummy select first 1000 customers */
SELECT TOP (1000)
    *
FROM [AdventureWorksLT2012].[SalesLT].[Customer];
