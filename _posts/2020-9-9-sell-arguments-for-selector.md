---
layout: answered-question
author: Serge
title: Argument Types in Selectors
blurb: When you need to know what the type of argument to send a selector
difficulty: 6
objective: 4.1 Identify, describe, and demonstrate how dynamic versus static selectors are used
canonical: 
---

<h1>Argument Types in Selectors</h1>

Question:  Which argument type does the selector property accept?

 - [ ] &nbsp;  System.Security.SecureString
 - [X] &nbsp;  System.String
 - [ ] &nbsp;  UiPath.Core.Selector
 - [ ] &nbsp;  System.Xml.XmlElement

## Answer

Option B is correct.

The correct answer is B.  Selectors will only take string arguments type as they are XML attributes.  You cannot use integers, boolean or objects, unless converted to a string first.

