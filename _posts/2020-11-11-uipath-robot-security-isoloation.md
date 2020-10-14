---
layout: answered-question
author: Serge
title: UiPath Studio Community Edition Trial
blurb: How long does a UiPath Studio Community Edition trial last?
difficulty: 6
objective: 1.1 Identify and describe the different types of robots, i.e., attended versus unattended robots
---

Question: Which of the following statements are true?

- [x] &nbsp;  Attended automations cannot guarantee security isolation between the robot and the user
- [ ] &nbsp;  Unattended automations cannot guarantee security isolation between the robot and the user
- [x] &nbsp;  Attended automations always require a human present
- [ ] &nbsp;  Unattended automations always require a human present

## Answer

Options a and c are correct.

Attended automations require a user in front of the machine to kick them off. Thus, option c is correct. Unattended robots do not require a human present.

Since a user is in front of the computer when the robot executes, security rights of the robot cannot be hidden or isolated from the user. A user with lower rights could commandeer an attended robot with elevated rights at any time, giving the user rights they otherwise would not have. Thus, there is a lack of security rights isolation with an attended UiPath robot.

This deals with Associate exam objective 1.1,  to identify and describe the different types of robots be it attended or unattended

You can find [more detail](https://docs.uipath.com/orchestrator/docs/attended-vs-unattended-automation) on Uipath robot security isolation in the UiPath documentation pages.
