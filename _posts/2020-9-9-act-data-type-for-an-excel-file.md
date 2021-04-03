---
layout: answered-question
author: Serge
title: UiPath Excel File Mapping Datatype
blurb: Here's how to chose the right UiPath datatype to hold an Excel file
difficulty: 6
objective: 7.2 Identify and describe Microsoft Excel and DataTable functions, and how Excel activities are used for data manipulation
canonical: https://www.rpacertified.com/2020/09/09/act-data-type-for-an-excel-file.html
keywords: uipath excel
---

<h1>UiPath and Excel</h1>

Question:  Which data type is used for extracting data from a Microsoft Excel file using a Read Range activity?

 - [X] &nbsp;  DataTable
 - [ ] &nbsp;  Array
 - [ ] &nbsp;  Object
 - [ ] &nbsp;  String

## Answer

Option A is correct.

The correct answer is A.  Data Tables are explicitly used when working with Excel as they are the closest argument type to mimicking an excel spreadsheet.  An array would not work as they are typically one dimensional and you need to know the size before hand.  String manipulations would be very cumbersome to use.  While Objects are great in general, the Data Table was created for this job.

