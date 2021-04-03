---
layout: answered-question
author: Serge
title: What is the difference between variables and arguments?
blurb: A quick explaination of how variables and arguments in UiPath differ, and how to choose between the two? 
difficulty: 7
objective: 3.1 Identify the different variable types available in the UiPath Studio Variables panel
keywords: UiPath Argument, RPA Argument, Argument vs Variable, Argument in UiPath Studio, Arguments vs UiPath Activities
canonical: https://www.rpacertified.com/2020/09/09/var-variables-and-argument-differences.html
---

<h1>Arguments vs Variables in UiPath</h1>

Question:  What is the difference between UiPath arguments and variables?

 - [ ] &nbsp;  Variables pass the data between activities in the same workflow.  Arguments manage the data only inside an activity in the same workflow
 - [ ] &nbsp;  Variables manage the data only inside an activity in the same workflow.  Arguments pass the data between activities in the same workflow
 - [X] &nbsp;  Variables pass the data between activities inside workflows.  Arguments pass the data between workflows
 - [ ] &nbsp;  Variables pass the data between workflows.  Arguments pass the data between activities inside workflows

## Answer

Option C is correct.

<h2>UiPath Variables and Arguments</h2>

The correct answer is C. Variables work with data inside workflows. As long as you can do everything within one workflow, you would only need variables with the correct scope.  When it comes to passing information to another workflow, you would need a UiPath argument, not variable. 

UiPath Arguments act like variables within a workflows, but unlike variables, they add the ability of sending and receiving data to and from a workflow.

