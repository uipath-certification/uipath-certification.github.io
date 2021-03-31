---
layout: answered-question
author: Serge
title: Data type for looping through months
blurb: What is the best data type for looping through months of the year
difficulty: 6
objective: 7.2 Identify and describe Microsoft Excel and DataTable functions, and how Excel activities are used for data manipulation
canonical: 
---

<h1>Data type for looping through months</h1>

Question:  A user needs to download a report for each month of the year and decides to loop over the months using a "For Each" activity. Which datatype(s) are best-suited to hold the values of the names of the months?

 - [ ] &nbsp;  String
 - [X] &nbsp;  List(Of String)
 - [ ] &nbsp;  GenericValue
 - [X] &nbsp;  String[] – Array for String

## Answer

Option B and D are correct.

A For Each loops activity can iterate through lists, arrays, data tables or any type of collection. It would be a good idea to hold the names of each month in a collection such as an array or list. As B and D are collections, these are the correct answers.

While you could argue that a string is a collection of characters and you should be able to loop through them, it's not the best fit for this problem. We are looking for the best data type for this problem and the name of months don't natually fit as characters in a ctring.  Also, when it comes to strings, while and do while loops lend themselves better as the use of indicies is natural.

As a generica type cannot be a collection, we cannot use this to store months
