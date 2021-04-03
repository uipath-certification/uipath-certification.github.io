---
layout: answered-question
author: Serge
title: UiPath Assign Activity
blurb: Here's how to split Strings on slashes and dashes in Uipath Studio.
difficulty: 7
objective: 6.2 Explain how string manipulations, collections, and datatables are used for data manipulation
canonical: https://www.rpacertified.com//2020/09/09/data-Array-result-after-splitting3.html
keywords: UiPath Assign Activity
---

<h1>Look at the diagram. What would be the final value assigned to ArrString?</h1>

Question:  <img src="/assets/Split-Thisisaslash.jpg" class="img-fluid" alt="UiPath, split">

 - [ ] &nbsp;  {“This is a slash”}
 - [ ] &nbsp;  {“This”, “is”, “a”, “slash”}
 - [ ] &nbsp;  {“Slash”, “a”, “is”, “This”}
 - [X] &nbsp;  {[Blank], “This”, “Is”, “A”, “Slash”, [Blank]}

## Answer

Option D is correct.

When you use the split function, it will take all the information before and after the split character and that can include nothing.  Also, the split character is dropped.

