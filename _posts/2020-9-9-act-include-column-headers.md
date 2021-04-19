---
layout: answered-question
author: Serge
title: UiPath CSV File Handling
blurb: Here's how to properly check UiPath CSV files.
difficulty: 6
objective: 7.2 Identify and describe Microsoft Excel and DataTable functions, and how Excel activities are used for data manipulation
canonical: https://www.rpacertified.com//2020/09/09/act-include-column-headers.html
keywords: UiPath column
---

<h1>Which needs to be checked to include column name?</h1>

Question:  When reading a CSV file with the Read CSV activity, which property needs to be checked in order to include the column names in UiPath Studio 2020.8?

 - [X] &nbsp;  Has Headers
 - [ ] &nbsp;  Delimiter
 - [ ] &nbsp;  IncludeColumnNames
 - [ ] &nbsp;  PreserveFormat

## Answer

Option A is correct.

This is self explanatory but it's going to bug me if I don't explain it.

Yes, Has Headers is the actual check box you would need to select to include th column names.
Delimiter is what you tell the activity how the CSV is separated.  Normally defaulted to Comma.
IncludeColumnName sounds correct and should be used. This would be amazing if it weren't for one detail....it doesn't exist
PreserveFormat keeps all the fonts and formatting in the CSV.



