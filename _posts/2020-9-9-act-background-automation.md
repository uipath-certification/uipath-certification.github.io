---
layout: answered-question
author: Serge
title: Background automation technologies
blurb: Here's a look at the various tools and technologies used for UiPath background automations.
difficulty: 9
objective: 7.3 Describe the functions used to extract data from a .pdf file; for example, using OCR
canonical: https://www.rpacertified.com//2020/09/09/act-background-automation.html
keywords: background automation
---

Question:  Which of the following technologies can be used for background automation?

 - [ ] &nbsp;  The Full Text method of Screen Scraping
 - [X] &nbsp;  Type into activity with Send Window Messages flag checked
 - [ ] &nbsp;  Data scraping
 - [X] &nbsp;  The Click activity with the Simulate Click flag checked

## Answer

Option B,D is correct.

Both Window Messages and Simulate activities are specifically for background activities. They have been designed to operate in the background to avoid any interference from the user.  Any screenscraping activity automatically happens in the foreground due to the nature of screen scraping.

The Simulate and Send Window Messages are used in one of the "Side-by-Side" version of Attended Automation. At the time of this writing, UiPath is developing a course that will dig into the many flavours of Attended Automation.  Please see this <a href="https://academy.uipath.com/ContentLaunch?data=9l56OXCzC3%2fDtIEN9ONwYw%3d%3d">course</a>, please note that this course will keep expanding.  It is designed to be an eight hour course.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Can you tell the difference between foreground and background activities? Answer this call<a href="https://twitter.com/hashtag/UiPath?src=hash&amp;ref_src=twsrc%5Etfw">#UiPath</a> <a href="https://twitter.com/hashtag/UiPathCertified?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathCertified</a> <a href="https://twitter.com/hashtag/RPACertified?src=hash&amp;ref_src=twsrc%5Etfw">#RPACertified</a> <a href="https://twitter.com/hashtag/RPA?src=hash&amp;ref_src=twsrc%5Etfw">#RPA</a> <a href="https://twitter.com/hashtag/RPACertification?src=hash&amp;ref_src=twsrc%5Etfw">#RPACertification</a><a href="https://t.co/Zq1BKRd7ji">https://t.co/Zq1BKRd7ji</a> <a href="https://t.co/vuwD6yBwGE">pic.twitter.com/vuwD6yBwGE</a></p>&mdash; rpacertified (@rpacertified) <a href="https://twitter.com/rpacertified/status/1383819093569007621?ref_src=twsrc%5Etfw">April 18, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
