---
layout: answered-question
author: Serge
title: UiPath Email Data Types
blurb: Here's the best DataType to set when you loop through emails.
difficulty: 6
objective: 7.1 Identify and explain how to automate e-mail and how email automation is helpful
canonical: https://www.rpacertified.com//2020/09/09/act-mail-loop-for-each-datatype.html
keywords: UiPath Email, Email data type
---

<h1>Best DataType Set when looping through a list of emails</h1>

Question:  When using the For Each activity to loop through a list of MailMessage variables, how should the TypeArgument property be set?

 - [ ] &nbsp;  System.Core.Mail.MailMessage
 - [X] &nbsp;  System.Net.Mail.MailMessage
 - [ ] &nbsp;  System.Mail.MailMessage
 - [ ] &nbsp;  System.Web.Mail.MailMessage

## Answer

Option B is correct.

This is the datatype for all emails.

