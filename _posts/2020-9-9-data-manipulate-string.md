---
layout: answered-question
author: Serge
title: Which string function will return "Certification"?
blurb: Which string function will return "Certification"?
difficulty: 6
objective: 6.2 Explain how string manipulations, collections, and datatables are used for data manipulation
canonical: 
---

<h1>Which string function will return "Certification"?</h1>

Question:  A developer wants to remove the company name from the "UiPath Certification" string. Which string function will return "Certification"?

 - [ ] &nbsp;  “UiPath Certification”.substring(6)
 - [ ] &nbsp;  “UiPath Certification”.substring(6).Trim
 - [X] &nbsp;  “UiPath Certification”.substring(6,14)
 - [ ] &nbsp;  “UiPath Certification”.substring(14,6)

## Answer

Option C is correct.

This will return a range of the string starting after position 6 all the way to position 14 inclusive.  D will produce the same results but in reverse. 

