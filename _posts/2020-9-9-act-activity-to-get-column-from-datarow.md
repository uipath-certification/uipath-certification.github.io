---
layout: answered-question
author: Serge
title: UiPath Get Row Item Activity
blurb: Here's a look at how to get items from a DataTable in UiPath
difficulty: 6
objective: 7.2 Identify and describe Microsoft Excel and DataTable functions, and how Excel activities are used for data manipulation
canonical: https://www.rpacertified.com//2020/09/09/act-activity-to-get-column-from-datarow.html
keywords: UiPath get row item, get row activity datatable
---

Question: What activity is used to get a column value from a specific row of a DataTable?

 - [X] &nbsp;  Get row item
 - [ ] &nbsp;  remove data row
 - [ ] &nbsp;  read cell
 - [ ] &nbsp;  write cell

## Answer

Option A is correct.

You would use Get Row Item typically within a For Each Row for DataTables. This is an activity where it focuses on a single row's item. By this definition, each item within the row is technically a column.
The activity treats it this way as there are three ways you can specify the column.

**ColumnIndex** - This is the index or place of where the column is located within the row.

**ColumnName** - The exact name of the column with in the row. 

**Column** - This will return an object cotaining the value of the column

If one of these fields is set, the other's are ignored.

Answer B is incorrect because we need to read the column, not delete a row.

Answer C and D deal with the cell value of a spreadsheet. While a cell contains the row and column information, we were specifically looking for the column in the row of a DataTable.

For more information on Get Row Item, please see this <a href="https://docs.uipath.com/activities/docs/get-row-item">link</a>.

