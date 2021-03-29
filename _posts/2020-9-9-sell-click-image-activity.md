---
layout: answered-question
author: Serge
title: Is it possible to click a button with Click Image Activity if the target is not visible on the screen in UiPath?
blurb: Is it possible to click a button with Click Image Activity if the target is not visible on the screen in UiPath?
difficulty: 9
objective: 4.5 Demonstrate the use a reliable selector
canonical: 
---

<h1>Is it possible to click a button with Click Image Activity if the target is not visible on the screen in UiPath?</h1>

Question:  Is it possible to click a button with Click Image Activity if the target is not visible on the screen in UiPath?

 - [ ] &nbsp;  Yes, you can do this
 - [ ] &nbsp;  No, you can click using anchors
 - [ ] &nbsp;  Yes, unless in incognito mode
 - [X] &nbsp;  No, you could click a button which is not visible only using selectors

## Answer

Option D is correct.

With the click Image Activity, you cannot click anything you cannot view.  The best way to do this is using Selectors as those are very visible within the UI Explorer

