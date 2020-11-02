---
layout: answered-question
author: Serge
title: What's the results of adding string?
blurb: What's the results of adding string?
difficulty: 6
objective: 6.2 Explain how string manipulations, collections, and datatables are used for data manipulation
canonical: 
---

<h1>What's the results of adding string?</h1>

Question:  We have an array with values GenericArray = {“4 Oranges”,”3 Pineapples”}.  We have a variable Result = GenericArray(0)+GenericArray(1).  What is the value of Result?

 - [ ] &nbsp;  Error: “Input string has incorrect format”
 - [ ] &nbsp;  “7 tropical fruit”
 - [ ] &nbsp;  7
 - [X] &nbsp;  “4 Oranges3 Pineapples”

## Answer

Option D is correct.

This is a simple string concatenation.  It does not take individual parts and add thm.  We would need to build an object with its own addition function to perform that.

