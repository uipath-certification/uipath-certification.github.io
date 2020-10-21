---
layout: answered-question
author: Serge
title: UiPath Flowchart and Sequence Projects
blurb: How do you combine UiPath flowchart and sequence projects?
difficulty: 5
objective: 
canonical: https://www.rpacertified.com//2020/10/11/sequence-flowchart-combined.html
---

Question: A complex activity to be automated has many subroutines to be executed depending on the result of evaluating various logical conditions. What is the best approach to architecting this RPA activity?

- [ ] &nbsp;  Use a single workflow project
- [ ] &nbsp;  Use multiple workflows projects
- [ ] &nbsp;  Use a single sequence project which references multiple workflow projects
- [x] &nbsp;  Use a single workflow project that references mutliple sequence projects

## Answer

The best way to architect UiPath solutions is to put reusable, repeatable and even just darn complicated activities and processes in a sequence project. 
You create a new sequence project for every complex process you need to automate.
Then you pull all of the sequence projects together through a workflow project.

> Use a single workflow project that references mutliple sequence projects

That is the best answer to this question.



