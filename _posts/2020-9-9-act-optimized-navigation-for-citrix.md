---
layout: answered-question
author: Serge
title: UiPath and Citrix Navigation Methods
blurb: Here's how you optimize UiPath and Citrix.
difficulty: 7
objective: 7.3 Describe the functions used to extract data from a .pdf file; for example, using OCR
canonical: https://www.rpacertified.com//2020/09/09/act-optimized-navigation-for-citrix.html
keywords: uipath and citrix, citrix studio
---

<h1>Citrix and UiPath</h1>

Question:  Which is the best optimize navigation method to be used in a form within Citrix?

 - [ ] &nbsp;  Use screen scraping
 - [ ] &nbsp;  using anchors
 - [ ] &nbsp;  using the citrix activity
 - [X] &nbsp;  By sending keyboard commands/hotkeys

## Answer

Option D is correct.

There is no activity that can directly work within Citrix, you have to resort to sending keyboard commands and hotkeys.  Screenscraping and Anchors will not work.  The Citrix Activity does not exist.  The reason we have to resort to basic actions as Citrix will provide a window into another workstation and everything is essentially behind a wall that we cannot directly access the elements and selectors.  The best way to interact has to be keyboard/mouse clicks

