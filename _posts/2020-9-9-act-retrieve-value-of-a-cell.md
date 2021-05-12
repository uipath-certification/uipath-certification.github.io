---
layout: answered-question
author: Serge
title: UiPath Data Row objects
blurb: Here's an explaination of which activity can be used to retrieve the value from a certain cell through a DataRow object.
difficulty: 6
objective: 7.2 Identify and describe Microsoft Excel and DataTable functions, and how Excel activities are used for data manipulation
canonical: https://www.rpacertified.com//2020/09/09/act-retrieve-value-of-a-cell.html
---

Question:  Which activity can be used to retrieve the value from a certain cell, from a DataRow object?

 - [ ] &nbsp;  Read Cell
 - [ ] &nbsp;  Write Cell
 - [X] &nbsp;  Get Row Item
 - [ ] &nbsp;  Remove Data Row

## Answer

Option C is correct.

Read Cell and Write Cell are activities that work with an Excel spreadsheet directly within any spreadsheet activity.  
Removing Data Row will only remove the data, it will not read it, obviously.  

Get Row Item will pull the info in the specific column of that row, which by definition, is a certain cell.
