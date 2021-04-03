---
layout: answered-question
author: Serge
title: Controlling Logic Flow in UiPath Studio
blurb: Here's how to chose the correct activity to implement iterative logic in Uipath Studio.
difficulty: 6
objective: 5.2 Identify and describe the various control flow activities such as If, Switch, Break, Parallel, While, etc.
canonical: https://www.rpacertified.com/2020/09/09/flow-counter-evaluated-before-loop.html
keywords: swtich, do while, iteration, iterative, loops, while loop
---

<h1>Iterative Logic in UiPath</h1>

Question:  A developer has a workflow in which the value of a counter needs to be evaluated before the body of the loop is executed. Which Control Flow activity should be used?

 - [ ] &nbsp;  Switch
 - [X] &nbsp;  Do While
 - [ ] &nbsp;  While
 - [ ] &nbsp;  If

## Answer

Option B is correct.

The "Switch" and "If" statements are not loops.  "While" loop evaluates the variable before the loop.  The "Do While" loop evaluates the condition at the end of the loop. This should read as Do “Something first” while the loop is executing.

