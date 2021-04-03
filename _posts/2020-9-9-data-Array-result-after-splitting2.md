---
layout: answered-question
author: Serge
title: Assignment activities and text manipulation
blurb: Here's a look at how to split and manipulate text data that contains slashes with UiPath Studio.
difficulty: 7
objective: 6.2 Explain how string manipulations, collections, and datatables are used for data manipulation
canonical: https://www.rpacertified.com//2020/09/09/data-Array-result-after-splitting2.html
keywords: UiPath String, String Data
---

<h1>After the assign activity and string manipulation, what would be the value of ArrString at the end of this sequence?</h1>

Question:  <img src="/assets/Split5slashes.jpg" class="img-fluid" alt="UiPath, split">

 - [ ] &nbsp;  {“/”,”/”,”/”,”/”,”/”}
 - [X] &nbsp;  {[Blank],[Blank],[Blank],[Blank],[Blank],[Blank]}
 - [ ] &nbsp;  {[Blank]}
 - [ ] &nbsp;  Throws an Error

## Answer

Option B is correct.

When you use the split function, it will take all the information before and after the split character and that can include nothing.  Also, the split character is dropped.

