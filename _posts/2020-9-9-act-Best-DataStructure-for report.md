---
layout: answered-question
author: Serge
title: Datatype best suited within a for each activity.
blurb: When using a for each activity in UiPath you need to know the datatypes that it can handle and which suits a particular problem.
difficulty: 6
objective: 7.2 Identify and describe Microsoft Excel and DataTable functions, and how Excel activities are used for data manipulation
canonical: 
---

<h1>What is the best datatype for iterating through months of the year within UiPath using a for each activity?</h1>

Question:  A user needs to download a report for each month of the year and decides to loop over the months using a "For Each" activity. Which datatype(s) are best-suited to hold the values of the names of the months?

 - [ ] &nbsp;  String
 - [X] &nbsp;  List(Of String)
 - [ ] &nbsp;  GenericValue
 - [X] &nbsp;  String[] – Array for String

## Answer

Option B and D are correct.

A For Each loop activity can iterate through lists, arrays, DataTables or any type of collection. It would be a good idea to hold the names of each month in a collection such as an array or list. As B and D are collections, these are the correct answers.

While you could argue that a string is a collection of characters and you should be able to loop through them, it's not the best fit for this problem. We are looking for the best datatype for this problem and the name of months don't natually fit as characters in a string. Also, when it comes to strings, while and do while loop lend themselves better as the use of indicies is natural.

As a generic type cannot be a collection, we cannot use this to store months.

For more information regarding <a href="https://docs.uipath.com/studio/docs/the-for-each-activity">For Each </a>loops and <a href="https://docs.uipath.com/studio/docs/types-of-variables">datatypes</a>, please click on the links.
