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

The datatype that is correct, not deprecated and made for .NET framework v2.0 and onwards is System.Net.Mail.MailMessage.  This data type can be used for all mailmessage types and mail activities.  Read for further information on this <a href="https://docs.uipath.com/releasenotes/docs/uipath-mail-activities">topic</a>.


<div class="row">
	
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card  w-100">
            <div class="card-header">
            Discuss with Us on Twitter
            </div>

            <div class="card-body">
<!-- **************************** -->       


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">When sending an email you&#39;ll need to know what data type is the right one. See if you can answer this question!<a href="https://twitter.com/hashtag/UiPath?src=hash&amp;ref_src=twsrc%5Etfw">#UiPath</a> <a href="https://twitter.com/hashtag/UiPathCertified?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathCertified</a> <a href="https://twitter.com/hashtag/RPACertified?src=hash&amp;ref_src=twsrc%5Etfw">#RPACertified</a> <a href="https://twitter.com/hashtag/RPA?src=hash&amp;ref_src=twsrc%5Etfw">#RPA</a> <a href="https://twitter.com/hashtag/RPACertification?src=hash&amp;ref_src=twsrc%5Etfw">#RPACertification</a> <a href="https://twitter.com/hashtag/UiPathAssociate?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathAssociate</a> <a href="https://twitter.com/hashtag/UiPathCertification?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathCertification</a> <a href="https://twitter.com/hashtag/RPATools?src=hash&amp;ref_src=twsrc%5Etfw">#RPATools</a><a href="https://t.co/dw04elD5Hw">https://t.co/dw04elD5Hw</a> <a href="https://t.co/jQ9A9HsCXy">pic.twitter.com/jQ9A9HsCXy</a></p>&mdash; Sergio Salerno (@salernos316) <a href="https://twitter.com/salernos316/status/1392228906225311753?ref_src=twsrc%5Etfw">May 11, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

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
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/varLbfY5lPM"></iframe>
<!-- ******************************* -->	
</div>

#UiPath #UiPathCertified #RPACertified #RPA #RPACertification #UiPathTutorial
            </div>
        </div>
    </div>
	
</div>
