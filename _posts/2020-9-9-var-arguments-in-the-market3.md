---
layout: answered-question
author: Serge
title: UiPath Certification Workflow Diagram Question
blurb: This UiPath Diagram will test your knowlege of workflows and sequences and prepare you for similar flowchat questions on the UiPath exam.
difficulty: 7
objective: 3.4 Explain how arguments are used, managed, and the best practice for using the argument direction in the UiPath Studio Arguments panel
keywords: Uipath Workflow Exam Question, UiPath Workflow, Workflow question
canonical: https://www.rpacertified.com/2020/09/09/flow-try-catch-result.html
---

<h1>What is the result of the workflow?</h1>

Question:  <img src="/assets/Arguments%20-In-Fruit-In_Cart3%20.jpg" class="img-fluid" alt="UiPath workflow arguments example">

 - [X] &nbsp;  "Apple, Orange”
 - [ ] &nbsp;  “, Orange”
 - [ ] &nbsp;  “Orange”
 - [ ] &nbsp;  “Apple”

## Answer

Option A is correct.

When the workflow Market is invoked, Fruit was sent into In_Cart. When it completed, In_Cart was sent back into Fruit.  Both variable and arguments ended up having the same values.  Direction of the argument matters!

