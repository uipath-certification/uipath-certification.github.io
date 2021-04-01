---
layout: answered-question
author: Serge
title: Characteristics of native screen scraping method.
blurb: When investigating native screen scraping method for use we need to know what it can and cannot do.
difficulty: 7
objective: 7.3 Describe the functions used to extract data from a .pdf file; for example, using OCR
canonical: 
---

<h1>Characteristics native screen scraping method?</h1>

Question:  What are the characteristics of a native screen scraping method?

 - [X] &nbsp;  Extracts Text Position
 - [ ] &nbsp;  Supports Citrix
 - [X] &nbsp;  Does not runs in the background
 - [X] &nbsp;  Cannot extract hidden text

## Answer

Option A, C and D are correct.

When using the native screen scraping ability in UiPath, the following characteristics apply, it can extract the visible text, the position of the text on the screen.  
Unfortunately, it cannot run in the background because it is actively looking at the User Interface (IE Excel or browser).
As such, it cannot see any hidden text.  

There is no native support for Citrix. The developer must resort to using text type and mouse click activity's when developing automations for Citrix applications. As Citrix only returns screenshots to the user, UiPath will not have access the applications internal elements.

UiPath recognizes these shortcomings and they have allowed use of OCR activities. Two of the more popular OCRs are Google's Tessaract and Microsoft's Modi. OCRs are able to work in the background as they have access to the application's elements and selectors. When you have access to these, you have access to all the text, whether it is hidden or not.

Additionally, UiPath is coming out with another technology called Citrix Automation Delight which should mitigate the native Citrix issue that UiPath has with Citrix.

If you would like to find out more about <a href=https://www.uipath.com/solutions/technology/citrix-automationcitrix>Citrix support</a>, please click on the link.
If you would like to see the difference between Full-Text, Native and OCR, please click on this <a href=https://docs.uipath.com/studio/docs/output-or-screen-scraping-methods>link</a>.
