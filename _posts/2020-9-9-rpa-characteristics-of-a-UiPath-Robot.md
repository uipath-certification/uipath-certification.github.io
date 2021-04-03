---
layout: answered-question
author: Serge
title: What describes a characteristic of a UiPath Robot?
blurb: Which of the following best describes the characteristic of a UiPath Robot? Don't let this horrible UiPath Certification Question confuse you!
difficulty: 9
objective: 1.2 Identify and describe the different types of robots, i.e., attended versus unattended robots
canonical: https://www.rpacertified.com//2020/09/09/rpa-characteristics-of-a-UiPath-Robot.html
keywords: UiPath Certification Question, UiPath Robot, UiPath Characteristics, UiPath Robot
---

Question:  Which one of the following statements about UiPath Robots is true?

 - [ ] &nbsp;  Standard robots can work on both standard machines and templates
 - [ ] &nbsp;  Any user who can log into Orchestrator can create or delete UiPath Robots
 - [X] &nbsp;  Only attended and development robots can be floating robots (In other words, unattened robots cannot be floating robots)
 - [ ] &nbsp;  Robots cannot be deleted even if they do not have any pending or active jobs attached to them

## Uipath Cert Question Answer

Option C is correct.

This is a horrible UiPath Question. Even how it's worded bugs me: "Which of the following best describes the characteristic of a UiPath Robot?"

I was asked to include this question on this site by a number of readers, but it's a horrible question. 

It's worded poorly. I assure you, questions on the certification exam will be much clearer than this.

### Correct answer strategy

The key to this question is that a _floating robot_ can be used on any computer. You don't have to associate it with a specific computer when you create it in orchestrator. So it can run anywhere.

But here's the problem. If it can run on any computer, how does it know how to log in? Your computer password is different from mine, right? So this robot can't be configured to run on a computer without a user logging in first. And any robot that requires a user to log into the computer first is an <em>attended robot.</em> So only attended robots can be floating robots. 

Of course, if you're doing development, you're obviously logged into the machine - after all, you're working on UiPath Studio, so you have to be logged in. So that's the answer, for a robot to float, a user must log into the computer first, which means it must be _attended._

### Bad UiPath Certification Question

Honestly, whoever came up with this question should be ashamed of themselves. 

The incorrect options here are confusing with regards to how they are worded. 

Yes, standard robots can only work on standard machines, specifically the machine defined when the standard robot was created. But the wording here is poor.

What does 'no specific permission is required' even mean? Again, that's poor wording and confusing. Questions on the UiPath Associate exam questions tend to be clear and precise. The goal of the exam is to test your knowlege, not trick you with poor wording.

I reworded this particular option to be more precise: <em>Any user who can log into Orchestrator can create or delete UiPath Robots</em>

Of course, that option is not true, and I think that's more clear in what it is asking. There are a variety of rights and roles you can assign in UiPath Orchestrator. And you need create permissions to create a UiPath Robot.

### Required permissions to create UiPath Robots

Here's a snippet from the UiPath documentation for more insight on the permission issue:

<ul>
<li>Permission to create Robots (<strong>Create</strong> permissions on Robots and <strong>View</strong> permissions on Machines)</li>
<li>The name of the Standard Machine which has to be connected to Orchestrator, and on which a Robot is installed (can be found in the Control Panel - <code class="rdmd-code lang-" data-lang="" name=""><div class="cm-s-neo">Control Panel\System and Security\System</div></code> or the <strong>UiPath Robot Settings</strong>)</li>
<li>The username that is used to access the specified machine</li>
<li>The password for the specified username (not required for Attended Robots)</li>
</ul>

<img src="https://files.readme.io/736f0a0-standard_robot.gif" alt="Create UiPath Robot Permissions" class="img-fluid"/>

Option D is fair I guess. You can delete robots, so to suggest you can't seems silly.

#### Don't be discouraged

This is a bad UiPath question that we were asked to include by users who come to the site. If you found this confusing, don't blame yourself, blame the idiot who wrote the question.

Here's the details from the UiPath [documentation](https://docs.uipath.com/orchestrator/v2018.4/docs/about-robots#section-types-of-robots):

<ul>
<li><strong>Standard Robot</strong> - works on a single Standard Machine only, namely the one defined when creating it. This is ideal for the scenario in which a user always works on the same machine.</li>
<li><strong>Floating Robot</strong> - works on any machine defined in Orchestrator, be it Standard or Template, as the machine name is not relevant when creating it. Only Attended and Development Robots can be floating, and as such, they become licensed automatically when you open the Robot tray. These types of Robots only work with Active Directory users and are useful if the machine you want to add a Robot to has a different name each time it is spawned, such as for Non-Persistent VDIs. Same goes for hotseat environments, where different people are working in shifts on the same computer.</li>
</ul>

<br/>
