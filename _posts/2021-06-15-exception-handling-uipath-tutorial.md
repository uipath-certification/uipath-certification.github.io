---
layout: featured-post
author: Jenny
title: "UiPath Exception Handling Tutorial"
blurb: "Here's a quick example of how to handle exceptions in UiPath Studio and recover when error conditions occur."
canonical: https://www.rpacertified.com/2021/06/15/exception-handling-uipath-tutorial.html
keywords: uipath, uipath while, while activity, uipath logic, uipath programming, uipath loop, uipath studio, rpa developer, rpa programming
---

# Exceptions in UiPath Studio Tutorial

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/Yy-IEHLIjzo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
<br/>

## UiPath Exception Handling Explained

## UiPath Exception Handling
Hey, Cameron Mackenzie here at **@Cameronmcnz** on Twitter. And I wanted to talk to you about how you do some Exception Handling in UI Path. Namely, how you use the Try-catch Finally block, send some messages to the user maybe if an error happens and also how to do a little bit of logging if you want to send a message into your log files when an exception happens.

In my previous example, I built this number guesser application that only took about five minutes to build it in that tutorial. So check that out if you want to start this from scratch, but as you can see, basically it asks me to pick a number and if I get the number, right, it says, * “Hey, you pick the number right” *. But if I play this and I don't provide any input at all, all of a sudden I get an exception that says, *Hey system, not supported error. Something really, really went wrong *. 

### UiPath Try Catch Block
So, one way to avoid that is to put *Try catch* blocks into your applications. So, what I'm going to do here is I'm going to go into a system. I believe it is under statements and there, you can find the *Try catch* block element there, and I'm actually going to put it right to the top. So, I'm going to surround everything in a try-catch block. So, try to do something, catch any exceptions, and then finally close everything up.

And what I'm going to do is I'm going to take my whole activity, and I'm going to drag that whole activity right into the try block there. And I'm also going to drag that message in as well. And there we go, I'm going to take a better look at that. Maybe go to a hundred percent, but you can see my sequence now has this try-catch block that surrounds everything.

Everything happens within this try-catch block. And if there's an error, I can catch it and I can exit the program eloquently. Now, one thing I should say, user input shouldn't throw an exception. So I probably should be doing user input validation and that's a better and best practice, but it’s a good way to just demonstrate how exceptions work.

And so what'd you do is you do all of your work and then you try and catch an exception. In this case, I've got the *System Exception* that I need to worry about. She can catch multiple ones, Generic exception, System exception, No Reference exception. I'm going to catch the System Exception. And when you catch it, you got to do something.

And so what am I going to do? Well, I guess I could always throw up a message box and say, * “Hey, you didn't supply a number” * like it was going to get mad at the person.
You can have multiple catches, so you can add a new catch block here. Maybe you just wanted to catch the most generic *System Exception* here. And I don't know what you want to do here. One thing people like to do is they like to *log* and you can also throw a log message in there and set the log level to warn and say * “Hey, we need input validation!” *. And that's really the solution to this problem. So there's, this problem is not throwing an exception. It's dealing with input validation, so exceptions aren't thrown, but again, we're just kind of demonstrating thing here. 

### UiPath Finally Block
And then there's your *finally* block. And the finally block *always runs*. And so, no matter what happens, the finally block will run. And I'm going to just say here * “We enjoyed having you around” *, that will actually run regardless of whether an exception is thrown or not. So that’s the idea of the finally block. 
And so there you go. Now we've got a nice tight application where we put everything in a try-catch block. Hopefully the application runs as expected, but if there is an exception, we will get an error message.

So let me try and run this application. Now, as I said, when I just type numbers in, normally everything seems to look good, but if I don't type anything in, notice it now says, * “Hey, you didn't supply a number” *. That is the result of the catch block being triggered. And then when we're done on here, it's going to go down to this finally block. And now it says *“ We enjoyed having you around”*. 

And now one thing you'll notice that even if there isn't an exception. So, if I play this and I type in the number 5, that means that I'll win. So, you pick the right number and the finally block runs again, *no matter what*. So that finally block always runs, whether there is an exception or not.

One of the things you often do in that closed resources, you've got a database connection or a connection to a file. And you want to make sure that that connection is closed, regardless of whether there's an exception or not usually a code that inside of the finally. You don't really make the finally part of your application flow control, but we did there and it worked.

There you go. That's how you do basic exception handling in UI Path. Now, just want to let you know, this is kind of the second in a multi-part set of tutorials. I'm going to be taking this number guesser and adding conditional statements and loops and enhancing it in a variety of different ways. So, follow on with the other tutorials, if you really want to learn how to do UI Path programming properly. 

Also, if you're interested in more enterprise software development, tutorials and articles, head over to theserverside.com, I’m the editor in chief over there, you also follow my personal antics on Twitter, **@Cameronmcnz** and subscribe on YouTube.


<figure class="figure">
  <img src="https://aws1.discourse-cdn.com/uipath/original/3X/5/2/52068a4ad8a86d37406e09322cc499392c6c59da.jpeg" alt="UiPath If Activity Example" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">This UiPath while loop example shows you how to implement iterative logic in your RPA applications.</figcaption>
</figure>

## Sample Questions

#### Sample Question #1
Question: What statement best describes Finally block?

- [ ] &nbsp;  Executes only if there’s no exception
- [ ] &nbsp;  Executes only if there’s an exception
- [x] &nbsp;  Executes regardless if there’s an exception or none


#### Answer

Option C is correct. 

The Finally block executes even if there’s an exception met or none. 

#### Sample Question #2
Question: What kind of exception can be set in the Catch block?

- [x] &nbsp;  System Exception
- [x] &nbsp;  Argument Exception
- [x] &nbsp;  Null Reference Exception
- [x] &nbsp;  Invalid Operation Exception


#### Answer

All options are true. 

In fact, there are many more exceptions that you can catch, just click the Browse For Types and there you will be able to explore many more kinds of Exception. Note: in the development phase, you will meet various kinds of Exception, it is best to take note of the exception and search it into this section. 


#### Where to find out more about the UiPath Exceptions?

If you'd like to go beyond this UiPath Exceptions Example, visit the <a href="https://forum.uipath.com/t/exception-handling-in-uipath-studio-tutorial/322970">UiPath Forum</a>.

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
