---
layout: answered-question
author: Serge
title: How to restart when debugging UiPath
blurb: What does the UiPath restart button do when debugging?
difficulty: 7
objective: 2.1 Understand and explain the automation debug functions and usage such as breakpoints
---
<h1>UiPath Debug Restart Button</h1>
Question: Which of the following is true about the UiPath Studio debugger's restart button?

- [ ] &nbsp;  It will restart your application from the first line prior to an exception being thrown
- [ ] &nbsp;  It will restart your application from the beginning of the activity that threw an exception
- [x] &nbsp;  It will restart your application from the first activity of the project
- [ ] &nbsp;  It will restart your application from the start of the beginning of the activity prior to the one that threw an exception

## Answer

Options d is correct.

The restart button kicks your whole UiPath process off right from the start. The restart button clears the current calls stack, resets all the variables and begins the whole sequence or workflow from the project's start.

> After an exception is thrown the restart option appears and the debugging pauses. Pressing this button will restart the program from the first activity of the project.

More details on the UiPath restart button is available in the ([docs](https://docs.uipath.com/studio/docs/debugging-actions)).

