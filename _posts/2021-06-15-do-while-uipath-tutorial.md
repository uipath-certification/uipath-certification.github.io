---
layout: featured-post
author: Supreet Singh
title: "Iterative UiPath Do While Loop Example"
blurb: "This simple UiPath tutorial on the Do While Activiy will show you how to implement iterative logic in your RPA application."
canonical: https://www.rpacertified.com/2021/06/15/do-while-uipath-tutorial.html
keywords: uipath, uipath do while, do while activity, uipath do logic, uipath programming, uipath do loop, uipath studio, rpa developer, rpa programming
accordion: 
  - title: Video Transcript
    content: <h3>Introduction</h3>A little while ago. I did an example of a **while loop** in this tutorial. I'd like to show you how the **do-while loop** works in UiPath. So, to do that, I'm going to create a brand _new process_. I'm going to call it the UiPath Do While tutorial, click _Create_ here and when the project opens, I'm going to open up the _main workflow_ and I'm just going to drag a do while loop onto the workflow, just like that. Right off the bat, it gives me a little bit of an error message. You might see the red exclamation mark. Now, if you see a red exclamation mark, get your eyes checked because it's not a red exclamation mark. It's a white exclamation mark on a red background. But anyways, that's just a minor point, but the reason that it was barking at me, is it saying, hey, you know, When you have a do while loop, they're supposed to be some condition that if it's true, the loop will keep going.<br>

            <h3>Get Input from user and initialize condition</h3>

            If it's false, the loop will exit and so I don't have a condition like that. Now I'm going to grab user input in this example. So, what I'm going to do is I'm actually going to create a _new variable_ and I'll just call it user input to type **String** and of _scope sequence_ there and you can see user input and the condition, which will allow the loop to continue is just whether the user input is equal to Yes and that's a yes, to the question. Do you want to keep looping? and so the idea of a do while loop is that first of all, the body of the while loop always executes. That's not true with the while loop. If the condition of a while loop is false. The while loop body will never ever get entered. With a do-while loop, you always enter the body at least once. It's one of the key differences between a while loop and a do while loop. Now we do have this condition to exit the loop, which is if the user input is not equal to Yes. Exit the loop. If it is yes, keep looping and we have to have some way to manipulate or change that value in the loop.
            
            <h3>Specify terminating condition for the loop</h3>

            Otherwise, it just becomes an _infinite loop_ and it'll just consume all of our clock cycles on the CPU. So, to do that, I'm just going to drag a user input activity here. The dialog title would be UiPath Do While Loop tutorial, and the label will be, ‘Do you want to keep looping?’. And the input type. I'll just make it a couple of radio buttons also say yes or no and of course, depending on whether the user, your selection yes or no, the value of that choice in a string can be set to the variable user input. So, I'll just set user input there as the value. You can do that over in the results tab as well and now when this runs that value yes or no, will update that user input value.<br>

            If it's, yes, we'll keep looping. If it's not, we'll break out. You know what? I might even add a little message box at the top that just says, ‘We are in the loop’. It's always good to be in the loop because you don't want to be out of the loop ever. I was going to click control, asked to save that it's going to go up to the top there, that you can see the beginning of the sequence.You can see the body of the loop, we are in the loop. We get the input dialogue. ‘Do we continue? Yes or no’ and then if that condition is true, we keep looping. If not, we break out of the loop. Oh, the other thing is they need that user input variable declared. So, I had to run the file. So just click run file.

            It says we are in the loop, right? Because you always entered the loop at least once with a do while loop, as opposed to a while loop where if the condition is false, it will never get entered and now we see these radio bunch. You want to keep looping? Of course, I want to keep looping. This is fun. I love UiPath do while loops. I could use these UiPath do while loops all day long. Okay, I'm tired of it. Now click No and there you go. The application terminates because the condition is now false That's how the UiPath do while activity works.

---

# UiPath Do While Tutorial

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/qxwdZResiWk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
<br/>

{% include accordion.html %}

## UiPath Do While Loop Explained

<figure class="figure">
  <img src="https://aws1.discourse-cdn.com/uipath/original/3X/5/2/52068a4ad8a86d37406e09322cc499392c6c59da.jpeg" alt="UiPath If Activity Example" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">Unlike the while activity, the UiPath do while loop is always entered at least once.</figcaption>
</figure>

### Test Your Knowledge


1. Which of the following are conditional programming activities in UiPath?
- [x] While
- [x] If
- [x] For Each
- [x] Switch


2. In which of the following loops, the body is executed atleast once?
- [ ] While loop
- [x] Do While loop
- [ ] For Each loop

### References that you might want to have a look at :
*  <a href="https://www.rpacertified.com/2021/06/15/uipath-while-loop-example.html"> UiPath While Loop Example </a>
*  <a href="https://www.rpacertified.com/2020/09/09/flow-Activity-to-loop-through-a-collection.html"> Iterate over a collection in UiPath</a>

#### Learn more about the UiPath Do While Loop activity?

If you'd like more UiPath do while examples, visit the <a href="https://forum.uipath.com/t/uipath-while-loop-example/322963">UiPath Forum</a>.

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
