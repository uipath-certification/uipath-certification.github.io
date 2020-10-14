---
layout: answered-question
author: Serge
title: UiPath Studio Community Edition Rules
blurb: Do you know when you should and should not use UiPath Studio Community Edition?
difficulty: 6
objective: 1.4 Differentiate between the UiPath Studio Community Edition versus the Enterprise Edition
---

Question: Which of the following statements are true about UiPath Studio Community Edition (CE)?

- [ ] &nbsp;  UiPath Studio CE is limited to a single attended robot but an unlimited number of unattended robots
- [ ] &nbsp;  UiPath Studio CE is limited to a single unattended robot but an unlimited number of attended robots
- [x] &nbsp;  UiPath Studio CE cannot be installed in a top security environment with in Internet access
- [x] &nbsp;  UiPath Studio CE updates cannot be turned off

## Answer

Options c and d are correct.

UiPath Studio Community Edition  has only self managed updates, so you can't stop it from downloaded the latest stable release from within the tool.

Also interesting about UiPath Studio Community Edition is the fact that it requires an online activation, so it cannot be installed without an Internet connection.

The community edition provides access to 2 attended robots and 1 unattended robots, making options a and b incorrect.

It's unlikely the Associate exam will ask about number of robots allowed by the license, so that's a bit of dirty pool. Even knowledge of automatic updates or the need for an online activiation is pretty 'down in the woods.' But you will be given a question or two on UiPath Studio CE, so be prepared.

You can learn [more details](https://docs.uipath.com/installation-and-upgrade/docs/studio-update-studio) in Studio updates from the UiPath Docs.

This question hits the UiPath Associate Exam Objective 1.4, Differentiate between the UiPath Studio Community Edition versus the Enterprise Edition.
