---
layout: answered-question
author: Serge
title: Data Assignment of Strings
blurb: Sometimes you need UiPath Studio to split a string based on a given symbol or character. Here's how to do it.
difficulty: 9
objective: 6.2 Explain how string manipulations, collections, and datatables are used for data manipulation
canonical: https://www.rpacertified.com//2020/09/09/data-Array-result-after-splitting5.html
keywords: UiPath String, ArrString, Split
---

<h1>After the assignment, what is the value of ArrString?</h1>

Question:  <img src="/assets/Split-Symbols.jpg" class="img-fluid" alt="UiPath, split">

 - [ ] &nbsp;  {[blank],”#”, “#”, “$”, “$”, “%”, “@”, [blank]}
 - [ ] &nbsp;  {“#”, “$”, “%”, “@”, “#”, “$”}
 - [X] &nbsp;  {“#$%@#$”}
 - [ ] &nbsp;  {“$#@%$#”}

## Answer

Option C is correct.

When you use the split function, it will take all the information before and after the split character and that can include nothing.  Also, the split character is dropped.  As the split character does not exist in the original string, you are just getting back the original string in the array.

