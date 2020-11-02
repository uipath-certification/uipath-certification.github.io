---
layout: answered-question
author: Serge
title: What is the result of ArrString
blurb: Splitting alternating slashes
difficulty: 8
objective: 6.2 Explain how string manipulations, collections, and datatables are used for data manipulation
canonical: 
---

<h1>What is the result of ArrString</h1>

Question:  <img src="https://github.com/uipath-certification/uipath-certification.github.io/blob/master/assets/Split-AlternatingSlashes.jpg" class="img-fluid" alt="UiPath, split">

 - [ ] &nbsp;  {“\/”,”\/”,”\/”,”\/”,”\/”}
 - [X] &nbsp;  {[blank],”\”,”\”,”\”,”\”,”\”}
 - [ ] &nbsp;  {[blank],”/”,”\”,”/”,”\”,”/”,”\”,”/”,”\”,”/”,”\”,[blank]}
 - [ ] &nbsp;  {“/\”,”/\”,”/\”,”/\”,”/\”}

## Answer

Option B is correct.

When you use the split function, it will take all the information before and after the split character and that can include nothing.  Also, the split character is dropped.

