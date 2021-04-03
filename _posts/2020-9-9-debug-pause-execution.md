---
layout: answered-question
author: Serge
title: How to pause a Process in UiPath Studio
blurb: The UiPath Associate exam requires knowledge of the debugger in UiPath Studio. Here's how to pause a Uipath process and debut it.
difficulty: 7
objective: 2.3 Explain the significance of connecting an automation project to the version control solution
canonical: https://www.rpacertified.com//2020/09/09/debug-pause-execution.html
keywords: UiPath Process, Pause Process
---

<h1>UiPath Studio Debugging</h1>

Question:  How can execution be paused before a particular activity in UiPath?

 - [X] &nbsp;  Use a MessageBox activity
 - [ ] &nbsp;  Flowchart decision
 - [X] &nbsp;  Use a breakpoint in Debug mode
 - [ ] &nbsp;  Try/Catch block

## Answer

Option A,C is correct.

Flowchart Decision will not stop the activity, it is the same as an if statement.  Try/Catch block is used when a piece of code may have an error or throw an exception and you want to continue the flow in spite of it.  A message box will halt the workflow so it is an answer but the best way is to use a break point, which will allow you to view all the values of variables/arguments

