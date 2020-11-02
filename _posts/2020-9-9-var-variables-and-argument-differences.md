---
layout: answered-question
author: Serge
title: What is the difference between variables and arguments?
blurb: What is the difference between variables and arguments?
difficulty: 7
objective: 3.1 Identify the different variable types available in the UiPath Studio Variables panel
canonical: 
---

<h1>What is the difference between variables and arguments?</h1>

Question:  What is the difference between variables and arguments?

 - [ ] &nbsp;  Variables pass the data between activities in the same workflow.  Arguments manage the data only inside an activity in the same workflow
 - [ ] &nbsp;  Variables manage the data only inside an activity in the same workflow.  Arguments pass the data between activities in the same workflow
 - [X] &nbsp;  Variables pass the data between activities inside workflows.  Arguments pass the data between workflows
 - [ ] &nbsp;  Variables pass the data between workflows.  Arguments pass the data between activities inside workflows

## Answer

Option C is correct.

The correct answer is C.  Variables work with data inside workflows.  As long as you can do everything within one workflow, you would only need variables with the correct scope.  When it comes to passing information to another workflow, you would need arguments.  They act like workflows but with the added ability of sending and receiving data to and from the workflow.

