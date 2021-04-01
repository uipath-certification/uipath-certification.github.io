---
layout: answered-question
author: Serge
title: Features of native screen scraping method.
blurb: When investigating native screen scraping method for use we need to know what it can and cannot do.
difficulty: 7
objective: 7.3 Describe the functions used to extract data from a .pdf file; for example, using OCR
canonical: 
---

<h1>Features native screen scraping method</h1>

Question:  Which of the following statements are true about native UiPath screen scraping activity?

 - [X] &nbsp;  Extracts Text Position
 - [ ] &nbsp;  Supports Citrix
 - [X] &nbsp;  Does not run in the background
 - [X] &nbsp;  Cannot extract hidden text

## Answer

Option A, C and D are correct.

Native screenscraping can extract the visible text and the position of the text on the screen. Unfortunately, it cannot run in the background because it is actively looking at the User Interface (IE Excel or browser). As such, it cannot see any hidden text.  

There is no native support for Citrix at all within UiPath. The developer must resort to using text type and mouse click activities when developing automations for Citrix applications. As Citrix only returns screenshots to the user, UiPath will not have access the application's internal elements.

UiPath recognizes these shortcomings and they have allowed use of OCR activities. Two of the more popular OCRs are Google's Tessaract and Microsoft's Modi. OCRs are able to work in the background as they have access to the application's elements and selectors. When you have access to these, you have access to all the text, whether it is hidden or not.

Additionally, UiPath is coming out with another technology called Citrix Automation Delight which should mitigate the native issues that UiPath has with Citrix.

If you would like to find out more about UiPath's <a href=https://www.uipath.com/solutions/technology/citrix-automationcitrix>Citrix support</a>, please click on the link.
If you would like to see the difference between Full-Text, Native and OCR, please click on this <a href=https://docs.uipath.com/studio/docs/output-or-screen-scraping-methods>link</a>.
