---
layout: answered-question
author: Serge
title: Write to a file that doesn't exist
blurb: What happens if you try to save a table using Excel Write Range activity to a file that does not exist? 
difficulty: 6
objective: 7.2 Identify and describe Microsoft Excel and DataTable functions, and how Excel activities are used for data manipulation
canonical:
---

<h1>Write to a file that doesn't exit</h1>

Question: What happens if you try to save a table using Excel Write Range activity to a file that does not exist?  

- [ ] &nbsp;  Throws a “File not found” error
- [ ] &nbsp;  Workflow will wait until the file appears and times out if it doesn’t 
- [ ] &nbsp;  Activity will not run and continue the sequence 
- [x] &nbsp;  Creates the file and saves the table 

## Answer

Options d is correct.

UiPath takes into account that you may just want a temporary file to perform certain actions so it will do the work for you.  
If the process is to produce a daily file with today’s date, it can do that for you as well.  
There is no need to create any file to ensure the flow works correctly as UiPath has thought of that for you. 
