---
layout: featured-post
author: Jenny
title: "UiPath If Then Tutorial"
blurb: "This quick UiPath If Then Tutorial will show you how to use nested if then else statements in your robotic automation. This UiPath If Then Else Tutorial uses Studio version 21.4"
canonical: https://www.rpacertified.com/2021/06/12/uipath-if-else-tutorial.html
keywords: uipath, uipath if then, if then activity, uipath logic, uipath programming, uipath conditional, uipath studio, rpa developer, rpa programming
accordion: 
  - title: Video Transcript
    content: <h3>Introduction</h3>Hey, I'm Cameron Mackenzie. I'm the editor in chief at theserverside.com and you can follow me on Twitter **@Cameronmcnz** and I want to talk to you about UiPath programming and specifically how the **if-then else activity** works. So, I did a tutorial earlier on the number guesser, take a look at that.
            <br>

            <h3>Using If-else statement in UiPath</h3>

            I did that purely with a **do-while** loop. In this example, I'm going to achieve the same ends, but I'm going to deal with an if-then-else statement. _Nesting_, some of those, if conditions inside of each other. So, if you want to learn the basics of conditional programming and UiPath, you've come to the right place.
            Now I'm going to implement the number guesser with an _if-then nested_, if then statements are going to create a New Project called _**IfthenNestNumberguesser**_. That's a long enough name, a lot of the workspace to come up and as soon as it does open up, I'll open up the _main workflow_ window. I think, I am going to start off by adding in a **do-while** loop. So, that means going down into workflow, opening up the control element and adding a do-while loop here now actually want an infinite loop, but that sounds a little strange. But what I want to do is I want to keep asking the user, Hey, What is your pick? What number did you pick? What number did you pick?
            <br><br>

            <h3>Break activity to break out of the loop</h3>

            I just want that to keep going on and on and on until they pick the right number and when they pick the right number, I'm going to break out of the loop and so this actually creates an infinite loop, which is kind of interesting and inside of this loop, I want to ask the user for some input. So that means going into _system dialogue-> Input dialogue_ and dragging input dialogue onto the body here and I'm going to have a title. This will be in the title bar of the dialog box and we'll say,<br> ‘Pick a number between 1 and 10.’ <br> and we'll say in the dialog box, ‘What is your number?’. Now, remember this has to all go within double quotes. If you don't have double quotes here, you're going to have a problem. So just, just make sure that's in _double quotes_ (""), only variables go without the quotes.
            <br>

            <h3>Storing the guessed number in a variable</h3>

            Speaking of **variables**, when somebody types in a number, we will actually want to store that as a variable. So that means I got to come down to this variables element here. I want to store what the user's guess is, and it should be a number it's not going to make **int32** and I going to give _scope for the entire sequence_.
            <br>

            <h3>Assign the correct scope to the variable</h3>

            If you don't give scope for this entire sequence, that variable can only be used inside of the section in which it's declared. If you give it scope for the sequence, it can be used anywhere inside of the big sequence block. Now we've got that variable guess declared when somebody types something into the input box.
            I want that value, that number, to be assigned to guess. So, I put that over here under output. What happens when somebody types something into that field? Well, that gets pushed out here into that variable. So now when somebody types in a number that guess field is going to be initialized.<br> <br>

            <h3>Assign the correct scope to the variable</h3>
            So, what do we want to do after that? Well, after that, I want to check to see if the number that they typed in was too low and so I drag an if block over, I'm not going to bring it from recent there. I'll let you see where you can find it. It goes under, I always forget where it goes here. It goes under _system activities-> statements_, and then there's that if statement there and when I drag it on, you'll notice that it's actually an if-then that's all say if what's the condition, the guess is less than 5 (guess<5).
           
            <h3>Evaluating the false case scenarios</h3>
            Then what do we want to do in that case? We'll send them a message box that says guess higher and then what do we do if it's not less than 5, that means it's greater than 5. Then I guess we should say guess lower. The only problem is that possibility exists that they actually picked 5, which is the correct number. So, we've actually need to nest our if-then-else statements and that means throwing an if statement over here to the right, and then in this, if statement will say, if the guess is greater than 5 and we'll tell them to guess lower and then what happens if their number is not less than 5, not greater than 5, if it actually is 5. Well, we can now put that into this _else block_ here and that would be a message box saying, ‘You guessed it! It was  …’ and then what the guess was because the guess is right. If we actually get to this point, that means that guess 5 guess is holding the value 5. So that it should print up- **‘You guessed it! It was 5’**. Now we do have this issue about the infinite loop here and unfortunately, we don't have infinite resources.
            <br>
            
            <h3>Evaluating the true case scenarios</h3>
            So when somebody guesses the right answer, we actually want to break out of the loop and so how do you do that? All I have to do is go down to workflow control and you'll find this **break** and if you drag the break over here, you notice it now says, okay, when somebody guesses it, right, we'll say, Hey, you guessed it right. The number was what the guess was and then the break and that _break forces you to break out of the current loop that you're inside of_. So that will kind of override this true because this condition won't ever get executed. Once that break happens, we break out of the loop and then. Execution actually would follow along if there was anything below after the loop. But actually I can even improve that out by just putting a message box here after the condition and saying and so the message boxes, ‘Thanks for Playing!’. So that'll show you that we break out of the loop, but it's not a way of terminating the application. It's not like an exception was thrown or something like that. Now, what did I do wrong now on that guess? I got to say **guess.ToString**. Now I always forget to do that.
            <br>
            That's an **int** and they don't like, uh, you know, connecting **int’s and strings** if you're doing _strong typing_. So it was one little thing that I forgot there, but otherwise I think this all looks really handsome. Yeah. I don't know if that makes things any better or any worse, but that's what it looks like all put together and let's give this a run.
            So run the application. What's your number type into guess higher what's your number seven guess lower. What's your number? I'll type in 5. You guessed it. It was 5 that should trigger the break and then after the break, after the loop, it says, thanks for playing!!! and there you go. That's how you can do some interesting flow control with nested loops.
            <br><br>
            So there you go. Those are the ins and outs of **nested if-then** statements, if you enjoyed this tutorial, head over to the server side.com, where I'm the editor in chief, you can find lots of great articles and tutorials about enterprise software development over there. If you want to learn more about me, you can follow my antics on Twitter @Cameronmcnz and subscribe on YouTube.

---

# UiPath If Then Tutorial

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/vUeRlhzz0wg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
<br/>

## UiPath If Then Else Activity Explained
{% include accordion.html %}
<figure class="figure">
  <img src="https://files.readme.io/cf5bc99-image_93.png" alt="UiPath If Activity Example" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">This UiPath if then tutorial demonstrates how conditional logic is implemented in UiPath Studio.</figcaption>
</figure>

#### Where to find out more about UiPath If Then statements?

If you'd like to go beyond this UiPath If Then activity tutorial, visit the <a href="https://forum.uipath.com/t/uipath-if-then-activity-example-tutorial/322284">UiPath Forum</a>.

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
