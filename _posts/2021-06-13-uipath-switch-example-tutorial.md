---
layout: featured-post
author: Kivens
title: "UiPath Switch Example"
blurb: "This quick UiPath switch example to set and expression and implement logic based on a matching case. It's a great alternative to the UiPath if activity."
canonical: https://www.rpacertified.com/2021/06/13/uipath-switch-example-tutorial.html
keywords: uipath, uipath switch, switch activity, uipath logic, uipath programming, uipath conditional, uipath studio, rpa developer, rpa programming
---

# UiPath Switch Activity Example

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/sBM9nkhRFNY" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
<br/>

## UiPath Conditional Switch Explained

<figure class="figure">
  <img src="https://itknowledgeexchange.techtarget.com/coffee-talk/files/2021/06/uipath-switch-example-conditional-activity.jpg" alt="UiPath Switch Activity Example" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">This UiPath switch example demonstrates how expression and case based conditional logic is implemented in Studio.</figcaption>
</figure>

Hey, I wanted to switch things up a little bit here and get away from the UI Path If-Then activities and instead do a little example with the UI Path statement. So I'm going to create a new project here and I'm going to call it the *UiPathSwitchExample*, when the main workflow pops up, I'm going to drag a *Switch activity* onto the sequence.

## Switch Activity

So I'm going to head over to the activities tab. Do a little search for this switch activity. Drag it on and there it is. Now, how does the switch activity work? Well, it allows you to do conditional logic, but it's used when there's multiple branches off of a particular property. So with an If-Then-Else statement typically you have a property and there's two branches. You know, one, if it's true, one, if it's not true, but with a switch, you might have a property where you might do two, three or four different things, depending on what the value is. So let's just imagine you wanted to play a sport, you invited a bunch of your friends over, you wanted to create a sports team and six of your friends show up.

Well, with 6 people, you can put together a hockey team. Imagine you had 11 people, you could put together a cricket team. If you had 15 people, you could put together a hurling team. Okay. So as you can see, it's not as simple as an If-Then statement. There's not two branches, there's multiple branches.

## Switch Statement
So let's do that little example here. How would we do that with a switch statement? Well, the first thing you might want to do is just create a variable on which the switch will occur. So I'll call it *players*. I'm going to make the variable type int because it's a number, although you can use a switch with a String, a Boolean or an Int32 value as well, the scope will be for the sequence.

Well hello India, we will have 11 people show up to play this game so you can see the default value of *players* is 11. So, on the switch statement, we would specify the property that we're switching on. So we're going to switch on the number of *players*. 

## Switch Cases

And you've got this option to add a *new case*. There's a default. You know, if none of the conditions match, but you can have a default. I'm not going to have a default here, but I'm going to add a case where if I've got 11 players, well, I want to add a little message box that says, *Hey, we are playing cricket!*. 

Now of course we know that the value is 11, but what happens if 15 people show up so we can add a new case for the number 15? And then I guess we could just drag a message box in there. And I said and it'll say *It looks like we are playing hurling*. I love hurling. 

And of course I'm Canadian, so I'm not Indian, I'm not Irish. I'm Canadian. So I guess I got to deal with the case where there are 6 players. So, we will add a new case here. We have got 6 players and of course, what are we going to play if we've got six players? Well, I guess we're going to play hockey, we've got a 3 on the ice plus the goaltender. So, *We are playing hockey*. This is just one side of the team, we are still going to have to have another six players show up so that we can play against somebody.

But let me get an idea of how this works. I guess maybe I should add something for my Korean friends too. Why don't we put a two in here and maybe *Let's play ping pong*. But you can see that the default value is 11 here. So that's what the number of players is that we've got. So I'm just going to run this file and it should say, Hey, 11 players. *We are playing cricket*. Okay.

But what if I change this value to 15? Well, all of a sudden, wow. It says it *Looks like we are playing hurling*. Now what happens if I just change this to 3? Now notice that there's no value that matches 3. I've changed this to 3. What happens if I run this? Nothing happens because nothing matches.

## Default

So that's where the *Default* comes in. If you specify a default that can handle any value that doesn't match one of the cases. So right here. Well, if they give us a number that doesn't match exactly, we can just say *No exact match. Why don't you all go surfing? *. So there you go. And here we can do it. And if, uh, we'll change that number up a little bit, go down to variables. Well, the numbers 3, that's not going to match. So we'll run the application and we don't have a good match on the team player. So we say *No exact match. Why don't you all go surfing? *. And there you go. That is the basic and the fundamentals of the UI Path Switch statement with an int32 value. I may actually show you how to do this with a string value in one of the next tutorials, but get used to that, get used to the idea of the cases, get used to the expression, get used to the default case because you will be tested on all of those things on the UI Path Associate Certification exam.

So if you do want to get UI pass certified, this is an important thing to know.


#### Where to find more about UiPath switch statements examples?

If you'd like to go beyond this UiPath switch activity tutorial, visit the <a href="https://docs.uipath.com/studio/docs/the-switch-activity">UiPath Forum</a>.

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
