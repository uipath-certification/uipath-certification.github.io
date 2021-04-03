---
layout: answered-question
author: Serge
title: UiPath Project Design Best Practices
blurb: Looking at the best process flow given certain requirements
difficulty: 6
objective: 5.2 Identify and describe the various control flow activities such as If, Switch, Break, Parallel, While, etc.
canonical: https://www.rpacertified.com//2020/09/09/flow-Which-Control-flow-for-payment-system.html
keywords: UiPath Process, UiPath Flow, UiPath Studio, UiPath Payment System
---

<h1>What's the best process flow?</h1>

Question: A developer needs to design a process in the following way:

1. The process needs to validate the Payment Status field in an application.
2. There are three possible values in the Payment Status field named: Pending, Paid, or Awaiting Approval.
3. For "Pending", the process should check the "Due Date" field. If the Due Date has lapsed, raise an alert. Otherwise, do nothing.
4. For "Paid", change the Overall Status to Completed.
5. For "Awaiting Approval", send an alert email to the email address in the Account Owner field.

Based on UiPath best practices, which activity is recommended for designing the process flow for Step 2?

 - [ ] &nbsp;  If
 - [X] &nbsp;  Switch
 - [ ] &nbsp;  Report Status
 - [ ] &nbsp;  Set Transactoin Status

## Answer

Option B is correct.

The correct Answer is B.  Switch statements provide functionality to evaluate and perform multiple different tasks based on the value of the variable.  If statements, with binary choices could be made to mimic a switch statement using nested If statements but that would get cumbersome with multiple paths.  This is what the Switch statement is for.

