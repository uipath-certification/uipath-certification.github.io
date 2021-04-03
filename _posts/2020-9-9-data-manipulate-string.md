---
layout: answered-question
author: Serge
title: How to use the UiPath Studio SubString Method
blurb: Here's what you need to know about the UiPath String substring method to pass the Associate exam
difficulty: 6
objective: 6.2 Explain how string manipulations, collections, and datatables are used for data manipulation
canonical: https://www.rpacertified.com//2020/09/09/data-manipulate-string.html
keywords: String functions, UiPath String methods, UiPath SubString, String SubString
---

<h1>UiPath SubString Method.</h1>

Question: A developer wants to remove the company name from the "UiPath Certification" string. Which Uipath string function will return "Certification"?

 - [ ] &nbsp;  “UiPath Certification”.substring(6)
 - [ ] &nbsp;  “UiPath Certification”.substring(6).Trim
 - [X] &nbsp;  “UiPath Certification”.substring(6,14)
 - [ ] &nbsp;  “UiPath Certification”.substring(14,6)

## Answer

Option C is correct.

This will return a range of the string starting after position 6 all the way to position 14 inclusive.  D will produce the same results but in reverse. 

