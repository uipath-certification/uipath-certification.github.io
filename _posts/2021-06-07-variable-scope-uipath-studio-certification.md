---
layout: featured-post
author: Jenny
title: "Variable Scope in UiPath Studio Tutorial"
blurb: "Wondering how variable scope works in Uipath Studio? This UiPath Scope tutorials demonstrates where variables are in scope and out."
canonical: https://www.rpacertified.com/2021/06/07/variable-scope-uipath-studio-certification.html
keywords: uipath, variables, variable scope, variable listerine, uipath studio, rpa developer, rpa programming
accordion: 
  - title: Test your knowledge
    content: So, we just talked about variables and declaring variables, but another part of the objective in the UiPath Associate Certification exam is the fact that you need to not only know the basic variable types, but you also need to understand how variables are scoped in UiPath and it is actually, fairly straight forward.

Variables have scope within the process in which they are defined and within the boundaries of the object that defines them and any sub-objects. Within the container that defines them or any sub-containers. And that container could be something like a sequence could be, uh, an if block could be an exception block.

But any kind of block element inside of UiPath. Let us take a look at how that gets defined. So, we are talking about scope here. I have actually always been a fan of Listerine. So, I am going to actually create a new application here. I am going to call it Listerine. I am going to spell it correctly. Create this project.

And then I got to create three sequences, which are going to represent the different blocks of scope in the application. So, open the Main Workflow. From the main workflow, I am going to click on the Activities tab and I am going to look for a sequence. I am going to drag it right onto the workflow there and I had to name this sequence 'Ancestor'.
So, there is my ancestor. You know what? I am going to go down here into the Variables tab and I am going to create a new variable and I'm going to call this variable, 'Annie'. It will be a String and its default value will be - 'My name is Annie!'. There we go, we have got that. You know what? I could even throw in a little message box on top of that and print out that variable- 'Annie'.
Everything looks good. You can actually see down there in the scope. It says the scope of this variable is the ancestor block. And if I run this, everything runs swimmingly. You can see that all of a sudden it now says, 'My name is Annie!'. So, okay. Fantastic! Things are working well now let us add another sequence.

So, I am going to go down to this Activities tab, take a look at the sequences. Drag one in under the message box. And I am going to name this the 'Parent' and I think I am going to throw a message box in here and I'm going to create a variable in the message box. Now here is another way to create a variable.

I use the Variables tab, but if you click - 'Ctrl and K'. Remember that that is a certification question right there. UiPath associate certification question- 

What is the shortcut escape sequence to create a variable in UiPath Studio?
it is Ctrl+K. 

Okay. But I will set the variable here and I am going to set this one. What? we are in the parent. So, I will call this 'Peter'. That now creates a new variable- 'Peter'. Now you will notice that down here, it has set the variable name. It has also made the variable type- 'Object'. I am not too happy with that, so I am going to change it to 'String', but you will also see that the scope is 'Parent' and so, this variable is visible inside the 'Parent'. It actually wouldn't be visible outside the 'Parent'. So, if I put this message box right after 'Annie', I would end up with an error. But since it is inside the 'Parent' and its scope is 'Parent'. Life is good. So, let us just run this. Let us see how it goes. It should print out. Oh, my name is Annie, but you know what? I did not assign anything to that message box. So, it works well, but it works exactly as it was programmed. They actually want it to print out 'My name is Peter.' So, I'll go into that- little section there. There we go. My name is Annie from the 'Ancestor' and then my name is Peter from the 'Parent' and you can probably see what's coming next here. Um, we are actually going to add another sequence and that's going to be inside 'Parent' and we'll call it 'Child One.' Then it looks like it is time for another message box in here. We will drop 'Child One' in here, and 'Ctrl+K' again, we'll have a variable name- 'Charlie', change the data type to 'String', have its name, 'My name is Charlie!'. Now, it looks like everything is working well right here, I can click debug file and you probably can guess what is going to happen here.

'My name is Annie!' from the 'Ancestor', 'Peter', from the 'Parent', 'Charlie', from the 'Child', that all looks great. And you know what? I am going to add one more just to really shake things up. I am going to add one more sequence and this sequence is going to be, it is going to be right after the message box, and it would be called -'Child Zero'. Right? We are computer programmers here. So, we are doing, zero-based counting and I'll have a message box and the message box (Ctrl+K) I'll create a variable called 'Chantelle' and there we go. That variable is created. I need to set that to be-a String and we will say, 'My name is Chantelle!'.

Are we done here? I think we are happy with the way this is working. Do the little run instead of debug file. You can always choose different ones there,' My name is Annie!', 'My name is Peter',' My name is Chantelle!' and 'My name is Charlie!'. So, this is all working well. Now, here is the thing that 'Annie', that variable is declared in the 'Ancestor' and that variable is actually visible inside the 'Parent' and the 'Child' as well.

