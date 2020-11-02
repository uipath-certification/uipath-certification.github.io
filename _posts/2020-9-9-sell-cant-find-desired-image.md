---
layout: answered-question
author: Serge
title: What happens if Find Image doesn’t actually find the desired image in UiPath?
blurb: What happens if Find Image doesn’t actually find the desired image in UiPath?
difficulty: 7
objective: 4.2 Identify and describe how partial versus full selectors are used
canonical: 
---

<h1>What happens if Find Image doesn’t actually find the desired image in UiPath?</h1>

Question:  What happens if Find Image doesn’t actually find the desired image in UiPath?

 - [ ] &nbsp;  Workflow Continues
 - [X] &nbsp;  An Exception is thrown
 - [ ] &nbsp;  UiPath crashes
 - [ ] &nbsp;  it is ignored

## Answer

Option B is correct.

Find Image activity will throw an exception so it should be inside a try/catch block.  Ignoring and crashing is not or is ever an option.  The workflow continue is also not an option as it doesn’t offer a real mitigation factor.

