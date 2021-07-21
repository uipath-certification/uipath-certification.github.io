---
layout: featured-post
author: Kivens
editor: Serge
title: "Increase Screen Resolution of your UiPath Robot"
blurb: "Learn how to increase the screen resolution of your UiPath RPA robot."
canonical: https://www.rpacertified.com/2021/07/15/uipath-change-screen-resolution-robot.html
keywords: UiPath Orchestrator, UiPath Studio, Screen Robot, Screen Resolution, RPA Programming, UiPath Associate
---

# Change UiPath Screen Resolution

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/b8m6x4uKPR4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
<br/>

## Increase robot resolution in UiPath

Hey, Cameron Mackenzie here @cameronmcnz on Twitter. And I just wanted to show you how you can set the screen resolution for your robots. If it is defaulting to 800x600, I'll show you how you can make that 1080p or 4k. 

If you want to change the screen resolution with which your robots are running, the first place you'll want to go to make some changes is C:\ProgramData\UiPath, not C:\ProgramFiles\UiPath.

And you notice there is a file called UiPath.settings, I always make a backup before I edit it. That is just a good pragmatic practice. And you will notice if you dig into this file, you should have LoginToConsole=True. Cause you are going to have the robot logging into the console for you. And then you will see resolution width and resolution height. Now they actually default to zero. I have changed them to 1920 by 1080p. But they default to zero and zero means just use the resolution that is available in the system that you connect to, and if you connect to virtual machines quite often, that just defaults to 800 by 600, which messes things up.

So, you might want to set things there. Now that's sort of a general setting. Like that is going to apply to all of your projects there. So, you might want to override that on a per robot basis. So, you could always go into UiPath orchestrator. Here I am, I am logged in. You can go down to robots, find your robot and then click Edit.

And then in robot, you have got description and you have got settings as well. So, what you want to do is you want to go down and find that resolution width and resolution height settings and put a non-zero number in there. And then that will override what is in the settings file. So, there you go, those are the two different ways that you can change the resolution with which your unattended robots run.

There you go. That is how you set the screen resolution for your robots. And if you enjoyed that tutorial, why do not you head over to the ServerSide.com. I'm the editor in chief over there. We have got lots of great articles on UiPath automation, devops and enterprise software. If you are interested in my personal antics, I'm @cameronmcnz on Twitter and subscribe on YouTube.


### Robot Screen Resolution Example



<figure class="figure">
  <img src="https://i.stack.imgur.com/naJK4.gif" alt="UiPath Flowchart Example" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">Change screen UiPath robot screen resolution.</figcaption>
</figure>

## Sample Questions

#### Sample Question #1
Question: How many ways are there to change the screen resolutions for your robots?

- [ ] &nbsp;  1
- [x] &nbsp;  2
- [ ] &nbsp;  3
- [ ] &nbsp;  4

#### Answer

Option b is correct. 

There are two ways to change the resolution for the robots.

#### Sample Question #2
Question: Select the correct options to change the resolution for the robots.

- [ ] &nbsp;  UiPath Studio
- [ ] &nbsp;  C:\ProgramFiles\UiPath
- [x] &nbsp;  UiPath Orchestrator
- [x] &nbsp;  C:\ProgramData\UiPath

#### Answer

Option c & d is correct. 

You can change the resoltion by changing the values in UiPath.settings in C:\ProgramData\UiPath or you can use the UiPath Orchestrator

### Learn more about UiPath robots

If you'd like to go beyond this UiPath Workflow example, visit the <a href="https://forum.uipath.com/t/why-resolution-screen-not-1920-on-1080-unattended-robot/249348">UiPath Forum</a>.

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
