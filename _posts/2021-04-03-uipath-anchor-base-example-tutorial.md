---
layout: answered-question
author: YouTube
title: UiPath Anchor Base Example
blurb: In this quick UiPath Anchor Base example tutorial, you'll quickly learn how to select specific Ui elements in a web page, PDF file, or even a desktop application.
difficulty: 6
objective: 7.2 Identify and describe Microsoft Excel and DataTable functions, and how Excel activities are used for data manipulation
canonical: https://www.rpacertified.com/2021/04/03/uipath-anchor-base-example-tutorial.html
keywords: UiPath Anchor, Anchor Base, Anchor Base Tutorial, UiPath Anchor Base, uipath indicate anchor, uipath click image anchor, uipath multiple anchors
---
# Anchor Base UiPath Activity

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/BZFG_BL_sd4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
## Anchor Base Tutorial
Editors Note: _Many students have asked for guidance on the UiPath Anchor Base activity, and how it works with the Find Element and Find Image functions. We've always been fans of Anders Jensen, and we recommend this video fairly often. We've embedded it here and provided a mildly edited transcript of the video to help users get the most out of the content. Enjoy the video, and subscribe to Mr. Jensen's YouTube page if you get a chance._

In this UiPath Studio tutorial, we will learn how to use the UiPath anchor base activity. 
## What is a UiPath Anchor Base?
A UiPath anchor base activity helps to locate elements on a page based on their relative positions. Sometimes webpages or PDF files do not uniquely identify UiElements with IDs. Or, the IDs may change over time. To overcome the fragility problem with <a href="https://www.rpacertified.com/2020/09/09/sell-describe-anchor.html">UiPath selectors</a>, a UiPath Anchor Base activity can be used. 

The UiPath Anchor Activity is useful when the developer does not have a reliable or predictable selector. 

Let me show you a UiPath Anchor Base example.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Looking for a good UiPath Anchor Base tutorial? We&#39;ve added the <a href="https://twitter.com/andersjensenorg?ref_src=twsrc%5Etfw">@andersjensenorg</a> transcript so you can read and watch at the same time.<a href="https://twitter.com/hashtag/UiPath?src=hash&amp;ref_src=twsrc%5Etfw">#UiPath</a> <a href="https://twitter.com/hashtag/UiPathCertified?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathCertified</a> <a href="https://twitter.com/hashtag/RPACertified?src=hash&amp;ref_src=twsrc%5Etfw">#RPACertified</a> <a href="https://twitter.com/hashtag/RPA?src=hash&amp;ref_src=twsrc%5Etfw">#RPA</a> <a href="https://twitter.com/hashtag/RPACertification?src=hash&amp;ref_src=twsrc%5Etfw">#RPACertification</a> <a href="https://twitter.com/hashtag/UiPathTutorial?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathTutorial</a><a href="https://t.co/dN4E9rzXKX">https://t.co/dN4E9rzXKX</a> <a href="https://t.co/z0QKYGK5FO">pic.twitter.com/z0QKYGK5FO</a></p>&mdash; rpacertified (@rpacertified) <a href="https://twitter.com/rpacertified/status/1380133641003614211?ref_src=twsrc%5Etfw">April 8, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## How to use the Anchor Base activity

To use the UiPath Anchor Base activity, follow these steps:

1. Add the UiPath Anchor Base activity to your workflow
2. Target an anchor with UiPath's Find Element or Find Image activity
3. Specify the relative position to the target UiElement with the AnchorPosition property
4. Add the activities to be performed in the _Drop Action Activity Here_ swimlane of the Anchor Base activity

## Anchor Base in UiPath Example
I opened this RPA challenge website and there is an input field we would like to target with the UiPath _Type Into_ activity. 
Let’s type something like ‘road’ into the address field.

Just quickly run the workflow in UiPath Studio to verify that the _Type Into_ activity works without even the need for a UiPath Anchor Base activity
## Problems with UiPath Selectors
However, RPA applications that do screen scraping or rely on well-formed HTML and IDs will often run into problems with a basic <a href="https://www.rpacertified.com/2020/09/09/sell-selector-in-variable.html">UiPath selector.</a>

To fix this problem and harden our applications, we can employ the UiPath anchor base activity. 

