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

So a confession, I tricked you, System.Core.Mail.Mailmessage and System.Mail.MailMessage do not exist. They are made up and you cannot select them in the list of data types.

System.Web.Mail.Mailmessage does exist so is this something we can use?  The answer is, yes, it can be used but you will get a warning.  This was for the .Net Framework v1.1 and it does work but the warning you will get is that this is a deprecated data type.

The datatype that is correct, not deprecated and made for .NET framework v2.0 and onwards is System.Net.Mail.MailMessage.  This data type can be used for all mailmessage types and mail activities.
