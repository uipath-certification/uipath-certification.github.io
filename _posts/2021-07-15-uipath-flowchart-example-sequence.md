---
layout: featured-post
author: Serge
editor: Serge
title: "UiPath Flowchart Example"
blurb: "Here's the UiPath Flowchart example you need to show you the difference between a sequence and workflow in Studio."
canonical: https://www.rpacertified.com/2021/07/15/uipath-flowchart-example-sequence.html
keywords: UiPath Flowchart, UiPath Studio, UiPath Example, UiPath Tutorial, RPA Programming, UiPath Associate, UiPah Flowchart Sequence
---

# Example of a UiPath Flowchart

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/cFt9SXE35EE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
<br/>

## Flowcharts vs Sequences in UiPath

If you're a tried and true RPA programmer, you'll likely spend most of your time creating sequences. But as this UiPath Flowchart example will demonstrate, you will see that there's a valid alternative if you want a graphical way to design your RPA workflow.

## UiPath Flowchart Tutorial

I'd like to show you how to do iterative and conditional logic in UI path studio. Using a flow chart. So to start off, I'm going to create a brand new process. I'm going to call it the UI path, low chart example, click create only the description blank for now. And once this project opens up, I'm going to make sure that the project tab is selected.

And then on the project UI path flow chart example, I'm going to add. A new flow chart, Ella, call it my flow chart. Nothing too interesting. They're creative with the name, but you see a new flow chart displays. I'm going to do a little bit of organizing in March. UI path studio environment, just because I want a lot of space here to demonstrate how a flow chart works.

You can see we've got a little start icon here. Everything starts in a UI path flow chart with that start button there. And what I'd like to do here is I'd like to create a little number guessing game. You got to guess a number between one. And a hundred. So starting off, the first thing we're going to need is a variable of type into 32.

That'll represent the magic number. So I'll click on the UI path, studio activities tab, and pull over and assign activity. And I'm also going to drop it onto that bottom arrow there of the start. Boom. And you see this line gets created saying, we're going to start. And then the first thing we're gonna do is create a new variable, assign a new variable, a value.

I'm going to call this UI path variable magic number and I'll click control K, to bring up the set VAR tax, which will allow me to create a new variable. So we'll call it magic number. And the value that I'm going to sign to it. This is going to get a little bit complicated. So I'm going to open up the advanced editor here, and I'm going to cheat a little bit, looking at my notes.


<figure class="figure">
  <img src="https://files.readme.io/3dba37f-flow_decision_best_practices.png" alt="UiPath Flowchart Example" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">Learn to create visual sequences with this UiPath Workflow example.</figcaption>
</figure>

It's going to be a new, random number. When you say new random, that creates an instance of the random class. And then you say a new number between one and 99. That should be fun for our little example. How this is going to create a new variable named magic. Number's going to assign it a random number. Now I do have a little error message here, and that error message is because the assign activity defaults to string and that new random creates an in 32 variable.

So I just have to click on the variables tab here and say, Hey, change that UI path variable from history. To an int 32 type. And once I do that, all of my problems go away. Well, maybe not all of my problems, but one of my problems goes away. Okay. So we've got a magic number. What do we want to do? Well now we want to grab some input from the user and have them guess the number.

So to do that, I'm going to grab a UI path input, dialogue box. I'm going to drag it under the assign activity, but notice I'm going to drop it on the triangle. And by dropping into the triangle, it's going to create a workflow link, a UI path flow chart, link chart link that says after the assign activity happens, call on the input dialogue box.

And what do we want in the input dialogue box? I'm going to go over here and change this. Title, I'm gonna call it number guesser. That should be the title. Um, and then the label is going to be enter a number and then the result again, I'm going to create a brand new variable here. So I'll click control.

And I'll call that the guest number, not guest as in a guest at a palace, but guest, as in I guest at the number now, again, I'm going to run into that same problem where it's going to say, you know, I don't like that data taped. I'm going to go down into variables. Just change the data type from a string to an int 32.

