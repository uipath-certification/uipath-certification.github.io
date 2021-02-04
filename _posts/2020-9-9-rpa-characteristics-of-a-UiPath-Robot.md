---
layout: answered-question
author: Serge
title: What describes a characteristic of a UiPath Robot Question
blurb: What describes a characteristic of a UiPath Robot? Don't let this horrible UiPath Certification Question confuse you!
difficulty: 6
objective: 1.2 Identify and describe the different types of robots, i.e., attended versus unattended robots
canonical: 
---

Question:  What describes a characteristic of a UiPath Robot?

 - [ ] &nbsp;  Standard robots can work on both standard machines and templates
 - [ ] &nbsp;  No specific permission is required for the user to create a robot
 - [X] &nbsp;  Only attended and development robots can be floating robots
 - [ ] &nbsp;  Robots cannot be deleted even if they do not have any pending or active jobs attached to them

## Uipath Cert Question Answer

Option C is correct.

This is a horrible UiPath Questions. 

I was asked to include this question on this site by a number of readers, but it's a horrible questions, it's worded poorly and questions on the certificatione exam will be much clearer than this.

The key to this question is that a floating robot can be used on any computer. You don't have to associate it with a specific computer when you create it in orchestrator. So it can run anywhere.

But here's the problem. If it can run on any computer, how does it know how to log in? Your computer password is different from mine, right? So this robot can't be configured to run on a computer without a user logging in first. And any robot that requires a user to log into the computer first is an <em>attended robot.</em> So only attended robots can be floating robots. 

Of course, if you're doing development, you're obviously logged into the machine - after all, you're working on UiPath Studio, so you have to be logged in. So that's the answer, for a robot to float, a user must log into the computer first, which means it must be attended.

### Bad UiPath Certification Question

Honestly, whoever came up with this question should be ashamed of themselves. The other options here are confusing. Yes, standard robots can only work on standard machines, specifically the machine defined when the standard robot was created. But the wording here is confusing.

What does 'no specific permission is required' even mean? That's poor wording and confusing. The UiPath Associate exam questions tend to be clear. The goal of the exam is to test your knowlege, not trick you with poor wording.

Option D is fair I guess. You can delete robots, so to suggest you can't seems silly.

This is a bad UiPath question that we were asked to include by users who come to the site. If you found this confusing, don't blame yourself, blame the idiot who wrote the question.


Here's the details from the UiPath [documentation](https://docs.uipath.com/orchestrator/v2018.4/docs/about-robots#section-types-of-robots):

<ul>
<li><strong>Standard Robot</strong> - works on a single Standard Machine only, namely the one defined when creating it. This is ideal for the scenario in which a user always works on the same machine.</li>
<li><strong>Floating Robot</strong> - works on any machine defined in Orchestrator, be it Standard or Template, as the machine name is not relevant when creating it. Only Attended and Development Robots can be floating, and as such, they become licensed automatically when you open the Robot tray. These types of Robots only work with Active Directory users and are useful if the machine you want to add a Robot to has a different name each time it is spawned, such as for Non-Persistent VDIs. Same goes for hotseat environments, where different people are working in shifts on the same computer.</li>
</ul>
