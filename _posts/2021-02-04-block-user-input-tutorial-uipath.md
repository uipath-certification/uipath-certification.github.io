---
layout: answered-question
author: Serge
title: How to Block User Input in UiPath
blurb: Nothing worse than fighting the user over the keyboard in mouse. Here's a 'how to use the UiPath Block User Input activity' example tutorial.

---

<iframe width="280" height="158" src="https://www.youtube.com/embed/OBHm7BJSr7Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# UiPath Block User Input Tutorial

I'm [Cameron McKenzie](https://www.mcnz.com/), @cameronmcnz on Twitter, and I want to teach you how to block user input when you're running your UiPath robots alongside a user who might be sitting at the local workstation or terminal.

 Here's a neat little UiPath robot, the best little robot you're ever gonna see, and I've got it deployed to UiPath assistant (although you can see UiPath Studio in the background). 
 
 When it's run it's best run picture in picture so if I run this in [UiPath Picture-in-Picture (PiP)](https://youtu.be/KOjVaJ7aPdA), you'll see the Picture-in-Picture window start over there try and log me in. The idea of this robotic process is if I drop a file in this downloads folder... Just watch... BOOM! A,ll of a sudden the robotic process will process the excel file log into [www.rpaccertified.com](https://www.rpacertified.com/study-guide-uipath.html) (a good site to check out) and then start registering users based on the excel file.

 Now there's a problem here, as cool as picture in picture is, notice the fact that I can still interact with this user interface so if I start typing stuff in here you know I can really mess up the input of data because nothing's blocking input. 
 
 ## Block User Input vs. UiPath Picture-in-Picture
 
 Nothing's stopping me from typing things in and you can see that's a valid user but in fact the registration has failed so that is no good so how can you change that. I'm going to stop this automation.

Where is UiPath assistant? There it is right there. Let's give that a little bit of a stop. Close that picture in picture window and there we go. That's done. 

## Block User Input Activity Example

Now over here in UiPath studio I've got my project that's all the code for it's a lot of code there too much for me to talk about right now but trust me that's it now there's this cool activity called block user input. I'll type block over here. You'll see it over here. 


### UiPath Studio and Block User Input

I'm going to drag that to the top of the sequence and I'm not just going to drag it to the top of the sequence but I'm actually going to drag all of the content of the robot, everything the robot did, into the block user input activity. 

Now everything that runs is running in this <em>block user input</em> mode. Notice there's an escape key alt f10 if I do that well in that case I can break out of the block input facility here but I'm going to click control S.  and publish that Block User Input Example to my UiPath Assistant.

### Robot with Block User Input

Now look at what happens when I run this in picture in picture I say start in Picture-in-Picture. I'll click yes even though I wasn't designed originally to be in picture in picture. That's going to change the name of this file slightly so there's not a conflict here. I'm going to copy that go back to the downloads folder paste it in here and let's watch this process take off.

All of a sudden the UiPath Robot with user input blocked is going to read this excel file. It's going to start typing things in. 

#### Block User Input Tutorial

But look what happens if I try and go and actually click on the page. I'm trying to click on the page, I'm trying to mess up the workflow, but I can't and the reason that I can't mess up the workflow here is because I've got that UiPath block user input activity enabled. 

And there you go, that's the key. Don't just run your things picture-in-picture but add that block user input and then the user sitting in front of the terminal can't mess things up and there you go that's how easy it is to block user input when you're running your UiPath robots alongside a user. 

Now if you enjoyed that tutorial why don't you head over to [theserverside.com](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Make-this-UiPath-Hello-World-example-the-first-project-in-your-RPA-journey). I'm the editor-in-chief over there got lots of great tutorials on UiPath and robots and rpa you name it if you're interested my personal antics you can always follow me on Twitter at @cameronmcnz and do the subscribe thing on that youtube channel.

<img src="https://files.readme.io/d9118e5-2020-02-18_16-44-44.png" alt="UiPath Block User Input Activity" class="img-fluid"/>
