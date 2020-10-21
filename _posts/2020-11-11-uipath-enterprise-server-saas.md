---
layout: answered-question
author: Serge
title: UiPath Enterprise Server and the UiPath Cert Exam
blurb: Do you know how the UiPath Enterprise Server is different from the Enterprise Cloud well enough to pass questions on this exam objective in the UiPath Associate cert test?
difficulty: 7
objective: 1.4 Differentiate between the UiPath Studio Community Edition versus the Enterprise Edition
canonical: https://www.rpacertified.com//2020/11/11/uipath-enterprise-server-saas.html
---

Question: The UiPath Enterprise Server:

- [ ] &nbsp;  Is accessed through the cloud
- [x] &nbsp;  Is installed on a computer by the client
- [ ] &nbsp;  Is not compatible with UiPath Studio Community Edition
- [x] &nbsp;  Is not compatible with UiPath Studio Enterprisetrial editions

## Answer

Options b and d are correct.

UiPath Enterprise Server is an on-prem installation. So someone physically takes the DVD's containing the software and installs that software on standalone machines. It's not a cloud based SaaS solution. It's the UiPath Enterprise Cloud that's offered as a Saas solution.

UiPath Studio Community Edition can only connect to the Community Cloud Orchestrator. It can't connect to the Enterprise Server, which makes option c incorrect.

Enterprise trial editions can connect to the UiPath Enterprise Server without a problem. In fact, all pieces of the installation, that is robots, Studio and Orchestrator itself are all initially configured with a 60 day licence if a purchased license is not provided.

This is part of the UiPath Associate Exam objective 1.4, differentiate between the UiPath Studio Community Edition versus the Enterprise Edition.
