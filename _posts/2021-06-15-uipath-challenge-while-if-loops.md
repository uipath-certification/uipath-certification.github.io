---
layout: featured-post
author: Supreet Singh
title: "Learn Iterative and Conditional Logic with this UiPath Challenge"
blurb: "Get some hands on learning and implement this number guesser RPA Challenge project and learn iterative and conditional UiPath logic."
canonical: https://www.rpacertified.com/2021/06/15/uipath-challenge-while-if-loops.html
keywords: uipath, uipath challenge, uipath iterative, uipath logic, uipath conditionals, rpa developer, rpa programming
accordion: 
  - title: Video Transcript
    content: <h3>Introduction</h3>Hey, Cameron Mackenzie here at **@CameronMcnz** on Twitter and I wanted to talk to you about do while loops and UiPath. So, to start this project off, I am going to create a new process and then call it the number guessing game, little blank process there and as soon as the project is created, I am going to click on this button to open the _main workflow_.<br>
            <h3>Get Guess input from User</h3> 
            And what I am going to do is I am just going to keep asking a user, hey, pick a number between one and 10 until they have picked the number 5. In order to do an activity like that, where somebody keeps doing something until a condition is achieved your best to use a do while activity. So, I have gone into the workflow control and do while section and added this activity here.<br>

            Of course in this activity, what do I want to do? Well, I want to keep asking the user to _pick a number between 1 and 10_ and so in order to ask for input, what you need is you need to go into the system area into dialogues and you can find the input dialogue.Now with the input dialogue, let me say, say something like, in quotes, and then in quotes, again, make sure this is all in quotes. This is going to have a little dialogue boxes to say, pick a number between 1 and 10 and then that is the title and then it is actually going to say in the dialog box, “What's the number?”. Now, when this runs, it can take the input that the user types in and store it as a **variable**.

            You can see this little, you know, what is the output of running this input dialogue box. Well, it is, uh, the information somebody typed in which we can store as a variable. Now, in order to store variables, you need to actually declare them. So, there's this little variables tab down here. You can see _imports, arguments, and variables_ down here.<br>
            <h3>Create a Variable:Guess</h3>
            I am just going to create a variable named _Guess_. It is going to be of type always we'll make it of type int the scope will be for the entire sequence and so that's the sequence. So, if we make it _Sequence scope_, the variable is available inside the sequence to do while, the body, if you make it, um, you know, less general, you know, you might not be able to use the variable in different parts of the sequence.
            So that's why I made it sequence. So that's the Guess and you can see right here in that input dialogue box, the result of somebody's interacting with that dialog box and typing, something in is the initialization or setting of that variable. So, when somebody types something into the dialog box, it's going to update this variable Guess.
            <h3>Specify Condition</h3>
            Okay. So, what is the condition? Well, we're going to keep running this **do-while** loop until they've picked the right number. So, we'll keep doing it while they've got the wrong number and so that would be something like Guess is not equal to, 5, right? Because we're just going to say _5 is the magic number_.<br>
            <h3>Success Message</h3>
            Then when that do-while loop is completed, you can see that sort of the scope of the do while loop there. I want to do another activity in this case. I just want to say to them, Hey, 'You guessed the right number'. So, I'll add an _Activity_ here or I can add this message box activity. Another way you can do this, as you can find the message box here and just add this on top and what we can do here is we can say, _‘You picked the right number! It was’_, and then you can do something like 5 and there we go pick the right number, you know, I guess we could do it was and then plus their Guess. Right. Cause they've guessed it correctly. So I can say guess.toString and that gives you a bit of an idea of how you can append sort of a variable to an output message there and that's the whole thing.
            <br>
            So that's the basic sequence. We'll see how much of this I can get on the screen all at once lower that there's the sequence, we say during the sequence we had to do a do-while loop inside this while loop, we asked the number, keep picking a number between 1 and 10. Yeah. If they guessed the number 5, we say, hey, you picked it.

            Right. And we use that variable to print that result out to them. Okay. I think that all looks good. Double check that you've _initialized that variable_ and so that looks good. Make sure it's declared down here, Guess and Guess. And when this is done, I can actually run the file and you can see it says what's the number and I'll say 1 and it comes back again. We'll say 6and it comes back again, and I'll say 3 and it comes back again and I say 5. And then finally it says ‘You picked the right number! It was 5’. I click OK. Then the application completes and there you go.<br><br>

            That's a nice introduction to a basic sequence project that uses workflow and there you go. That's the ins and outs of a do while loop. Now stick around. I'm actually going to enhance this little number guesser application with some conditional statements and a couple of other variables. So please follow along.
            I think you'll learn a lot about try-catch blocks, conditional statements, if then else's and all those other things, it'll make you a great UiPath programmer. Anyways, if you want to learn more head over to the server side.com where I’m the editor in chief, if you're interested in my personal antics, you can follow me on Twitter @CameronMcnz and subscribe on YouTube.

---

# UiPath Conditional and Iterative Logic

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/CGuAo2NM2Zk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
<br/>
{% include accordion.html %}
## UiPath Programming Challenge

<figure class="figure">
  <img src="https://aws1.discourse-cdn.com/uipath/original/3X/5/2/52068a4ad8a86d37406e09322cc499392c6c59da.jpeg" alt="UiPath If Activity Example" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">Learn iterative and conditional logic in UiPath by working through this Number Guesser example.</figcaption>
</figure>

#### Where to find out more about the UiPath While Loop activity?

If you'd like to go beyond this UiPath Conditional and Iterative logic challenge, visit the <a href="https://forum.uipath.com/t/uipath-iterative-and-conditional-logic-example/322968">UiPath Forum</a>.

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
