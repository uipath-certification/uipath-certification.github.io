---
layout: answered-question
author: Serge
title: Uipath selector and variable assignments
blurb: Can you store a selector in a variable? You'll need to know to pass the UiPath Certified Associate exam.
difficulty: 6
objective: 4.2 Identify and describe how partial versus full selectors are used
canonical: https://www.rpacertified.com/2020/09/09/sell-selector-in-variable.html
---

<h1>UiPath Selector</h1>

Question:  Is it possible to store a UiPath Selector in a variable?

 - [X] &nbsp;  Only within a String variable
 - [ ] &nbsp;  Only within a UiElement variable
 - [ ] &nbsp;  No
 - [ ] &nbsp;  No, unless within a flowchart

## Answer

Option A is correct.

<h2>Selectors and Variables in UiPath Studio</h2>

You can use selectors anywhere, within a sequence or flowchart but they must be stored in a string variable as they are strings themselves. Selectors are within the attribute of a tag so they must be string

