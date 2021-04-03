---
layout: answered-question
author: Serge
title: UiPath Break Activity Explained
blurb: Here's how to use the UiPath Studio break activity, along with insights on the impact it has on flow control activities when it is accidentally left inside a sequence.
difficulty: 6
objective: 2.1 Understand and explain the automation debug functions and usage such as breakpoints
canonical: https://www.rpacertified.com/2020/09/09/debug-break-point-left-production.html
keywords: UiPath Break Activity
---

<h1>UiPath Break Activity</h1>

Question:  During development, a breakpoint is enabled at a particular activity. Later, the developer published the package to UiPath Orchestrator. When the process runs from a UiPath Robot in an unattended mode, what is the expected behavior?

 - [ ] &nbsp;  Process generates an exception error due to the breakpoint
 - [ ] &nbsp;  Breakpoint will cause the process to pause indefinitely
 - [X] &nbsp;  Breakpoint will have no impact on the process execution
 - [ ] &nbsp;  Process causes the robot to crash due to the breakpoint

## Answer

Option C is correct.

Nothing will happen.  In big projects its possible to leave one or two break points. These should not hinder a project in production so they are ignored.

