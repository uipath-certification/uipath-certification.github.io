---
layout: answered-question
author: Serge
title: Anchor Base Tutorial in UiPath Studio
blurb: Here's a quick UiPath Anchor Base Tutorial, along with insights on how to use the Find Element and Find By Image activities.
difficulty: 6
objective: 4.3 Identify and describe how and when to use Anchors
canonical: https://www.rpacertified.com/2020/09/09/sell-describe-anchor.html
keywords: anchor base, UiPath Anchor, Anchor Base tutorial, UiPath Tutorial, Tutorial, UiPath Find Element
---

<h1>UiPath Anchor Base Tutorial</h1>

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/rjtHXD2nI8Q" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>

## Anchor Base Activity in UiPath Studio

Hey, I'm Cameron McKenzie, @cameronmcnz onTwitter, and in this UiPath Anchor Base Tutorial, I wanted to talk to you about extracting data from your PDFs. 
I previous did a tutorial on how to do some basic data extraction in UiPath Studio with the use of the anchor base activity, but if you ever start doing some complex data extraction from PDFs of web pages, you need it to be anchor based.

That's the only way to really make it work with multiple files. So that's what I want to talk about here. And the next tutorial, I'm going to talk about doing data extraction on tabular data. And if you put the two together, I think you'll really know how to work with PDF files and UiPath. I'm going to kick this off by creating a new process project, not yet call up PDF extract.

And is that project is being created. I just want to show you the PDF that I'm going to. Pull some data out of you notice that I've got the invoice number, the date over here. I've also got the total. I want to pull that data out of this PDF file using anchors. Now, one thing I should point out there's tabular data on here.

Like that mailing address is tabular. The line items here in the orders is tabular. And then there's properties, there's name, value pairs, like invoice and the invoice number date, and the date number. If you want to pull out tabular data, you have to do that through data scraping. I've got a tutorial on that.

That's one of the next ones. If you want to pull up the name, value pairs, the best way to do it is with the anchor tag. And so that's what I'm going to demonstrate here. I'm going to pull up the invoice number, the date and the total, and I'm going to do it all through an anchor activity. And I kick this whole thing off.

I need to actually get the name and folder of that file. It's in a folder called orders here. So I'm just going to copy that and then paste that name in, and I'm going to paste it into a process starting activity. So open up the main window. Look for the process creation activity, there's, uh, something called start processing and drop that on there as my first step in the process that I want to run is whatever process is going to open up that invoice a one, a PDF that I just showed you now, along with.

Kick along with kicking off that process, we need to attach the Adobe PDF window to this process so that we can interact with it in order to do that. Yeah. Look for the attach window commands or not click the attachment window command down here. Now it does say, what screen do you want to attach? And the easiest way to do that is to kind of.

<div class="row">
	
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card  w-100">
            <div class="card-header">
            Join the Conversation on Twitter!
            </div>

            <div class="card-body">
<!-- **************************** -->           

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Here&#39;s some expert advice on how to get <a href="https://twitter.com/UiPath?ref_src=twsrc%5Etfw">@UiPath</a> certified quickly. <a href="https://twitter.com/hashtag/UiPath?src=hash&amp;ref_src=twsrc%5Etfw">#UiPath</a> <a href="https://twitter.com/hashtag/UiPathCertification?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathCertification</a> <a href="https://twitter.com/hashtag/UiPathAssociate?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathAssociate</a> <a href="https://twitter.com/hashtag/UiPathExam?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathExam</a> <a href="https://twitter.com/hashtag/RPACertification?src=hash&amp;ref_src=twsrc%5Etfw">#RPACertification</a> <a href="https://twitter.com/hashtag/UiPathTraining?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathTraining</a> <a href="https://t.co/VjXjygN3gf">https://t.co/VjXjygN3gf</a> <a href="https://t.co/1rJxAKzdwS">pic.twitter.com/1rJxAKzdwS</a></p>&mdash; rpacertified (@rpacertified) <a href="https://twitter.com/rpacertified/status/1380564928470343680?ref_src=twsrc%5Etfw">April 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 



<!-- **************************** -->   
            
            
            </div>
        </div>
    </div>
	
	<div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card w-100">
            <div class="card-header">
            UiPath Anchor Tutorial on YouTube
            </div>

            <div class="card-body">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The best way to cheat? As far as <a href="https://twitter.com/rpacertified?ref_src=twsrc%5Etfw">@rpacertified</a> is concerned, it&#39;s to study hard.<a href="https://twitter.com/hashtag/UiPath?src=hash&amp;ref_src=twsrc%5Etfw">#UiPath</a> <a href="https://twitter.com/hashtag/UiPathAssociate?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathAssociate</a> <a href="https://twitter.com/hashtag/UiPathDeveloper?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathDeveloper</a> <a href="https://twitter.com/hashtag/RPA?src=hash&amp;ref_src=twsrc%5Etfw">#RPA</a> <a href="https://twitter.com/hashtag/RPATools?src=hash&amp;ref_src=twsrc%5Etfw">#RPATools</a> <a href="https://t.co/6YNpeqDCJz">pic.twitter.com/6YNpeqDCJz</a></p>&mdash; rpacertified (@rpacertified) <a href="https://twitter.com/rpacertified/status/1381409073808179202?ref_src=twsrc%5Etfw">April 12, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
            </div>
        </div>
    </div>
	
