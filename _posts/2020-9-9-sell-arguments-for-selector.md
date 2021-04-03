---
layout: answered-question
author: Serge
title: Uipath Selector Argument Types
blurb: A quick overview of UiPath selector argument types you can configure in Uipath Studio or Ui Explorer.
difficulty: 6
objective: 4.1 Identify, describe, and demonstrate how dynamic versus static selectors are used
canonical: https://www.rpacertified.com//2020/09/09/sell-arguments-for-selector.html
keywords: selectors, uipath selector, selector arguments, Ui Explorer
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

