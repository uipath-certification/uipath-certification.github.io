---
layout: answered-question
author: Serge
title: What is the difference between variables and arguments?
blurb: A quick explaination of how variables and arguments in UiPath differ, and how to choose between the two? 
difficulty: 7
objective: 3.1 Identify the different variable types available in the UiPath Studio Variables panel
keywords: UiPath Argument, RPA Argument, Argument vs Variable, Argument in UiPath Studio, Arguments vs UiPath Activities
canonical: https://www.rpacertified.com/2020/09/09/var-variables-and-argument-differences.html
---

<h1>Arguments vs Variables in UiPath</h1>

Question:  What is the difference between UiPath arguments and variables?

 - [ ] &nbsp;  Variables pass the data between activities in the same workflow.  Arguments manage the data only inside an activity in the same workflow
 - [ ] &nbsp;  Variables manage the data only inside an activity in the same workflow.  Arguments pass the data between activities in the same workflow
 - [X] &nbsp;  Variables pass the data between activities inside workflows.  Arguments pass the data between workflows
 - [ ] &nbsp;  Variables pass the data between workflows.  Arguments pass the data between activities inside workflows

## Answer

Option C is correct.

<h2>UiPath Variables and Arguments</h2>

The correct answer is C. Variables work with data inside workflows. As long as you can do everything within one workflow, you would only need variables with the correct scope.  When it comes to passing information to another workflow, you would need a UiPath argument, not variable. 

UiPath Arguments act like variables within a workflows, but unlike variables, they add the ability of sending and receiving data to and from a workflow.

Find our more about <a href="https://www.rpacertified.com/2020/11/11/input-output-argument-names.html">UiPath Agrument naming conventions</a> and <a href="https://www.rpacertified.com/2020/10/10/variable-naming-conventions.html">UiPath Variable Naming conventions.</a>

You can also reference the [docmentation](https://docs.uipath.com/studio/v2019/docs/st-nmg-002).


<div class="row">
	
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card  w-100">
            <div class="card-header">
            UiPath on Twitter
            </div>

            <div class="card-body">
<!-- **************************** -->            

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Make sure you know how to name <a href="https://twitter.com/hashtag/UiPathArguments?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathArguments</a> before you take the <a href="https://twitter.com/hashtag/UiPathAssociate?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathAssociate</a> or <a href="https://twitter.com/hashtag/UiPathDeveloper?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathDeveloper</a> certification exams.<a href="https://t.co/kQ2eH3yPYu">https://t.co/kQ2eH3yPYu</a> <a href="https://t.co/XzS6wpf7q7">pic.twitter.com/XzS6wpf7q7</a></p>&mdash; rpacertified (@rpacertified) <a href="https://twitter.com/rpacertified/status/1381325256439267333?ref_src=twsrc%5Etfw">April 11, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 



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
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KCCBJ711Z5Q"></iframe>
</div>
#UiPath #UiPathCertified #RPACertified #RPA #RPACertification #UiPathTutorial
            </div>
        </div>
    </div>
	
</div>


