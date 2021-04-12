---
layout: answered-question
author: Serge Salerno
title: Mavenick Autoclose Message Box
blurb: In this quick how-to article, we discuss the benefits and drawbacks of the message box and introduce a new feature from our friends at Mavenick.
difficulty: 5
objective: 6.1 Describe the importance and reasons why data manipulation is used
canonical: https://www.rpacertified.com/2021/04/12/autoclosing-message-boxes.html
keywords: UiPath message, UiPath box, UiPath autoclose message box, close automatically, mavenick
---

# How to close a Message Box Automatically

Like any developer, you have your pet ways of debugging code. When you want to see what value a variable or argument is holding, what is your go-to? Some developers use write lines, some leading edge developers are starting to use Callouts, a personal favorite is the use of the Message Box.

A purist will say that the best way to debug is to use the write line or the log activity. They have their advantages but if you are full screen into an application or browser, you cannot see the value as they happen or you may not be fast enough to flip between windows. Which is one reason Message Boxes can be very useful.

One of the drawbacks that come from using Message Boxes is they are user intensive. The workflow stops and waits for the user to click okay before continuing. This is not a problem if you debug code very quickly, you discover the issue, remove the Message Box and continue developing. When the developer gets stuck and has multiple Boxes, it’s better if these Message Boxes close automatically once they display their information. What mechanisms can be used to achieve this as natively, once a Message Box is up, it halts the workflow until there’s intervention.


One school of thought is to have a parallel process running that could monitor for open Message Boxes and close them once they have been detected for over a certain amount of time. This is needlessly complicated for what we are trying to achieve during the debugging stage. What other mechanism can be used? 
Luckily the UiPath community has great developers with a firm belief in knowledge sharing. We will look at the MavenickConsultingAutoCloseMsgBox package.

<img src="https://www.rpacertified.com/assets/Mavenick-Package-Pic.jpg"/>

Click install and save.
Within the activities panel run a search for Auto Close Message Box

<img src="https://www.rpacertified.com/assets/Search-Autoclose-Messagebox.jpg"/>

Drag the activity to the activity to the main window

<img src="https://www.rpacertified.com/assets/Autoclose-Activity.jpg"/>

Although the top Message says CloseMessageBox, it really should say duration. It’s measured in seconds. We will put 3 seconds.
Second text Box is for the Message you want to display, such as the variable you want to read or just a simple hello world.
The last text Box is for the Title display of the Message Box. All fields are mandatory.
Once all are filled in, run the workflow to see that it appears to be a regular Message Box with the added benefit of it disappearing.

<img src="https://www.rpacertified.com/assets/Actual-Message-box.jpg"/>

This will achieve automating your Message Box and keep the workflow going. While the goal is to erase and remove these Message Boxes when the developer has finished debugging, if one of these Message Boxes remain in the workflow, it will slow down the workflow but it will not cause any errors or hang the automation. This is another drawback of the regular Message Box.

Please leave a comment on the article, add us on Facebook, follow us on Twitter and LinkedIn. Tell us what your favorite debugging tool is. Would you use this tool? Let us know here at RPACertified.
