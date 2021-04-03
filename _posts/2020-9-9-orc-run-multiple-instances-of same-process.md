---
layout: answered-question
author: Serge
title: Can you run multiple instances of the same process concurrently?
blurb: Here we explain the difference between parallel, serial and running multiple UiPath processes at once.
difficulty: 6
objective: 8.1 Describe how to provision attended and unattended robots to UiPath Orchestrator
canonical: https://www.rpacertified.com//2020/09/09/orc-run-multiple-instances-of-same-process.html
---

<h1>Running UiPath Processes</h1>

Question:  Is it possible to run multiple instances of the same UiPath process at the same time?

 - [ ] &nbsp;  Yes, on the same robot
 - [X] &nbsp;  Yes, on different robots
 - [ ] &nbsp;  No
 - [ ] &nbsp;  No, unless it is queued

## Answer

Option B is correct.

You can run the same process as many times as you want at the same time as long as you are using different robots. Robots can only run one process at a time.

