---
layout: answered-question
author: Serge
title: UiPath Date Field Manipulation
blurb: Here's how to split dates with dashes in UiPath Studio
difficulty: 6
objective: 6.2 Explain how string manipulations, collections, and datatables are used for data manipulation
canonical: https://www.rpacertified.com//2020/09/09/data-Array-result-after-splitting6.html
keywords: ArrString, UiPath Strings
---

<h1>What is the result of ArrString</h1>

Question:  <img src="/assets/Split-datedashes.jpg" class="img-fluid" alt="UiPath, split">

 - [ ] &nbsp;  {“306090”}
 - [ ] &nbsp;  {“090603”}
 - [ ] &nbsp;  {“09”, “06”, “03”}
 - [X] &nbsp;  {“30”, “60”, “90”}

## Answer

Option D is correct.

When you use the split function, it will take all the information before and after the split character and that can include nothing.  Also, the split character is dropped.

