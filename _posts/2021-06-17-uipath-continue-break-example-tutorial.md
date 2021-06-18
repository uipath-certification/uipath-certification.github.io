---
layout: featured-post
author: Supreet Singh
title: "UiPath Break and Continue Example Tutorial"
blurb: "This quick example of how to use the Break and Continue UiPath activities within iterative for and while loops."
canonical: https://www.rpacertified.com/2021/06/17/uipath-continue-break-example-tutorial.html
keywords: uipath, uipath break, uipath continue,  uipath logic, uipath programming, uipath loop, uipath studio, rpa developer, rpa programming
accordion: 
  - title: Video Transcript
    content: <h3>Introduction</h3>In this tutorial, I'd like to show you how the UiPath **continue**, and **break** activities work. In a previous tutorial, I created a little application that went through the first 11 _Fibonacci numbers_. You can see I've got a **variable** called Fibonacci numbers here, it's got 11 different elements in the _array_, and I've got a for loop that loops through each of them.<br><br>
            
            <h3>Iterating through numbers to check if it's Odd or Even</h3>
            This _for-loop_ just prints out the value of each number through a log message. The number is _item.toString_ , but let's imagine that we only wanted to print out the odd numbers in Fibonacci sequence. How would we do that? Well, what we could do it is by using the **mod operator** and figuring out which index is in the array are odd and then, when we do encounter one, don't print out the log message, but instead go back to the start of the loop and work on the next element.
            In order to do that, we would use a continue element, a _continue activity_ in our application. So let me show you how this would be done. I'm going to add an if activity here. So, I'll drag the, if activity into the body of the loop, and I'm going to say, you know, if the current Fibonacci number is even, don't print it out, skip it, just go back to the start of the loop and find the next number in the array and so the condition is basically to see if the number, the item is even, or odd.
            Specifically, whether it's even. So, notice that, uh, the, for each here, the _argument type_ is set to **Object**. That's the default, of course the array actually has nothing but int’s in it. So here I'm going to actually specify that **int32** is the argument type for the, for each loop. But something interesting to note, they'll probably ask you a question too, about what the **default variable** is for a, for each loop on the _UiPath Associate Exam_. So be, be ready, be careful about that but now that we've said that this is actually going to be an int32 value. What I want to do is I want to check to see if that _item mod 2 equals 0_ because if that number divided by 2 has no remainder, that means it's an odd number.<br>
            
            <h3>Print out odd numbers</h3>
            And I said, we only want to print out. That means it's an even number and we only want to print out the odd numbers. So how do we do that? Well, if the number is even, what we want to do is just do a continue, so I'll type in continue, drag the **continue activity** over and now if I run this sequence in the output window, we should not see the number 2, 8 or 34.

            So let me click _**Ctrl+S**_, run the file. First, give me a message box telling me that there's 11 elements in the array. But when I look at the output, notice, 1, 1, 3, 5 21 35, 89. We didn't print out any of those even numbers. Okay. So that's the idea of the continue. If you hit a continue, it says don't break out of the loop. Don't stop the loop but stop any further execution of logic during this iteration and go back to the start of the loop activity, the iterative component, and then start again.<br>

            <h3>Using Break Activity</h3>
            Now let's say we didn't want to print out any numbers greater than 9, Right. We don't want any, whole numbers. So, in order to do that, what you can do is you can add a break and a break just breaks you out of the activity altogether. So, I'm going to add another _if statement- here, I'm not going to do a nested-if statement, I'm going to add another if statement entirely, and I'm going to say if the item is greater than 9. So, if the number is greater than 9, then I'm just going to break out of the loop.Okay and so, this means as soon as we hit something that's greater than 9, we're just going to stop execution entirely. We're not going to go to the top of loop and run another time. We're just going to exit execution completely and go to the, the end of the loop and in fact, I might even add a _message box_ activity right at the end of the loop, right at the end of the sequence that says we are done with the loop. Okay. And that'll just prove that yeah. We've actually exited out of the loop completely. So, I'm going to clear the output window. I'm going to run the file. And when I click run, well, we're going to get a message box saying that there's 11 elements. Then the message box will come up and say, we are done the loop.<br>

            Now, in the meantime, before it said we are done with the loop. If we actually went back to UiPath, we would notice that we actually got some output before that message box popped up and it printed out all of the odd Fibonacci numbers that were less than 10. Once it got to a number of greater than 10, it just broke out of the loop and said, we are done with the loop and there you go. That is the idea behind working with UiPath, continue and UiPath break statements.

---

# UiPath Break and Continue Example

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/Bpiu6c5uY7E" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
<br/>
{% include accordion.html %}

## UiPath Continue and Break Tutorial

<figure class="figure">
  <img src="https://files.readme.io/36d79aa-image_103.png" alt="UiPath Break and Continue Example" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">This UiPath break and continue example shows how to control iterative logic in RPA applications.</figcaption>
</figure>

### Test Your Knowledge


1. Which activity is used to skip the rest of the code inside a loop, for the current iteration only?
- [ ] Break activity
- [x] Continue activity

2. Which of the following activity is not used to alter the flow of a iteration loop?
- [ ] Break activity
- [ ] Continue activity 
- [x] For each activity

3. Which of the following activity should be used to terminate the program flow from the current loop?
- [x] Break activity
- [ ] Continue activity 
- [ ] For each activity

### References that you might want to have a look at :
*  <a href="https://www.rpacertified.com/2020/09/09/flow-exit-loop.html"> How can you exit from a For Each activity in UiPath Studio? </a>
*  <a href="https://www.rpacertified.com/2020/09/09/debug-break-point-left-production.html"> UiPath Break Activity Explained </a>

#### Where to find out more about the UiPath Continue and Break activities?

If you'd like to go beyond this UiPath Break and Continue Example, visit the <a href="https://forum.uipath.com/t/uipath-break-and-continue-example/323586">UiPath Forum</a>.

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
