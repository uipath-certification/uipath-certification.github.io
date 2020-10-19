---
layout: answered-question
author: Serge
title: How to retry when debugging UiPath
blurb: What does the UiPath retry button do when debugging?
difficulty: 7
objective: 2.1 Understand and explain the automation debug functions and usage such as breakpoints
---

<h1>UiPath Debugger's Retry Button</h1>

Question: Which of the following is true about the retry button?

- [ ] &nbsp;  It will restart your application from the first line of code prior to an exception being thrown
- [x] &nbsp;  It will restart your application from the beginning of the previous activity when an exception is thrown
- [ ] &nbsp;  It will restart your application from the first activity of the project
- [ ] &nbsp;  It will restart your code from the start of the closest try block

## Answer

Options b is correct.

> The retry option re-runs the previous activity from where an exception was thrown. The exception will be thrown again if it is encountered.

More details on the UiPath retry button is available in the ([docs](https://docs.uipath.com/studio/docs/debugging-actions))

