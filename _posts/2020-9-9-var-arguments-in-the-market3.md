---
layout: answered-question
author: Serge
title: What is the result of the workflow?
blurb: Result of arguments that have two directions
difficulty: 7
objective: 3.4 Explain how arguments are used, managed, and the best practice for using the argument direction in the UiPath Studio Arguments panel
canonical: 
---

<h1>What is the result of the workflow?</h1>

Question:  <img src="https://github.com/uipath-certification/uipath-certification.github.io/blob/master/assets/Arguments -In-Fruit-In_Cart3.jpg" class="img-fluid" alt="UiPath, split">

 - [X] &nbsp;  "Apple, Orange”
 - [ ] &nbsp;  “, Orange”
 - [ ] &nbsp;  “Orange”
 - [ ] &nbsp;  “Apple”

## Answer

Option A is correct.

When the workflow Market is invoked, Fruit was sent into In_Cart. When it completed, In_Cart was sent back into Fruit.  Both variable and arguments ended up having the same values.  Direction of the argument matters!

