---
layout: answered-question
author: Serge
title: A linear UiPath project?
blurb: UiPath Argument Naming Convention
difficulty: 7
objective: 
---

Question: A field that describes a name must be passed outside of a given project. What should it be named?

- [x] &nbsp;  out_name
- [ ] &nbsp;  pass_name
- [ ] &nbsp;  name
- [ ] &nbsp;  getName

## How to name UiPath arguments

The correct answer is out_name, as it complies with the UiPath argument naming Regex defined as

- InRegex: ^in_(dt_)?([A-Z]|[a-z])+([0-9])*$
- OutRegex: ^out_(dt_)?([A-Z]|[a-z])+([0-9])*$
- InOutRegex: ^io_(dt_)?([A-Z]|[a-z])+([0-9])*$.


More  [details](https://docs.uipath.com/studio/v2019/docs/st-nmg-002) on how to name arguments here.

