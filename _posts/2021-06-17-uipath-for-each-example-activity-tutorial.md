---
layout: featured-post
author: Kivens
title: "UiPath For Each Loop Example"
blurb: "This quick example of how to use the iterative UiPath For Each Loop activity."
canonical: https://www.rpacertified.com/2021/06/17/uipath-for-each-example-activity-tutorial.html
keywords: uipath, uipath for, for each activity, uipath logic, uipath programming, uipath loop, uipath studio, rpa developer, rpa programming
---

# UiPath For Each Example

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/E0MB7t7QoDg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
<br/>

## UiPath For Each Loop Tutorial

## UiPath For Each Loop Example
Hi, I've got something special for you here. That is a little tutorial on how to use the UiPath For Each activity and to start off this tutorial, I'm going to create a new project and I call it the UiPathForEachActivityExample. And then once the project is initialized, I’m going to open the main workflow and I'm going to drag a For Each activity onto the sequence.

If you type for under activities, you get a lot of stuff. You'll get Read Cell formulas, for each row, Format value, Parallel for each, Wait for download. So for isn't quite good enough. You might want to type in *for each*. Now, even with for each you get *for each row*. That's supposed to be used for UI path, Excel automation activities.

The one we want to work with is just the workflow *for each iterative loop statement*. So I'm going to drag that onto the workflow. And in this for each example, I'm just going to work through an array of ints, the Fibonacci numbers. My Italian isn't that great, but my math isn't too bad. So I'm going to start off by creating a brand new variable and I'll just call it *FibonacciNumbers*.

It's going to be an array. I actually asked my boss for a raise the other day. And he said, “no arrays, just use another collection class”, but I'm going to use arrays here. The generic T has to be specified and so going to have an array of ints. And this is just going to be the Fibonacci sequence of numbers. So {1, 1, 2, 3, 5, 21, 34, 35, 89}. I think those are correct. Certainly, should be good enough for this little example here, but yeah, we do now have this array of numbers called FibonacciNumbers displayed. 

By the way, for the UI Path Associate certification exam, they want you to be familiar with various API calls. One of which is to know how to get the number of elements in an array. So starting off, I'm going to start off by putting a message box at the top of the sequence. That'll just say *“The number of elements in the array”* + FibonacciNumbers.Length.ToString. Do remember the ToString and then it'll actually print out the number of elements in the array.

So that's just something worth noting *.Length*. There's a property of an array. It tells you how many elements are in the array. You'll need to know that if you want to get UI Path Associate certified. Okay. But we want to loop through this array. So here's our For Each activity says for each item in what? Well in the array, that's called FibonacciNumbers. So I put the name of the array in there and what do we want to do? Well, all I'm going to do is just print out each one of them, right? I want to for each loop and print out each item in this FibonacciNumbers array. And I'm going to do that with. I think I'll do it with a log message.

I haven't used a log message yet in any of these tutorials, never saw a log message has a number of different levels. It could be log level, trace, log global info, log level, warn, log level, error, log level fatal. Uh, if you're just printing out some information *info* is the one to use and I'm just going to print out *“The number is” + FibonacciNumbers*.

Oh, it's not FibonacciNumbers. That's the whole array. As we're printing stuff out, we're going through the array one element at a time and each element is named *item*. So to print out the item, it's actually just, *“The number is” + item*. That'll be the element in the array. Now notice if I just do that, it'll actually bark back at me a little bit.

It says, “Hey, you know, that's, uh, an int32 value and we were trying to print out text here, strings”. So I actually have to fix this and go with *“The number is” + item.ToString*. Right. But now it actually all works. Let's say you concatenate and int32 with a string in UI Path. Now it all seems to compile and compiling doesn't mean it works, but it does look like it's compiling.

I'm actually going to clear the output window because the UI path log message prints to the output window. It's going to clear it just so it's nice and clean. Then I'm going to click Run file. Now when it starts off, I should get a message box. No, it should be a message box that tells me how many elements there are in the array.

So it says there are 11 and gosh, darn it. I think that's correct. And then it looks like it doesn't do anything, but in fact it did do something. I actually see here in the output window, expand that a little bit. You can actually see that, it's actually printed out each of the values inside of our array.

And so, yeah, that's the UI Path Log activity working inside the UI Path For Each activity, to loop through an array, a collection class and do some work on each of its values. No, again, we just print it out, but you could do multiplication. You could save it to an Excel spreadsheet. You could write it to a text file.

The world's your oyster, once you have access to the value. And that is how the UI Path For Each activity works.

<figure class="figure">
  <img src="https://files.readme.io/bddc819-image_101.png" alt="UiPath For Each Example Tutorial" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">This UiPath for each loop example shows you an alternate to while loops to implement iterative logic in your RPA applications.</figcaption>
</figure>

## Sample Questions

#### Sample Question #1
Question: What is the difference between For Each Activity and For Each Row in Data Table

#### Answer

For Each Activity is best used for iterating through an array and list. For Each Row is for Data Table which may be extracted from an Excel Sheet.

#### Sample Question #2
Question: What method is used to get the size of the array?

- [ ] &nbsp;  Size
- [ ] &nbsp;  ArraySize
- [x] &nbsp;  Length
- [ ] &nbsp;  Count


#### Answer

Options C is correct. 

To find out about the size of an array or collection, you can use the Length method.
Additional note, use ToString if you want to append/prepend an int value into the Message Box/Logging Activity. 





#### Where to find out more about the UiPath For Each Loop activity?

If you'd like to go beyond this UiPath For Each Activity Example, visit the <a href="https://forum.uipath.com/t/uipath-for-each-loop-example/323582">UiPath Forum</a>.

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
