---
layout: featured-post
author: Jenny
title: "UiPath If Activity Explained by Example"
blurb: "Want to quickly learn how to use the UiPath If Activity? This simple UiPath If Activity example will show you how to use conditional logic in UiPath Studio."
canonical: https://www.rpacertified.com/2021/06/12/uipath-if-activity-example.html
keywords: uipath, uipath if, if activity, uipath logic, uipath programming, uipath conditional, uipath studio, rpa developer, rpa programming
accordion: 
  - title: Transcript
    content: Computer programs can only do three things. **One**, they can _manage data_. We talked about UiPath variables in a previous tutorial. **Two**, they can perform    _conditional logic_. That is, _if-then-else_, that is what we are going to talk about here. The **UiPath if activity**, and they can do things very quickly in- for _while _or _do-while_ loops, which will be the next UiPath tutorial here.
            I want to talk about the UiPath if activity and how you create simple if-else conditions in a UiPath application. To do that, I am going to start up UiPath Studio and create a brand _new process_ and I will call it UiPath if-activity, it's not a very creative name, but I'm not a very creative guy.
            And when this opens, I am just going to drag the, if activity onto the _main workflow_, I may have to search for that in the _activities panel_ and there it is, and it comes up and it says, hey, let us figure out a condition to evaluate here. If the condition is true, **then** block runs. If the condition is not true, the **else** block runs.<br>
            <br>
            And so what is the condition going to be? Well, it has to be some that evaluates to true or false and nothing evaluates to true, better than the word- True. It is actually a reserved word in UiPath, but if the condition is true, what do you want to do? Well, in this case, I am just going to display a message box that says it is true.<br>
            Okay. Now what do you do if it is not true? Well, that is the _else_ condition. I think version 21.4 has this show else link. I do not know if that's available in 20.8, but if it's not true, I'll print up a message box and say, _ ‘It's not true’_ and then you've got your basic UiPath if-then activity, and I can run this now.
            It is true. So, I should get a message box that says it is true and it runs, and it is true. Well, what else were you expecting. Now, of course you can negate these conditions. You can say not true, and that will give you the opposite. So, if you say the condition is not true, that means it is false and then the _else_ block will run.<br>
            So, let us run the file and now you see the X block X, then block running, which says it's not true and so there you go. You have got your basic conditional statement in UiPath here. Now of course, people usually want to evaluate conditions and so evaluating condition, usually me and responding to a variable.
            <br>
            So, let us add a _variable_. I am going to add a new variable to this program. I am going to call it the counter and it is going to be of type **int32**, and I will even give it a default value. So, the default value will be 9. So, let us take a look at that. It has got scope for the sequence. The default value is 9.
            <br>
            That all looks good to me and so we can make the condition. So, the condition could be if the counter is less than 10. I am going to put a little space in there to just make it look a little bit more handsome. And so, as the counter, less than 10, well, it is 9, so that is true. I can run the file and I get the true condition and of course I can also do if it is the counter is greater than 10, which, you know, of course there is going to be false. So, I get the false condition. It is not true and you can even like, have not equal to, so you can do counter not equal to, so you've seen the condition for true condition for false condition, not equal to, um, we saw the not, which negates a true condition.
            <br>
            Here we can actually run the file. If the counter is not equal 10. Well, it is 9. So that is true as well. So that kind of gives you a whirlwind tour of that UiPath if activity. Now, if you want to take this one step further, I have actually got another tutorial on nested if then statements, and it shows you how to create a little number guesser game and UiPath studio, which actually takes input from the user using the UiPath input box. So, if you want to take your knowledge a little bit further, Go take a look at that tutorial, but this gives you a good, quick overview of how conditional logic and specifically the UiPath. If activity, how it works.

---

# UiPath If Activity

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/Dy9SyAbie_4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
<br/>


{% include accordion.html %}

### UiPath If Activity Example

<figure class="figure">
  <img src="https://aws1.discourse-cdn.com/uipath/original/3X/b/f/bf74b2ff3dd84a4f77f9c137e63b4728fee9e630.png" alt="UiPath If Activity Example" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">The UiPath If Activity simplifies conditional if then else logic.</figcaption>
</figure>

#### Where to find out more about the UiPath If activity?

If you want to see more examples of the UiPath If Activity from UiPath, visit the <a href="https://forum.uipath.com/t/advanced-activities-uipath-nested-if-then-else-statements/322285">official users forum.</a>.

<div class="row">
	
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card  w-100">
            <div class="card-header">
            Discuss with Us on Twitter
            </div>

            <div class="card-body">
<!-- **************************** -->       


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Watch this video to understand how to prepare yourself for <br>UiPath Associate Certification (UiRPA) <br>and <br>UiPath Advanced Developer Certification (UiARD).<br><br>Watch complete video here: <a href="https://t.co/DBfkQW8G9F">https://t.co/DBfkQW8G9F</a> <a href="https://twitter.com/UiPath?ref_src=twsrc%5Etfw">@UiPath</a> <a href="https://twitter.com/vibs_sri?ref_src=twsrc%5Etfw">@vibs_sri</a> <a href="https://t.co/gwVcCuupNp">pic.twitter.com/gwVcCuupNp</a></p>&mdash; Nisarg Kadam (@nisarg_kadam) <a href="https://twitter.com/nisarg_kadam/status/1381253771125161985?ref_src=twsrc%5Etfw">April 11, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 



<!-- **************************** -->   
            
            
            </div>
        </div>
    </div>
	
	<div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card w-100">
            <div class="card-header">
            Get UiPath Certified
            </div>

            <div class="card-body">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Having trouble deciding which <a href="https://twitter.com/hashtag/RPA?src=hash&amp;ref_src=twsrc%5Etfw">#RPA</a> certification exam to take? Here we compare UiPath Associate vs Developer exams.<a href="https://twitter.com/hashtag/UiPath?src=hash&amp;ref_src=twsrc%5Etfw">#UiPath</a> <a href="https://twitter.com/hashtag/UiPathAssociate?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathAssociate</a> <a href="https://twitter.com/hashtag/UiPathDeveloper?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathDeveloper</a> <a href="https://twitter.com/hashtag/UiPathRPA?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathRPA</a> <a href="https://twitter.com/hashtag/UiPathCertified?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathCertified</a> <a href="https://twitter.com/hashtag/RPATools?src=hash&amp;ref_src=twsrc%5Etfw">#RPATools</a><a href="https://t.co/DdMBV8BVpk">https://t.co/DdMBV8BVpk</a> <a href="https://t.co/DaQHgPpaR0">pic.twitter.com/DaQHgPpaR0</a></p>&mdash; rpacertified (@rpacertified) <a href="https://twitter.com/rpacertified/status/1383851087157858304?ref_src=twsrc%5Etfw">April 18, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
            </div>
        </div>
    </div>
	
</div>
