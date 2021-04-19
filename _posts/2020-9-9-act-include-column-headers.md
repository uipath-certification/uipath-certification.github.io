---
layout: answered-question
author: Serge
title: UiPath CSV File Handling
blurb: Here's how to properly check UiPath CSV files.
difficulty: 6
objective: 7.2 Identify and describe Microsoft Excel and DataTable functions, and how Excel activities are used for data manipulation
canonical: https://www.rpacertified.com//2020/09/09/act-include-column-headers.html
keywords: UiPath column
---

<h1>Which needs to be checked to include column name?</h1>

Question:  When reading a CSV file with the Read CSV activity, which property needs to be checked in order to include the column names in UiPath Studio 2020.8?

 - [X] &nbsp;  Has Headers
 - [ ] &nbsp;  Delimiter
 - [ ] &nbsp;  IncludeColumnNames
 - [ ] &nbsp;  PreserveFormat

## Answer

Option A is correct.

This answer is somewhat self-explanatory. If your CSV file includes a set of headers, make sure you click the _Has Headers_ option, otherwise the header info might get processed as data during the automation.


_Has Headers_ is the check box you would select in the properties panel, or sometimes on the activity itself, to inform UiPath Studio about the headers.


A _delimiter_ is the term used to refer to a character that separates columns or rows. CSVs are 'comma separated files', although a delimiter can be any valid character. The use of a tab as a delimiter is very common.


_IncludeColumnName_ sounds correct, but it's not correct. That's just a made up option. It doesn't exist in UiPath Studio.


The _PreserveFormat_ property instructs UiPath Studio to keep all the fonts and formatting in the CSV unchanged.



<div class="row">
	
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card  w-100">
            <div class="card-header">
            Discuss with Us on Twitter
            </div>

            <div class="card-body">
<!-- **************************** -->       


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Is Mr. Crowder correct or can you change his mind?<a href="https://twitter.com/hashtag/UiPathStudio?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathStudio</a> <a href="https://twitter.com/hashtag/UiPath?src=hash&amp;ref_src=twsrc%5Etfw">#UiPath</a> <a href="https://twitter.com/hashtag/UiPathAssociate?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathAssociate</a> <a href="https://twitter.com/hashtag/UipathCertified?src=hash&amp;ref_src=twsrc%5Etfw">#UipathCertified</a> <a href="https://twitter.com/hashtag/RPA?src=hash&amp;ref_src=twsrc%5Etfw">#RPA</a> <a href="https://twitter.com/hashtag/RPATools?src=hash&amp;ref_src=twsrc%5Etfw">#RPATools</a> <a href="https://twitter.com/hashtag/Excel?src=hash&amp;ref_src=twsrc%5Etfw">#Excel</a><a href="https://t.co/u2uIPctHQp">https://t.co/u2uIPctHQp</a> <a href="https://t.co/2G0RLO68Rc">pic.twitter.com/2G0RLO68Rc</a></p>&mdash; rpacertified (@rpacertified) <a href="https://twitter.com/rpacertified/status/1384230454962778112?ref_src=twsrc%5Etfw">April 19, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<!-- **************************** -->   
            
            
            </div>
        </div>
    </div>
	
	<div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card w-100">
            <div class="card-header">
            UiPath Tutorials on YouTube
            </div>

            <div class="card-body">
	Check out this UiPath Youtube tutorial from <a href="http://www.twitter.com/cameronmcnz">@cameronmcnz</a>.	    
	    
<div class="embed-responsive embed-responsive-16by9">
	
<!-- ************* Add EMBED url here. It must include 'embed' in the URL!!! ****************** -->	
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6CCfT8HiwYI"></iframe>
<!-- ******************************* -->	
</div>

#UiPath #UiPathCertified #RPACertified #RPA #RPACertification #UiPathTutorial
            </div>
        </div>
    </div>
	
</div>

