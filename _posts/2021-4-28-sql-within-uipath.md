---
layout: featured-post
author: Serge
title: 'Connecting to a SQLite3 Database on server or your workstation'
blurb: 'Databases are useful tools but how do we connect to a database within UiPath? We dive into this further'
difficulty: -1
keywords: UiPath Database, UiPath SQL, UiPath SQLite, SQLite3, UiPath Database connection, UiPath ODBC
canonical: https://www.rpacertified.com/2021/04/28/sql-within-uipath.html
---

# Connecting to a SQLite3 Database on server or your workstation

You will need to download and create a database table.  For our purposes, we have selected SQLite3.

While this website assumes you know how to set up a command line database as well as the associated DSN, there is one caveat.
UIPath may produce this error when you try to run a query

“Failed to enable constraints. One or more rows contain values violating non-null, unique, or foreign-key constraints”

The query may work in the command line of the database but not in UIPath but this is deceptive as this is not a UIPath issue.  It is an issue with the database table itself.  
The table elements must be a type that UIPath can use.

For instance, one of the issues documented:
SQLite will allow you to create the database table like this
 - create table clients (name text null, email text null, goodstanding text null);
While this is allowable in the database and it will work, UIPath will not be able to read these rows.  Instead, create the table like this:
 - create table clients (name string null, email string null, goodstanding <b>string</b> null);

UIPath will not know how to handle a variable type “text”
Once you have created your database and dsn ODBC connection, you can now use it in UIPath.


## UIPath Connection

Drag the Database > Connect activity into your sequence or flowchart
Click on “Configure Settings” and then connection wizard

<img src="/assets/sql-fig1.jpg"/>
 
 
Select <Other> for Data Source and “.Net Framework provider for ODBC” for Data Provider
Click OK
 
<img src="/assets/sql-fig2.jpg"/>
 
 
Select the ODBC DSN name
If the database requires a user/password, enter that too.  Then click on test connection

<img src="/assets/sql-fig3.jpg"/>
 
You should get this:

<img src="/assets/sql-fig4.jpg"/>
 
What it will output is a Database Connection.  While the focus is on the database connection Activity, go to the output section and in the Database Connection, create the variable (Control K) and name the variable.

<img src="/assets/sql-fig5.jpg"/>

<img src="/assets/sql-fig6.jpg"/>
 


## Query the database

Now that you have the connection, you will want to pull in the data and manipulate the tables

Drag in an Database > ExecuteQuery activity

Click on Configure Connection, you will get the below.

Under Existing Database Connection, enter the Connection you just created previously

In the edit query, you can put in pure SQL.  Everything in the query must be string.

What this should return is a datatable.  Name your Datatable output accordingly

<img src="/assets/sql-fig7.jpg"/>


## Update/Insert/Delete into the Database

If you want to update, insert or delete single records, you will use a Execute non-query activity

It is very similar to the query one except it doesn’t produce a table as output.  The output will be “Affected Records” which is an integer variable.

The query string will be pure SQL


<img src="/assets/sql-fig8jpg"/>
  
## Inserting an entire table into a database table

To insert an entire (and compatible) data table into the database table, you will want to use the Database > Insert activity

Enter the Database Connection that you created and click okay

<img src="/assets/sql-fig9.jpg"/>
 
The enter the database table you want to insert into in Quotes

And then enter the table name that you have created or pulled from another resource in the last field

<img src="/assets/sql-fig10.jpg"/>
 
Output will be an integer (Affected Records)