</div>

## Studio, UiPath Anchor Base and PDFs

Move UiPath Studio and it's anchor base features off to the left and put your PDF to the right click indicate window on screen. And then just click on your PDF file in the tool realizes, okay. It's that PDF Adobe Acrobat viewer that it wants to, that we want to use when we go through this PDF file. No, by the way, in the selector, they always specify the actual name of the file.

I don't actually need that here. And that can cause problems later, if you're looping through a bunch of files and one of the files obviously won't have that name it'll cause a problem. So I like to de-select that it's not necessary for, for this, this particular exercise, but it's a good idea. Now what I want to do is I want to grab some information here.

I want to grab that invoice number, the invoice date and the invoice total. I'm gonna grab that information. I'm gonna need some variables. I'm going to create those right off the bat. So I got invoice number.

Invoice date and invoice total, all of type string I'll have scope throughout the entire sequence. Those will come handy in this exercise. Make sure you got those variables declared. And then the first thing I'm going to grab is invoice number a one. And I'm going to do it by telling the tool, Hey, on every single invoice, there'll be a section on the page where it says invoice number.

Now the invoice number is going to change from time to time. So I want you to look under where it says invoice number, which will always be there and give me the value associated with it. And you do that by adding something I think in called an anchor activity, the anchor base activity. I'm going to drop that in here.

### Anchor Base Tutorial & UiPath Find Element

It's got two parts to it. Where's the anchor. And what's the text that you want to get based on that anchor and to fill in the anchor, you use the UiPath find element activity. Let me see if I can find teh Uipath find element activity  under UI automation element, find I'm going to go find element. And again, it says, what element are you looking for?

So again, click that button. Say I'm looking for something relative to the invoice number. That's okay. That's cool. So what do you want to do once you've found that thing and they're going to get some texts that's associated with it as well. Show me what texts you want. And again, I'll click on that link and I'll say, well, it's actually the text.

That's right underneath it. That text right there. A one eight Oh Oh one. It looks like everything is running swimmingly. Now, one thing I will say this, this anchor based tries to guess what texture interested in and it doesn't always guess it, right. That anchor invoice number is above the string that I want.

So what you should always do is explicitly state in your anchor base, where that anchor is positioned. In this case, invoice numbers positioned above the variable above the data that I want. So an anchor position, you say that the anchor is above or the anchor is on top of the element that we're after.

Okay. Not on top on top means actually the same cell top means just above it. There there's two options there that are kind of similar as the, on top and top we want top. Okay. So that is going to give us our, what's it going to do? It's going to give us their invoice number. And if you want, you can even write that out.

So you can say, Hey, the. Invoice number is, and then plus invoice number, and that should print out what the invoice number is. And then we can follow these steps right through and get the invoice date. And so again, that's going to be exactly the same. It's just going to be different. So we grabbed the anchor base activity, throw it on the UiPath find by element activity, throw it on.

I have to get text, throw it on in this case, I'm going to get the invoice date. So the value of the get texts is going to be invoice date. And then I go through the process of associating those two elements with the fields that I want. I'm running out of space here on the page, but what is the anchor element?

Indicate the element inside the window for the anchor that I'm going to be looking for. What is that date? Colon word there. And then what texts do we want when we want the texts? That's right underneath it. That's the text right there. Okay. And that all looks like it's working properly. Now, again, the anchor is above the anchors on top of the data that I'm getting.

And so in that case, you want to change the anchor based there to indicate that we're going, that the anchor is on top of the field that we're looking for. No, it was, it kind of switches the weight structure on the page too. I always think that's kind of cool. Nice little attention to detail as they say, but now I've got one more.

#### UiPath Find By Element & Anchor Base Activities

I want to get the total. So I'm going to go anchor base over here. I'm going to use a UiPath find element activity. I'm going to do a, get text, get texts. I didn't mean to hit that. Excuse me. The get text field is going to initialize the invoice tool. Cool. So,

so I'll specify that get text updates that as part of its output, and of course I've still got the steps to find the element and get the tax. So let me see, do the UiPath find by element activity for the total indicate element and I'll cook over here. There's the total field. And then again, last. What is the text that you want?

So I'll click on that $115 value. And again, it looks like total is on top. And so the last thing that I need to do here is specify that the anchor position is top. That gets me through the anchor based thing. And then I think I can always write the line out there and say, Hey, the total is plus invoice total.

Okay. Well, all of this looks good. I would like to make sure, you know, I've got things in double coats off and forget to do that. Make sure that they've got each variable for the getter pointing to a value in why is there no value there, so that get tech should point to invoice number. So it looks like I did mess something up there.

Make sure that you've got that specified. So get texts for there. It goes to invoice number.

