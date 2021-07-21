---
layout: featured-post
author: Kivens
editor: Serge
title: "UiPath Get Username Password Activity Example"
blurb: "Here's how to use the UiPath Studio getUsernamePasswordX activity."
canonical: https://www.rpacertified.com/2021/07/15/get-username-password-activity-example.html
keywords: UiPath Studio, UiPath Username, UiPath Password, UiPath Credentials,  UiPath Studio, UiPath Example, UiPath Tutorial, RPA Programming, UiPath Associate
---

# Example of the getUsernamePasswordX activity

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/7J03lhwLnVQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
<br/>

## getUsernamePasswordX in UiPath Studio

Hey, I'm Cameron Mackenzie at <a href="https://twitter.com/cameronmcnz">@cameronmcnz</a> on Twitter, and I'm going to show you how to use the UiPath Studio, get username password activity (getUsernamePasswordX). So here's how to log into a website using UiPath Studio, get username, password X activity, and also access this windows, credentials, credentials vault over here.

You can see, I've got a nice little username password application here. I got a little cheat on it. It says, Hey, there's the username and password that will work. So if you kind of log in, you'll get some details and some information in there. Um, if you go back to the page, it'll log you out, by the way, that's over at RPA certified.com/acme/index.html.

So if anybody wants to file up and do this exercise yourself. You can, but let's say I wanted to automate this. I wanted to do this using UiPath studio while the way I would do it is first, I would add an activity to open a browser to that URL. And then of course, I want to type into this username and password field, the username and password, maybe a username and password pulled from windows credentials. 

So the easiest way to do that is while I'm in UiPath studio, but I'm going to use a studio X activity. So I've got show studio X selected there. And the one I'm going to use is called Get Username/Password X, there it is right there. I'm just going to drag this right into the sequence. You can even maximize this page, just so that it's a little easier to look at.

And I was going to say, what's the credential that you want to use? Well, I don't have a credential set up already, so I'm going to call it the UiPath-Example-Credential, and then I'll throw a username and password in here. And what did we say? We said, Hey, mail@uipath.com is valid. And we also said, Hey, password will work as well.

So I'm going to throw those in there as well. You can show the password if you want, but now I've got this associated with this UiPath activity. When this runs, it's actually going to take that username and password and store it in the credentials manager. In the future. If it runs again, it'll pull it out of that credentials manager.

Okay. So now of course, we've got the save for later variable. I'm going to name that press what control K right there and give that the name credentials. That seems like a sensible name. And then of course, I've got this webpage open and let's see if I've opened it up in Firefox. They just tend to like to use Firefox for development while from day-to-day stuff I use Chrome.

And here we go. We can actually see this. Now that's the whole thing over there in Firefox. I'm actually going to just do a, a little razzle-dazzle here so I can share the screen a little bit in order to get the next step going here. What I need to do is I need to say, I want to take that credential and I want to type the username in here and the password in there.


<figure class="figure">
  <img src="https://media-exp1.licdn.com/dms/image/C4D12AQER5ELr90QeOw/article-inline_image-shrink_1000_1488/0/1581332136099?e=1631750400&v=beta&t=lv3ZDxuwsFzt7z1TJiWnRCNGEjeqqglyevXSfHgkCGQ" alt="UiPath getUsernamePasswordX" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">Easily manage credentials with this UiPath getUsernamePasswordX example.</figcaption>
</figure>

And so that's just a matter of using the Type Into activity. The UI automation, Type Into click over here. What do we want to type in there? Well, I'm going to select it into that field right there. I want to type in credentials.Usernames. Then that's going to throw the username in. And of course the password is going to be exactly the same thing, except it's going to be different.

And so I'll indicate and screen the password there. And of course it's not credentials.Username, but it's credentials.Password. There it is right there. And of course, a log in, we want to click. So we're going to have to add the Click activity, click, click, click, and that's going to be a mouse click on UI automation.

What are we going to click? We're going to click this sign in button. And hopefully when this all runs, that will sign us into the website using our credential. That's going to be saved over here. Now, notice I called this UiPath example credential. 

### Usernames and Passwords in UiPath

You do not see UiPath Credential right there. Even if I flip back and forth, um, and actually look at that. It's just been added in. I thought it wouldn't add until runtime, but I just learned something myself. And there you go. Just as soon as I added in there, that credential is now stored permanently in windows credentials, boy, UiPath studio surprises me how awesome it is. Okay. Well, let's see this thing in action.

I'm going to close this browser window and let it start fresh. So, I'm going to say let's debug this application. Boom. Here it goes. Firefox of course wastes my time by installing some updates. I'm sorry about that. But now it's going to open up Firefox in this Firefox browser window. I get this window that comes up that says, Hey, enter your credentials or accept the credentials that have already been stored.

If I update this, it will save it in the windows, credentials manager. It now clicks. Okay. It logs me in and I'm into the website and there you go. That's how easy it is to use UiPath studio and a UiPath studio X activity to save a credential and subsequently use that credential, that username and password to login to a website. 

And again, if you want to use that website yourself, you can grab that form it's over on RPAcertified.com and there you go. That's how easy it is to use the UiPath studio. Get username password activity. Now, if you enjoyed that tutorial, head over to the server side.com, we've got lots of great tutorials on UiPath devops enterprise software development.

In general, if you're interested my personal antics, you can follow me on Twitter @cameronmcnz and subscribe on the YouTube.

## Sample Questions

#### Sample Question #1
Question: What is the name of the activity that allows us to add credentials?

- [ ] &nbsp;  Add Credentials
- [ ] &nbsp;  Get Credentials
- [ ] &nbsp;  Get Credentials X
- [x] &nbsp;  Get Username/Password

#### Answer

Option d is correct. 

Get Username/Password is an activity under StudioX which lets us add credentials

#### Sample Question #2
Question: When will the credentials be saved into the Credentials Manager?

- [ ] &nbsp;  Runtime
- [x] &nbsp;  Upon saving of the project

#### Answer

Option b is correct. 

The credentials will be saved into the Credentials Manager when you save the activity in the project.

### Learn more about getUsernamePasswordX

If you'd like to go beyond this UiPath Workflow example, visit the <a href="https://docs.uipath.com/activities/docs/get-username-password-x">UiPath Forum</a>.

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
