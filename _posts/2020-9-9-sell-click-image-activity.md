---
layout: answered-question
author: Serge
title: UiPath Click Triggers with Visible and Invisible Ui Elements
blurb: Do you know how to use a UiPath click triggers with invisible UI elements in an app or webpage?
difficulty: 9
objective: 4.5 Demonstrate the use a reliable selector
canonical: https://www.rpacertified.com//2020/09/09/sell-click-image-activity.html
keywords: click image, UiPath Image Click, Studio Click Activity, Click Trigger UiPath
---

<h1>Click Trigger UiPath</h1>

Question:  Is it possible to click a button with Click Image Activity if the target is not visible on the screen in UiPath?

 - [ ] &nbsp;  Yes, you can do this
 - [ ] &nbsp;  No, you can click using anchors
 - [ ] &nbsp;  Yes, unless in incognito mode
 - [X] &nbsp;  No, you could click a button which is not visible only using selectors

## Answer

Option D is correct.

With the click Image Activity, you cannot click anything you cannot view.  The best way to do this is using Selectors as those are very visible within the UI Explorer

