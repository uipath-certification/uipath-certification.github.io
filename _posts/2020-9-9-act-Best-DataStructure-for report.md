---
layout: answered-question
author: Serge
title: Excel Report for each month
blurb: Best data type for looping through months
difficulty: 6
objective: 7.2 Identify and describe Microsoft Excel and DataTable functions, and how Excel activities are used for data manipulation
canonical: 
---

<h1>Excel Report for each month</h1>

Question:  A user needs to download a report for each month of the year and decides to loop over the months using a "For Each" activity. Which datatype is best-suited to hold the values of the names of the months?

 - [ ] &nbsp;  String
 - [X] &nbsp;  List(Of String)
 - [ ] &nbsp;  GenericValue
 - [ ] &nbsp;  String[] – Array for String

## Answer

Option B is correct.

The correct answer is B.  For Each loops path of least resistance is to use a List of a specific type argument.  In this case String.  With strings you would have to use the string manipulation functions and Arrays are best suited for While and Do While loops.

