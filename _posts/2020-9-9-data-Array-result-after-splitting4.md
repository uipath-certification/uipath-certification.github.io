---
layout: answered-question
author: Serge
title: What is the result of ArrString
blurb: Splitting alternating slashes
difficulty: 8
objective: 6.2 Explain how string manipulations, collections, and datatables are used for data manipulation
canonical: https://www.rpacertified.com//2020/09/09/data-Array-result-after-splitting4.html
keywords: UiPath String, Spilt
---

<h1>Which of the following would be the result of the ArrString assignment?</h1>

Question:  <img src="/assets/Split-AlternatingSlashes.jpg" class="img-fluid" alt="UiPath, split">

 - [ ] &nbsp;  {“\/”,”\/”,”\/”,”\/”,”\/”}
 - [X] &nbsp;  {[blank],”\”,”\”,”\”,”\”,”\”}
 - [ ] &nbsp;  {[blank],”/”,”\”,”/”,”\”,”/”,”\”,”/”,”\”,”/”,”\”,[blank]}
 - [ ] &nbsp;  {“/\”,”/\”,”/\”,”/\”,”/\”}

## Answer

Option B is correct.

When you use the split function, it will take all the information before and after the split character and that can include nothing.  Also, the split character is dropped.

