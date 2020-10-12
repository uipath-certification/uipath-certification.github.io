---
layout: answered-question
author: Serge
title: In and Out Burgers? No. UiPath Arguments
blurb: Do you know how to name in and out variables without upsetting the UiPath Studio Analyzer?
difficulty: 7
objective: 
---

Question: You must pass exam data as an argument, but the data will be used both inside and oustide of the current workflow project. What should the variable be named? 

- [ ] &nbsp;  inOutExam
- [ ] &nbsp;  in_out_exam
- [ ] &nbsp;  io-Exam
- [x] &nbsp;  io_Exam

## Answer

IO, IO, it's off to work we go.

The correct answer to this UiPath argument naming convention question is io_Exam.

The UiPath Studio analyser uses the following RegEx to validate an argument that will be used both inside and outside of a workflow or sequence project.

- In and Out Argument Regex: ^io_(dt_)?([A-Z]|[a-z])+([0-9])*$.

