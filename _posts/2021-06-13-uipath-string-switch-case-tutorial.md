---
layout: featured-post
author: Jenny
title: "How to use a String in the UiPath Switch Activity Tutorial"
blurb: "This quick example tutorial will show you how to use a String in a Switch expression and configure case logic based on a String based expression."
canonical: https://www.rpacertified.com/2021/06/13/uipath-string-switch-case-tutorial.html
keywords: uipath string, string switch, ipath switch, switch activity, uipath logic, uipath programming, uipath conditional, uipath studio, rpa developer, rpa programming
accordion: 
  - title: Video Transcript
    content: I'd like to give you a quick example of how to use a UiPath switch activity with a String. I did this previous UiPath switch tutorial. And the basic idea here was you had a variable named players, as you can see, it's an int value and I've assigned it the value of 11. And then you have a switch statement that tells you what sport you could build a team for with that number of players. So as you can see, I've specified that I've got 11 players. So all of my friends in India are going to be happy that ‘We're going to be playing cricket!’. If you have 15 -you're hurling, 6- It's hockey, 2 - It's ping pong. You get the idea. Now the question that a lot of people had that saw this UiPath switch tutorial was, How do you go from using an int value to a string in a UiPath switch? Well, it's not too difficult. There is a trick to it. So if you take a look at this switch activity here, in the right hand side, there is this type argument property of the UiPath switch, and you can specify String, Int32, Boolean, Object, DataTable.

            You can even browse for types. So to change the type, the expression of the UiPath switch statement. All you have to do is change the type argument. Now I'll change this to String. You'll notice a couple of things happen. All of my cases are going to get wiped out, but I'm not going to get too upset about that and I'll also have an error because of course the players' property is int32, not a string. But notice I changed the tight argument to string and now this switch statement, this UiPath switch activity, example, it wants a String. So I'll go down here to my players variable and I can just change the players variable to string.
            So now the players variable is set to String. That's going to cause one other problem and the other problem is the default value is the integer 11 and of course you can set an int32 value to 11 because int32 handles whole numbers. But as we know everywhere in UiPath that you reference a string, you have to put that string in double quotes.

            So now I have to change this 11 to an 11 in double quotes (“11”) that makes it a string and there you go. Now my code, at least compiles. I remember if anybody ever tells you that you can reference a string in UiPath without putting it in double quotes, they are a liar. Okay. So I've lost all of my switch cases because I changed from, int to string, but I'm not too worried about that.
            Let's handle the case of 11. So let's say we have, it's a string. Remember strings always have to be in double quotes. Let's say we have 11 players. Okay. Well then that's enough for a cricket match. So it looks like we're going to say ‘We're going to India to play Cricket!!!’ . Okay, see you in Bangalore. So there you go. Now we're playing and you can see the variable is set to 11. The case is 11. The switch statement is on. I'm going to write, do run file and as you can see when it runs, it says ‘No exact match. Why don't you all go surfing?’ and in fact, that's the default case, right? The default is no exact match. Why don't you go all surfing?

            It didn't match on 11. So the default value is 11. The case is 11. And for 11 it says it should say, ‘We're going to go play cricket.’ Notice that in the UiPath, switch the case when it's a string does not go in double quotes. You actually leave the double quotes off. So again, if anybody ever tells you that you always have to reference a string within double quotes, they're definitely a liar.

            Okay, but now I've taken those double quotes off case 11. That should make you very uncomfortable. Well, if you've been working with UiPath, because almost every other time, you have to put a string inside, double quotes, but now if you run the file, boom, ‘We're going to India to play Cricket!!!’  and so that was all I had to do to get the UiPath, switch activity, tutorial, example.

            To work. Um, but there you go. That's how you use a string inside of a switch. You just have to set the argument type of the expression, expression to string, make sure that the variable that you're using to switch on is a string for the cases. Remember you don't use the double quotes, you just leave the value into the case directly without them.

---

# UiPath String and Switch Tutorial

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/HswobQMeyHU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
<br/>

## String Expressions in UiPath Switch Cases

<figure class="figure">
  <img src="https://itknowledgeexchange.techtarget.com/coffee-talk/files/2021/06/uipath-switch-example-conditional-activity.jpg" alt="UiPath Switch Activity Example" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">The UiPath Switch allows String data to be set as the case expression in the properties panel.</figcaption>
</figure>

#### Where to find out more about Strings in UiPath switch statements?

Want to learn more about Strings and the UiPath switch activity, visit the <a href="https://docs.uipath.com/studio/docs/the-switch-activity">official documentation.</a>.

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