It didn't bark at it now, but it may bark at it at runtime. And it allows us to do the conversion right there. So it'll make our conditional statements a little bit easier to calculate. Okay. So now I've got input from the user. I've got a magic number and now what do I want to do? Well, I want to see if the magic number is the same as the guests.

Right. Have they guessed the magic number? And so to do that, you added decision point. Did that decision point onto the workflow? I'm going to drag it onto the triangle underneath input dialog box. So after we get the input, we're going to do this flow decision and what's this decision going to be? Well, it's conditional on whether the magic number is equal to.

The guest number when you make that to conditional for the flow decision. So if they've selected the right number, if the magic number is equal to the number of guest, the guest number, well, then we'll send them a message box saying, Hey, way to go. You guessed the right number. And so to do that, I'm going to drag a message box over here.

And I'm going to drop it again onto the triangle, put on the left-hand side here to format things nicely. And so if the condition of the flow decision is true, you can't actually see the true there, but if I move that area go, you can see the true, if it's true. Well, I want this message box to say, I can go over to text here.

You guessed it, right. It was. And then plus guest number dot two strings probably required. There. There you go. That's going to say, Hey, you guessed the number right now. What if they didn't guess it correctly? Well, if they didn't guess it correctly, we need to figure out whether they need to guess higher or whether they need to guess lower.

So that's another flow decision. So I'm going to drag a new flow decision next to the first flow decision. So if they guessed it, right, well, that's Garrett. The game's over. If not, they're going to have to guess again, but we need to tell them if they need to guess higher or lower. So now we'll drop a flow decision onto the flow decision.

And if this decision is false, if the magic number is not equal to the guests number, well, let's see what happens. If the magic number. Is greater than the guest number. So if the magic number is greater than the guests number, we have to tell the user to guess higher. Okay. Well, if that's the condition, so I'm going to go over here and drag a message box onto the flow decision.

If that point is true, you see the true pointed up there. We'll tell them that they have to guess hires the techs will be guests higher. And then I would imagine if it's the other way around Bob, we'll throw the message box onto the false decision and say, Hey, you need to guess lower.

Okay. And so that puts our African  mostly done now, right now, as soon as one of these such boxes that you got it, right, the guests higher, the guests lower, as soon as one of those message boxes pops up and gets closed. The application's going to terminate the cool thing about a flowchart is you can implement iterative logic, flow logic, like a wild loop without adding a wild loop or a four loop to the pros.

All you do is you just add a branch from one activity to an activity that occurs previous in the flow chart. And so, for example, if we want them to guess again, after they we've told them, Hey, you need to guess lower, I guess, lower. I can now drag this connector from the message box here all the way back to the input box.

And that essentially creates almost like a wallet. Keep going. Keep getting input from the user until they've guessed it right now. Of course, if we do that for the guest, Laura, we need to do it for the guests higher as well. So I'll drag this connector over here, up to the input dialog box. It's kind of ugly when it's ugly like that.

You can drag it out. That looks handsome. There we go. And now we've created a flowchart or workflow, and we've actually implemented essentially a wild loop that is going to allow this flowchart to keep iterating. Until the condition where they've guessed the magic number is true. Who's met. Okay. So I'm going to save that by clicking control asks, you can always click on the save icon as well.

And I'm going to say run file to bring this up. And that's going to ask me to guess a number and I'll guess the number 50 got, I guess, lower. So I'll do 25, I guess, lower than that. Why not? 10 guess higher? I guessed it. Right? Boom. It was 15. Now I click. Okay. And of course from the message box, it says you got it right.

There's no connection to the input dialogue box. So when that particular condition is true, when we've guessed the right number, well, the UI path flow chart terminates it exits it's done. And there you go. That's a real, simple and nice example of how you can do conditional and iterative logic. With a UI path flow chart.


### Learn more about UiPath Workflows

If you'd like to go beyond this UiPath Workflow example, visit the <a href="https://docs.uipath.com/studio/docs/workflow-design">UiPath Forum</a>.

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
