---
layout: answered-question
author: Serge
title: How can execution be paused before a particular activity in UiPath?
blurb: How can execution be paused before a particular activity in UiPath?
difficulty: 7
objective: 2.3 Explain the significance of connecting an automation project to the version control solution
canonical: 
---

<h1>How can execution be paused before a particular activity in UiPath?</h1>

Question:  How can execution be paused before a particular activity in UiPath?

 - [X] &nbsp;  Use a MessageBox activity
 - [ ] &nbsp;  Flowchart decision
 - [X] &nbsp;  Use a breakpoint in Debug mode
 - [ ] &nbsp;  Try/Catch block

## Answer

Option A,C is correct.

Flowchart Decision will not stop the activity, it is the same as an if statement.  Try/Catch block is used when a piece of code may have an error or throw an exception and you want to continue the flow in spite of it.  A message box will halt the workflow so it is an answer but the best way is to use a break point, which will allow you to view all the values of variables/arguments

