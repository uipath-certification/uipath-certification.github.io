---
layout: answered-question
author: Serge
title: How to use Picture-in-Picture in UiPath (PiP)
blurb: The UiPath Picture-in-Picture feature (PiP) is a net way to run attended and unattended robots. This tutorials shows you how to run them with UiPath Assistant.
canonical: https://www.rpacertified.com//2021/02/04/picture-in-picture-pip-uipath.html
keywords: UiPath PiP, UiPath Picture in Picture, Tutorial, PiP Example, Picture in Picture tutorial, Picture in Picture example, Picture in Picture benefits
---

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/KOjVaJ7aPdA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>


# UiPath Picture-in-Picture Tutorial (PiP)

I'm Cameron McKenzie, @cameronmcnz on Twitter, and I want to talk to you about UiPath Picture-in-Picture a really cool new feature that you can use with attended and unattended robots in UiPath.

 I have a neat little UiPath Robot here that listens for files to be dropped into this downloads folder. I can start it over on UiPath here.

I have this little downloads folder here and if I paste something into it you'll notice that a whole registration form pops up.

 There we go. We've got my Chrome browser starting up and now that application is going through my whole excel file,  doing all these registrations for me. It's a pretty cool pretty, neat little application.

## Picture in Picture example
 
 Right now it's just kind of monopolizing my entire screen as it runs let me get out of here... Come on UiPath Assistant I want you to stop... Here we go, the job is now stopped. 

Let's take a look at how we can actually isolate that a little bit by running this in UiPath Picture-in-Picture mode. 

I think this feature is really cool so instead of monopolizing all of my browser space I'm just going to delete that file copy it again so I can paste it back in and trigger this in UiPath Picture-in-Picture mode. There we go just setting things up a little bit here but as you can see this this application here I've got the option to start it in Uipath PiP picture in picture. I can also click this button here that says hey this will always run in Picture-in-Picture, but either way I want to restart this application and put it in Picture-in-Picture and you'll watch how differently it runs.

It runs in what looks like an isolated window, and I say looks like because I'll show you some of the drawbacks in a second, but there we go. 

I'll say start in Picture-in-Picture. 

### How to run Uipath Picture in Picture mode

It says it wasn't verified and tested in Picture-in-Picture and I know I should have clicked those buttons but whatever.. I was in a hurry... But now you actually see it running. It opens up its own window in its own window it simulates a login into the windows environment. 

I guess I've got to paste that file into the downloads folder to kick off the automation. When I do on the host machine and it's all the host machine it's not like a virtual environment or anything it's just an isolated Uipath picture in picture window. Notice how this picture in picture window is now taking all of the input and the whole thing is being processed not on one of the browsers that's sitting right next to me but right inside of this picture in picture window. 

### Drawbacks to UiPath PiP Mode

There are some drawbacks to Uipath PiP and one of the drawbacks  is the fact that I can still go in here and type. So notice that if I type something in here...

My user input, my keyboard, my mouse, - that's not blocked.  

So the great thing about Picture-in-Picture is it allows you to look at what's going on and see the process run but it doesn't actually block the user input if you want to do that you got to use the [UiPath block user input activity](https://www.rpacertified.com/2021/02/04/block-user-input-tutorial-uipath.html).

#### UiPath Block user input & PiP 

If you stick around for the next tutorial I'll show you exactly how to do that. But there you go that's how easy it is to run an application picture in picture. 

 I'm going to stop my application here but just publish your application from UiPath Studio into UiPath Assistant,  find the process that you've run and then just say start in UiPath picture-in-picture mode and it will.

And there you go, that's how you use Picture-in-Picture and UiPath. 

Now if you're interested in more about UiPath head over to [www.theserverside.com](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Create-your-first-RPA-robot-to-UiPath-Orchestrator-tutorial). I'm the editor-in-chief over there we got lots of great tutorials on UiPath orchestrator devops you name it if you're interested in my personal antics you can always follow me on Twitter, @cameronmcnz, and subscribe. On the [YouTube](https://www.youtube.com/channel/UCAc45SVFATruhRe_kb1iGkA).
