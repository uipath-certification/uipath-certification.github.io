---
layout: answered-question
author: Serge
title: Features of native screen scraping method.
blurb: When investigating native screen scraping method for use we need to know what it can and cannot do.
difficulty: 7
objective: 7.3 Describe the functions used to extract data from a .pdf file; for example, using OCR
canonical: https://www.rpacertified.com/2020/09/09/act-Native-screenscraping.html
---

<h1>Features native screen scraping method</h1>

Question:  Which of the following statements are true about native UiPath screen scraping activity?

 - [X] &nbsp;  Extracts Text Position
 - [ ] &nbsp;  Supports Citrix
 - [X] &nbsp;  Does not run in the background
 - [X] &nbsp;  Cannot extract hidden text

## Answer

Option A, C and D are correct.

Native screenscraping can extract the visible text and the position of the text on the screen. Unfortunately, it cannot run in the background because it is actively looking at the User Interface (IE, Excel or browser). As such, it cannot see any hidden text.  

There is no native support for Citrix at all within UiPath. The developer must resort to using text type and mouse click activities when developing automations for Citrix applications. As Citrix only returns screenshots to the user, UiPath will not have access the application's internal elements.

UiPath recognizes these shortcomings and they have allowed use of OCR activities. Two of the more popular OCRs are Google's Tessaract and Microsoft's Modi. OCRs are able to work in the background as they have access to the application's elements and selectors. When you have access to these, you have access to all the text, whether it is hidden or not.

Additionally, UiPath is coming out with another technology called Citrix Automation Delight which should mitigate the native issues that UiPath has with Citrix.

If you would like to find out more about UiPath's <a href="https://www.uipath.com/solutions/technology/citrix-automationcitrix">Citrix support</a>, please click on the link.

If you would like to see the difference between Full-Text, Native and OCR, please click on this <a href="https://docs.uipath.com/studio/docs/output-or-screen-scraping-methods">link</a>.

<div class="row">
	
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card  w-100">
            <div class="card-header">
            Discuss with Us on Twitter
            </div>

            <div class="card-body">
<!-- **************************** -->       


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">When taking the exam its imperative to know exactly what screenscraping can and cannot do. This question will help you!<a href="https://twitter.com/hashtag/UiPath?src=hash&amp;ref_src=twsrc%5Etfw">#UiPath</a> <a href="https://twitter.com/hashtag/UiPathCertified?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathCertified</a> <a href="https://twitter.com/hashtag/RPACertified?src=hash&amp;ref_src=twsrc%5Etfw">#RPACertified</a> <a href="https://twitter.com/hashtag/RPA?src=hash&amp;ref_src=twsrc%5Etfw">#RPA</a> <a href="https://twitter.com/hashtag/RPACertification?src=hash&amp;ref_src=twsrc%5Etfw">#RPACertification</a> <a href="https://twitter.com/hashtag/UiPathAssociate?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathAssociate</a> <a href="https://twitter.com/hashtag/UiPathCertification?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathCertification</a> <a href="https://twitter.com/hashtag/RPATools?src=hash&amp;ref_src=twsrc%5Etfw">#RPATools</a> <a href="https://t.co/vTe5qlW1w0">https://t.co/vTe5qlW1w0</a> <a href="https://t.co/wyytv2FMKO">pic.twitter.com/wyytv2FMKO</a></p>&mdash; rpacertified (@rpacertified) <a href="https://twitter.com/rpacertified/status/1384519249356595205?ref_src=twsrc%5Etfw">April 20, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



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
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/NPpEUSp1AwY"></iframe>
<!-- ******************************* -->	
</div>

#UiPath #UiPathCertified #RPACertified #RPA #RPACertification #UiPathTutorial
            </div>
        </div>
    </div>
	
</div>
