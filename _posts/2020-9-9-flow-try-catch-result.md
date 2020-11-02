---
layout: answered-question
author: Serge
title: What is the result of this workflow?
blurb: Result of a try/catch block workflow
difficulty: 7
objective: 5.3 Explain the importance of error handling and how it can be implemented
canonical: 
---

<h1>What is the result of this workflow?</h1>

Question:  <img src="https://github.com/uipath-certification/uipath-certification.github.io/blob/master/assets/TryCatch%20-%20Indexoutofrange.jpg" class="img-fluid" alt="UiPath, split">

 - [X] &nbsp;  IndexOutOfRangeException
 - [ ] &nbsp;  This Item: null
 - [ ] &nbsp;  This Item: Test
 - [ ] &nbsp;  Null Reference Exception

## Answer

Option A is correct.

This will throw an Index Out of Range exception as we have defined MyArray (0) in the default but not MyArray(1)

