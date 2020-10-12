---
layout: answered-question
author: Serge
title: In Argument Naming Convention
blurb: Do you know how to properly name UiPath output arguments?
difficulty: 7
objective: 
---

Question: The data being passed in as an argument can only be used within the current project. What should the variable be named so as not to trigger the UiPath Studio analyzer?

- [x] &nbsp;  in-field
- [ ] &nbsp;  inField
- [x] &nbsp;  in_field
- [ ] &nbsp;  InField

## Answer

The correct answer is in_field. It will not flag the analyzer as is is consistent with the UiPath argument naming convention and the corresponding Regex of:

- In Argument Regex: ^in_(dt_)?([A-Z]|[a-z])+([0-9])*$
- In and Out Argument Regex: ^io_(dt_)?([A-Z]|[a-z])+([0-9])*$.
- Out Argument Regex: ^out_(dt_)?([A-Z]|[a-z])+([0-9])*$



You can find additional  [details](https://docs.uipath.com/studio/v2019/docs/st-nmg-002) in the UiPath documentation.

