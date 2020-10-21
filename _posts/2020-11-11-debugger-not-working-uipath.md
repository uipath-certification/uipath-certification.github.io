---
layout: answered-question
author: Serge
title: Is the UiPath Debugger not working?
blurb: Is the UiPath Studio Debugger not working? Here are possible causes, and more importantly, a possible solution.
difficulty: 6
objective: 2.1 Understand and explain the automation debug functions and usage such as breakpoints
canonical: https://www.rpacertified.com//2020/11/11/debugger-not-working-uipath.html
---

<h1>UiPath Studio Debugger Features</h1>
Question: Which of the following are true about the UiPath Studio debugger functions? 

- [x] &nbsp;  Only one Global Exception Handler can be set per automation project.
- [x] &nbsp;  The debugger will not operate if there are errors in the project
- [x] &nbsp;  Debug activities are displayed as Trace logs in the Output panel
- [ ] &nbsp;  The debugger will not operate if there are exceptions in the project

## Answer

Options a, b and c are correct.

If there are errors in the project that stop the application from compiling, there is no way the program is going to run and allow the debugger to work. You've got to get your project to compile and be able to run before you can debug your apps.

As for exceptions, well those are generated at runtime, and that's the whole idea of the debugger. That is, to monitor your applications runtime behavior and troubleshoot any exceptions that get thrown at runtime.



