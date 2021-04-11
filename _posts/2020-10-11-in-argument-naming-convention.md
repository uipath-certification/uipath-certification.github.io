---
layout: answered-question
author: Serge
title: In Argument Naming Convention
blurb: Do you know how to properly name UiPath output arguments?
difficulty: 7
objective: 
canonical: https://www.rpacertified.com/2020/10/11/in-argument-naming-convention.html
---

Question: The data being passed in as an argument can only be used within the current project. What should the variable be named so as not to trigger the UiPath Studio analyzer?

- [x] &nbsp;  in-field
- [ ] &nbsp;  inField
- [x] &nbsp;  in_field
- [ ] &nbsp;  InField

## Answer

The correct answer is in_field. It will not flag the analyzer as is is consistent with the UiPath argument naming convention and the corresponding Regex of:

- In Argument Regex: ^in_(dt_)?([A-Z]|[a-z])+([0-9])*$
- In and Out Argument Regex: ^io_(dt_)?([A-Z]|[a-z])+([0-9])*$.
- Out Argument Regex: ^out_(dt_)?([A-Z]|[a-z])+([0-9])*$



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