This get no that get text goes to invoice date, and then this gets taxed, goes to invoice total. And you know what? I never printed out the invoice date. Gee, that wasn't very thoughtful of me. So I'm just going to add a right line after the invoice date, date is invoice date. Okay. And that looks pretty handsome.

There there's the well that doesn't look. Too visually, visually appealing, but it gives you a bit of an idea there of what's going on. Um, but yeah, the kickoff, the process, we load the PDF, we associate it with Acrobat reader and then we based on anchors, get the invoice number, the invoice date and the invoice total.

#### Anchor Base Tutorial Review

Okay, well, I'm going to run this. See what happens? Click save, click run. Oh, there's a validation error. Okay. It looks like, Oh, I got done underscore instead of a plus there silly me. Okay. Save that again. And then the RPA program opens up the file. Does the extract, and then here you can see down at the bottom, the invoice number. The date is zero one 2020. The total is one 15. And that maps exactly to everything I got on the form, a one, a 2020. In one 15 and there, yeah. Oh, that's how you do anchor based extraction of data in your PDFs.

If you enjoyed this tutorial, once I head over to the server side.com, I've got all sorts of tutorials and articles over there about enterprise software development. If you're interested my personal antics, you can follow me on Twitter @cameronmcnz. And subscribe, on the YouTube.


#### Anchor Base UiPath Exam Quextion

Question:  Which of the following best describes the purpose of the Anchor Base activity in UiPath Studio?

 - [X] &nbsp;  The Anchor Base activity is used to interact with an element that has an unstable selector
 - [ ] &nbsp;  The UiPath Anchor Base is used since selectors are available in any application at any level
 - [ ] &nbsp;  The Anchor Base in UiPath Studio can be used with any type of activity available in the Activities panel
 - [ ] &nbsp;  The UiPath Studio Anchor Base Activity provides faster identification of available elements in desktop apps

##### Anchor Base Certification Question Answer

Option A is correct.

##### Anchor Base and UiPath Studio

The answer provided here is the very definition and use of the <a href="https://www.rpacertified.com/2021/04/03/uipath-anchor-base-example-tutorial.html">UiPath Anchor Base</a> activity.


For more details on how to use this popular activity, check out this <a href="https://www.rpacertified.com/2021/04/03/uipath-anchor-base-example-tutorial.html">UiPath Anchor Base Example</a>



<div class="row">
	
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card  w-100">
            <div class="card-header">
            Join us on Twitter
            </div>

            <div class="card-body">
<!-- **************************** -->            


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">There are rules for naming <a href="https://twitter.com/hashtag/UiPathArguments?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathArguments</a> Know them before you take the <a href="https://twitter.com/hashtag/UiPathAssociate?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathAssociate</a> exams.<a href="https://twitter.com/hashtag/UiPathDeveloper?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathDeveloper</a> <a href="https://twitter.com/hashtag/RPATools?src=hash&amp;ref_src=twsrc%5Etfw">#RPATools</a> <a href="https://twitter.com/UiPath?ref_src=twsrc%5Etfw">@Uipath</a> <a href="https://twitter.com/hashtag/UiPathCertification?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathCertification</a> <a href="https://twitter.com/hashtag/RPACertified?src=hash&amp;ref_src=twsrc%5Etfw">#RPACertified</a><a href="https://t.co/kQ2eH3yPYu">https://t.co/kQ2eH3yPYu</a> <a href="https://t.co/6fpbYSSoz9">pic.twitter.com/6fpbYSSoz9</a></p>&mdash; rpacertified (@rpacertified) <a href="https://twitter.com/rpacertified/status/1382702509962240008?ref_src=twsrc%5Etfw">April 15, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


<!-- **************************** -->   
            
            
            </div>
        </div>
    </div>
	
	<div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card w-100">
            <div class="card-header">
            Talk with us on Twitter
            </div>

            <div class="card-body">
	    
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Are you sensitive? Case sensitive? Do you know if <a href="https://twitter.com/UiPath?ref_src=twsrc%5Etfw">@UiPath</a> is or not?<a href="https://twitter.com/hashtag/RPA?src=hash&amp;ref_src=twsrc%5Etfw">#RPA</a> <a href="https://twitter.com/hashtag/RPAProgramming?src=hash&amp;ref_src=twsrc%5Etfw">#RPAProgramming</a> <a href="https://twitter.com/hashtag/UiPathCertified?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathCertified</a> <a href="https://twitter.com/hashtag/UiPathExam?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathExam</a> <a href="https://twitter.com/hashtag/UiPathStudio?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathStudio</a><a href="https://t.co/ASZRFVzFw7">https://t.co/ASZRFVzFw7</a> <a href="https://t.co/yEEifjLLak">pic.twitter.com/yEEifjLLak</a></p>&mdash; rpacertified (@rpacertified) <a href="https://twitter.com/rpacertified/status/1381406846326616066?ref_src=twsrc%5Etfw">April 12, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

            </div>
        </div>
    </div>
	
</div>