Delete what we have on the current workflow. Then search for the anchor base activity in UiPath Studio’s Activities panel. Then drag the anchor base activity onto the workflow.
You always create an anchor base close to your target. 

So let's add our _Type Into_ activity here as the UiPath Anchor Base action to perform. 

Then we will indicate the address field. We can type in ‘road’ again.

Then we will have an anchor that's close to the address field. 

We will just take the address label, because that will always be close to the target field.

The best thing to do is just take this address because that will always be close to our field.

<figure class="figure">
  <img src="https://files.readme.io/a06bf4d-anchor_base.png" alt="UiPath Anchor Base Activity" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">The UiPath Anchor Base activity can be used to overcome the fragility of PDF and HTML selectors.</figcaption>
</figure>


## Find element vs find image
We can choose two <a href="https://www.rpacertified.com/2020/09/09/act-finding-all-anchor-elements-in-webpage.html">UiPath find types</a> in our anchors: _Find Element_ and _Find Image._

Always try _Find Element_ first. If that doesn't work, you can use the _Find Image._

Drag the _Find Element_ activity into the UiPath anchor base acivity. 

That will be the address here. 
## Anchor Base AnchorPosition
Now we choose the Anchor Base position by specifying the AnchorPosition property.

The chosen anchor is over the target of our _Type Into_ activity, so the Anchor Base AnchorPosition should be on top. 

You can see that that the position changes in the UiPath Studio worfklow.

So now we have our AnchorPostion set to top. We can now run our UiPath Anchor Base example application.

Run it two times to verify it works on different sides. 
## UiPath Anchor Base Find Image
But what if the find element didn't work? The UiPath Find Element and Find Image activities compliment each other. If the Find Element fails, you can always try the UiPath Find Image activity.

And what we'll do is that will indicate our anchor base image to be the address JPG. Besides the use of a JPG, GIF or PNG as the target, the UiPath Find Image Anchor works the same way as Find Element does.

Run the RPA application and you’ll see that it works exactly the same as before.
And that’s a full UiPath Anchor Base tutorial to demonstrate how to improve on the basic selector functionality provided with UiPath Studio.

#### Anchor Base Resources

More information on how to use the UiPath Anchor Base activity can be found in the <a href="https://docs.uipath.com/activities/docs/anchor-base">production documentation.</a>

The sharing of Anders Jensen's content should not be interpreted as his endorsement for this site. We just like his content, and we hope he likes ours too.

Find more from Anders Jensen on his <a href="https://andersjensen.org/">webpage.</a>

<div class="row">
	
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card  w-100">
            <div class="card-header">
            UiPath on Twitter
            </div>

            <div class="card-body">
<!-- **************************** -->            
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Interested in the <a href="https://twitter.com/UiPath?ref_src=twsrc%5Etfw">@UiPath</a> IPO? The best <a href="https://twitter.com/hashtag/UiPath?src=hash&amp;ref_src=twsrc%5Etfw">#UiPath</a> stock analysis we could find is from <a href="https://twitter.com/FIREDUpWealth?ref_src=twsrc%5Etfw">@FiredUpWealth</a>, so we&#39;ve profiled him and his insights. Here&#39;s what you need to know about the <a href="https://twitter.com/hashtag/UiPathIPO?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathIPO</a><a href="https://t.co/6lAv3GJNOs">https://t.co/6lAv3GJNOs</a> <a href="https://t.co/4yIp9lsUag">pic.twitter.com/4yIp9lsUag</a></p>&mdash; rpacertified (@rpacertified) <a href="https://twitter.com/rpacertified/status/1380514151039139840?ref_src=twsrc%5Etfw">April 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



<!-- **************************** -->   
            
            
            </div>
        </div>
    </div>
	
	<div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card w-100">
            <div class="card-header">
            UiPath OCT Tutorial on YouTube
            </div>

            <div class="card-body">
	    
	Here's how to take UiPath OCR to the next level.
	Check out this UiPath Youtube tutorial from <a href="http://www.twitter.com/cameronmcnz">@cameronmcnz</a>.	    
	    
<p/>	    
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/y-Yi9f4AnQA"></iframe>
</div>
<p/>
#UiPath #UiPathCertified #RPACertified #RPA #RPACertification #UiPathTutorial
            </div>
        </div>
    </div>
	
</div>

