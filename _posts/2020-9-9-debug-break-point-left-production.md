---
layout: answered-question
author: Serge
title: What happens when a break is left in?
blurb: What happens when a break is left in?
difficulty: 6
objective: 2.1 Understand and explain the automation debug functions and usage such as breakpoints
canonical: 
---

<h1>What happens when a break is left in?</h1>

Question:  During development, a breakpoint is enabled at a particular activity. Later, the developer published the package to UiPath Orchestrator. When the process runs from a UiPath Robot in an unattended mode, what is the expected behavior?

 - [ ] &nbsp;  Process generates an exception error due to the breakpoint
 - [ ] &nbsp;  Breakpoint will cause the process to pause indefinitely
 - [X] &nbsp;  Breakpoint will have no impact on the process execution
 - [ ] &nbsp;  Process causes the robot to crash due to the breakpoint

## Answer

Option C is correct.

Nothing will happen.  In big projects its possible to leave one or two break points. These should not hinder a project in production so they are ignored.