Any block inside of that block- 'Annie' is available. So, I can actually move this into the 'Parent' block. I do not have any compiler errors and I can move it into 'Child Zero'. I do not have any compiler errors and I can move it into 'Child One' and they do not have any compiler errors. Okay. So that all looks good. Looks interesting to me and so I have not changed the scope of 'Annie'. Notice, 'Annie' still has a scope of 'Ancestor', but it is visible inside of every single block, it is visible inside the 'Ancestor' block, but also any sub-block as well. So 'Parent' and 'Child'. Now contrast that with 'Peter'. 'Peter', declared in the 'Parent' has scope in the 'Parent'.

I can move that into 'Child Zero'. That works cause 'Child Zero' was inside the 'Parent'. But watch this, if I move that to 'Ancestor', all of a sudden, I've got an error and I've got an error because 'Peter' has scope only within the 'Parent' block. You can actually see it there. There's 'Peter'. When I highlight the 'Parent' block, you can see it declared a scope for 'Parent'.

But if I actually highlight the 'Ancestor' block, you'll actually see, it's not even declared. Right. Hey, where did it go? Well, it is not declared in that block and that is what this error message is telling me. So, hey, Peter is not declared here. It is declared in the 'Parent' block. So, I could always change this.

I could go down here, and I could say, hey, okay, We'll, give Peter- 'Ancestor' scope. And as soon as I do that, the error goes away because now 'Peter' is visible inside the 'Ancestor' and 'Parent' and 'Child' because they are all nested inside of one another, but I do not want to do that. I want to keep, uh, the P as a P. So, I will move that down to the parent and then tighten this up again and say, hey, that has got 'Parent' scope. Um, similarly, we have got the 'Child' scope, so we have got 'Chantelle' and 'Charlie', uh, 'Chantelle' has scope for 'Child Zero'. So, you see that 'Charlie' has scoped for 'Child One', and you can see that there as well.

You also noticed that visible inside 'Child One' is also the 'Parent' and 'Ancestor'. So you can see that in the Variables tab, there, it’s actually keeping tabs on what is visible. Now, one question might be- Would 'Charlie' be visible in 'Child Zero'? 
Well, you can have a variable declared in a block and it is visible in any sub-block or sub-component.

But 'Child Zero' and 'Child One', they are sort of at the same level. They are not sub-components of each other. They are at that same spot, that same level in the hierarchy, and definitely, if an object is declared in 'Child Zero', it's not visible in 'Child One'. So, if I try and move 'Chantelle' down from 'Child Zero' to 'Child One', You get an error.

And similarly, if I try and put 'Charlie' into 'Child Zero', I will get an error there as well. Um, so the variable has to be declared in a particular block if it is, it's then visible in that block, and then it's visible in any sub-block of that block as well. That is the basic rule for scoping inside of UiPath.
Now, let me see if I can get this to work again. I will move that over there. Move this over here. And it looks like all our problems are gone and I can even run this file and say, Go one, two, three. 'My name is Peter', 'My name is Chantelle!', 'My name is Charlie!', 'My name is Annie!' and there you go and that's because 'Annie' was moved down to the bottom there, I think taking it all back would even look like that.

That gives you an idea of the way that we use the scope in UiPath Studio. And that is what you need to understand for the UiPath Associate exam. Now it is also worth noting that all of the different activities will create their own block. So, if you were to go in and create your own- 'if-block'.
I typed it there - 'if-block'. So, if you were to add an 'if-block' in here, that 'if-block' would have its own scoping rules, so any variable declared inside 'Parent would be visible inside the 'if-block', but any variable declared inside the 'if-block' would only be visible there and so What's the best practice? and how do you manage these variables?

The key is - 'never declare a variable for a greater scope than is necessary'. So, you could make your life really easy by just declaring everything at the 'Ancestor' level, in this example. But that now makes that variable visible everywhere. Somebody might accidentally adjust the value inadvertently in one of the blocks. If it is visible and you can get name conflicts, there is a variety of different problems that happen when you give too much scope. So, you want to encapsulate your code as much as possible, encapsulate your variables, protect them and that means, declaring them as soon as they are needed, but not before and not giving them scope, not giving them visibility into other blocks that do not need them.
So those are the general best practices for managing. One of the other things to mention, a variable declared in one process, cannot be seen in another process and so if you want to pass data from one process to another, you are going to need to use arguments and we will talk about that a little bit later because that's another UiPath Associate certification objective.



---

# UiPath Variable Scope

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/Y_yE4CaqazE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
<br/>
{% include accordion.html %}

## Transcript

<figure class="figure">
  <img src="https://www.rpacertified.com/assets/uipath-studio-community-vs-enterprise-cloud.jpg" alt="UiPath Studio Community vs Enterprise" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">Chart the difference between UiPath Studio Community vs Enterprise Editions.</figcaption>
</figure>
<h1>Testing for a change</h1>
#### Where to find out more about UiPath?

To find out more about RPA certifications from UiPath, visit the <a href="http://www.uipath.com/learning/certification">official website</a>.

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
