---
layout: answered-question
author: Serge
title: UiPath Programming and the String Split method
blurb: Learn to use the UiPath String Split method in your RPA automations and pass the certification exam questions on the topic.
difficulty: 6
objective: 6.2 Explain how string manipulations, collections, and datatables are used for data manipulation
canonical: https://www.rpacertified.com//2020/09/09/data-extract-month.html
keywords: UiPath String Split Function, String Split, String Functions
---

<h1>UiPath String Split Functio</h1>

Question:  You have been given a date in a string: “10/15/2020”.  What is the best way to extract the month?

 - [X] &nbsp;  Split function
 - [ ] &nbsp;  intr function
 - [ ] &nbsp;  Left
 - [ ] &nbsp;  Right

## Answer

Option A is correct.

Using the split function is the best and easiest way.  If you split using “/” as the split character, you end up with an array with each section before and after the character as the entry.  Instr will at best tell you there is a certain month in there.  Using Left may work but you have to capture for the fact that the month may be one or two characters.  Right is worse as it will give you the same issues as Left, except you have to also account for the day being single or double characters.

