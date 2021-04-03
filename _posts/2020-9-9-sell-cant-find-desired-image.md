---
layout: answered-question
author: Serge
title: Uipath Find Image failures
blurb: Here's what happens if a Uipath Find Image activity doesn’t actually find the desired image.
difficulty: 7
objective: 4.2 Identify and describe how partial versus full selectors are used
canonical: https://www.rpacertified.com//2020/09/09/sell-cant-find-desired-image.html
keywords: UiPath Find Image, Uipath Ui Activity
---

<h1>Find Image and UiPath Selectors</h1>

Question:  What happens if Find Image doesn’t actually find the desired image in UiPath?

 - [ ] &nbsp;  Workflow Continues
 - [X] &nbsp;  An Exception is thrown
 - [ ] &nbsp;  UiPath crashes
 - [ ] &nbsp;  it is ignored

## Answer

Option B is correct.

Find Image activity will throw an exception so it should be inside a try/catch block.  Ignoring and crashing is not or is ever an option.  The workflow continue is also not an option as it doesn’t offer a real mitigation factor.

