---
layout: answered-question
author: Serge
title: Regular Expressions in UiPath
blurb: Here's how to use UiPath RegEx regular expression to parse data and validate fields.
difficulty: 7
objective: 7.1 Identify and explain how to automate e-mail and how email automation is helpful
canonical: https://www.rpacertified.com//2020/09/09/act-valid-email.html
keywords: regex, regular expression, uipath regex, string validation
---

<h1>UiPath RegEx</h1>

Question:  A developer has an input string from a custom form and needs to ensure the string has a valid email format. How can this be verified?

 - [ ] &nbsp;  Use the Contains function with '@.com'
 - [ ] &nbsp;  Use a Send SMTP Mail Message activity
 - [ ] &nbsp;  Use the Format Value activity
 - [X] &nbsp;  Use Regular Expressions

## Answer

Option D is correct.

Not a fan of regular expressions but it is the only way to confirm that the input string, which could be anything, has an email format.  It is useful whenever there is a pattern.  If you use the Contains command, even used separately, then “@web.email.com” would be considered a valid email address. SMTP Mail activity would try to send it to the email, not ideal as business clients don’t want to see test emails.  Format Value Activity is used to change the Generic value into other Type like [Number,DateTime] and only pertains to the Cell format in Excel

