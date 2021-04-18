---
layout: answered-question
author: Serge
title: UiPath Excel Activities
blurb: Here's a look at the key activites used by UiPath to read Excel activities.
difficulty: 8
objective: 7.2 Identify and describe Microsoft Excel and DataTable functions, and how Excel activities are used for data manipulation
canonical: https://www.rpacertified.com//2020/09/09/act-activity-to-read-entire-sheet.html
keywords: Uipath, Excel
---

Question:  What activity can you use to read an entire sheet from an entire excel file?

 - [ ] &nbsp;  Get Value
 - [ ] &nbsp;  Read Cell
 - [X] &nbsp;  Read Range
 - [ ] &nbsp;  Writeln

## Answer

Option C is correct.

The read range will get the entire excel file if the range extends to all the excel file.  If the range is left blank then by default it will get the entire workbook regardless of how many spreadsheets there are within the workbook.

Typically this is hard to work with and unwieldy when it comes to practical use. You have to ensure the data is all the same for all sheets since it will all get put into a DataTable variable. It is always better to read in either one datasheet at a time or use the Get Workbook sheets activity and run them through a for each loop.

More details can be found on the official <a href="https://docs.uipath.com/activities/docs/excel-read-range">site</a>. You can also follow the example they have <a href="https://docs.uipath.com/activities/docs/table-functions">here</a>.

For completeness, Option A does not exist as an activity. Option B, Read Cell activity reads the specified cell and Option D is used to write a line to the output panel, it does not touch the spreadsheet.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Ever wonder how you can read in an entire Excel workbook? Check out the below:<a href="https://twitter.com/hashtag/UiPath?src=hash&amp;ref_src=twsrc%5Etfw">#UiPath</a> <a href="https://twitter.com/hashtag/UiPathCertified?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathCertified</a> <a href="https://twitter.com/hashtag/RPACertified?src=hash&amp;ref_src=twsrc%5Etfw">#RPACertified</a> <a href="https://twitter.com/hashtag/RPA?src=hash&amp;ref_src=twsrc%5Etfw">#RPA</a> <a href="https://twitter.com/hashtag/RPACertification?src=hash&amp;ref_src=twsrc%5Etfw">#RPACertification</a> <a href="https://twitter.com/hashtag/Excel?src=hash&amp;ref_src=twsrc%5Etfw">#Excel</a><a href="https://t.co/5kZ8MwBlw1">https://t.co/5kZ8MwBlw1</a> <a href="https://t.co/AvnkyiUUSX">pic.twitter.com/AvnkyiUUSX</a></p>&mdash; rpacertified (@rpacertified) <a href="https://twitter.com/rpacertified/status/1383813034628435971?ref_src=twsrc%5Etfw">April 18, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



