---
layout: featured-post
author: Supreet Singh
title: "Variable Scope in UiPath Studio Tutorial"
blurb: "Wondering how variable scope works in Uipath Studio? This UiPath Scope tutorials demonstrates where variables are in scope and out."
canonical: https://www.rpacertified.com/2021/06/07/variable-scope-uipath-studio-certification.html
keywords: uipath, variables, variable scope, variable listerine, uipath studio, rpa developer, rpa programming
accordion: 
  - title: What is the shortcut escape sequence to create a variable in UiPath Studio?
    content: Ctrl+K
  - title: Which section/tab allows the user to change the scope of the variable?
    content: Variables Tab
  - title: What is the default scope for a newly created variable in UiPath Studio?
    content: Within the parent-block and child-blocks where the variable is defined.
---

# UiPath Variable Scope

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/Y_yE4CaqazE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
<br/>

## Transcript
So, we just talked about _variables_ and declaring variables, but another part of the objective in the _UiPath Associate Certification_ exam is the fact that you need to not only know the basic variable types, but you also need to understand how variables are scoped in UiPath and it is actually, fairly straight forward.

_Variables_ have scope within the process in which they are defined and within the boundaries of the _object_ that defines them and any _sub-objects_. Within the container that defines them or any sub-containers. And that container could be something like _a sequence_ could be, uh, an if block could be an exception block.

But any kind of block element inside of UiPath. Let us take a look at how that gets defined. So, we are talking about scope here. I have actually always been a fan of Listerine. So, I am going to actually create a new application here. I am going to call it Listerine. I am going to spell it correctly. Create this project.

And then I got to create three sequences, which are going to represent the different blocks of _scope_ in the application. So, open the _Main Workflow_. From the main workflow, I am going to click on the _Activities tab_ and I am going to look for a sequence. I am going to drag it right onto the workflow there and I had to name this sequence _Ancestor_.
So, there is my ancestor. You know what? I am going to go down here into the _Variables tab_ and I am going to create a new variable and I'm going to call this variable, __'Annie'__. It will be a _String_ and its default value will be - __'My name is Annie!'__. There we go, we have got that. You know what? I could even throw in a little message box on top of that and print out that variable- __'Annie'__.

Everything looks good. You can actually see down there in the scope. It says the scope of this variable is the ancestor block. And if I run this, everything runs swimmingly. You can see that all of a sudden it now says, __'My name is Annie!'__. So, okay. Fantastic! Things are working well now let us add another sequence.

So, I am going to go down to this _Activities tab_, take a look at the sequences. Drag one in under the message box. And I am going to name this the __'Parent'__ and I think I am going to throw a message box in here and I'm going to create a variable in the message box. Now here is another way to create a variable.

I use the _Variables tab_, but if you click - _'Ctrl and K'_. Remember that that is a certification question right there. UiPath associate certification question- 

__What is the shortcut escape sequence to create a variable in UiPath Studio?__

Okay. But I will set the variable here and I am going to set this one. What? we are in the parent. So, I will call this __'Peter'__. That now creates a new variable- __'Peter'__. Now you will notice that down here, it has set the variable name. It has also made the variable type- _Object_. I am not too happy with that, so I am going to change it to _String_, but you will also see that the scope is __'Parent'__ and so, this variable is visible inside the __'Parent'__. It actually wouldn't be visible outside the __'Parent'__. So, if I put this message box right after __'Annie'__, I would end up with an error. But since it is inside the __'Parent'__ and its scope is __'Parent'__. Life is good. So, let us just run this. Let us see how it goes. It should print out. Oh, my name is Annie, but you know what? I did not assign anything to that message box. So, it works well, but it works exactly as it was programmed. They actually want it to print out 'My name is Peter.' So, I'll go into that- little section there. There we go. My name is Annie from the __'Ancestor'__ and then my name is Peter from the __'Parent'__ and you can probably see what's coming next here. Um, we are actually going to add another sequence and that's going to be inside __'Parent'__ and we'll call it 'Child One.' Then it looks like it is time for another message box in here. We will drop __'Child One'__ in here, and 'Ctrl+K' again, we'll have a variable name- __'Charlie'__, change the data type to 'String', have its name, __'My name is Charlie!'__. Now, it looks like everything is working well right here, I can click debug file and you probably can guess what is going to happen here.

__'My name is Annie!'__ from the __'Ancestor'__, __'Peter'__, from the __'Parent'__, __'Charlie'__, from the __'Child'__, that all looks great. And you know what? I am going to add one more just to really shake things up. I am going to add one more sequence and this sequence is going to be, it is going to be right after the message box, and it would be called - __'Child Zero'__. Right? We are computer programmers here. So, we are doing, zero-based counting and I'll have a message box and the message box (Ctrl+K) I'll create a variable called __'Chantelle'__ and there we go. That variable is created. I need to set that to be-a String and we will say, __'My name is Chantelle!'__.

Are we done here? I think we are happy with the way this is working. Do the little run instead of debug file. You can always choose different ones there,' My name is Annie!', __'My name is Peter'__,__'My name is Chantelle!'__ and __'My name is Charlie!'__. So, this is all working well. Now, here is the thing that __'Annie'__, that variable is declared in the __'Ancestor'__ and that variable is actually visible inside the __'Parent'__ and the __'Child'__ as well.

Any block inside of that block- __'Annie'__ is available. So, I can actually move this into the __'Parent'__ block. I do not have any compiler errors and I can move it into __'Child Zero'__. I do not have any compiler errors and I can move it into __'Child One'__ and they do not have any compiler errors. Okay. So that all looks good. Looks interesting to me and so I have not changed the scope of __'Annie'__. Notice, __'Annie'__ still has a scope of __'Ancestor'__, but it is visible inside of every single block, it is visible inside the __'Ancestor'__ block, but also any sub-block as well. So __'Parent'__ and __'Child'__. Now contrast that with __'Peter'__. __'Peter'__, declared in the __'Parent'__ has scope in the __'Parent'__.

I can move that into __'Child Zero'__. That works cause __'Child Zero'__ was inside the __'Parent'__. But watch this, if I move that to __'Ancestor'__, all of a sudden, I've got an error and I've got an error because __'Peter'__ has scope only within the __'Parent'__ block. You can actually see it there. There's __'Peter'__. When I highlight the __'Parent'__ block, you can see it declared a scope for __'Parent'__.

But if I actually highlight the __'Ancestor'__ block, you'll actually see, it's not even declared. Right. Hey, where did it go? Well, it is not declared in that block and that is what this error message is telling me. So, hey, Peter is not declared here. It is declared in the __'Parent'__ block. So, I could always change this.I could go down here, and I could say, hey, okay, We'll, give Peter- __'Ancestor'__ scope. And as soon as I do that, the error goes away because now __'Peter'__ is visible inside the __'Ancestor'__ and __'Parent'__ and __'Child'__ because they are all nested inside of one another, but I do not want to do that. I want to keep, uh, the P as a P. So, I will move that down to the parent and then tighten this up again and say, hey, that has got __'Parent'__ scope. Um, similarly, we have got the __'Child'__ scope, so we have got __'Chantelle'__ and __'Charlie'__, uh, __'Chantelle'__ has scope for __'Child Zero'__. So, you see that __'Charlie'__ has scoped for __'Child One'__, and you can see that there as well.

You also noticed that visible inside __'Child One'__ is also the __'Parent'__ and __'Ancestor'__. So you can see that in the Variables tab, there, it’s actually keeping tabs on what is visible. Now, one question might be- Would __'Charlie'__ be visible in __'Child Zero'__? 
Well, you can have a variable declared in a block and it is visible in any sub-block or sub-component.

But __'Child Zero'__ and __'Child One'__, they are sort of at the same level. They are not sub-components of each other. They are at that same spot, that same level in the hierarchy, and definitely, if an object is declared in __'Child Zero'__, it's not visible in __'Child One'__. So, if I try and move __'Chantelle'__ down from __'Child Zero'__ to __'Child One'__, You get an error.

And similarly, if I try and put __'Charlie'__ into __'Child Zero'__, I will get an error there as well. Um, so the variable has to be declared in a particular block if it is, it's then visible in that block, and then it's visible in any sub-block of that block as well. That is the basic rule for scoping inside of UiPath.
Now, let me see if I can get this to work again. I will move that over there. Move this over here. And it looks like all our problems are gone and I can even run this file and say, Go one, two, three. __'My name is Peter'__, __'My name is Chantelle!'__, __'My name is Charlie!'__, __'My name is Annie!'__ and there you go and that's because __'Annie'__ was moved down to the bottom there, I think taking it all back would even look like that.

That gives you an idea of the way that we use the scope in UiPath Studio. And that is what you need to understand for the UiPath Associate exam. Now it is also worth noting that all of the different activities will create their own block. So, if you were to go in and create your own- _'if-block'_.
I typed it there - _'if-block'_. So, if you were to add an _'if-block'_ in here, that _'if-block'_ would have its own scoping rules, so any variable declared inside 'Parent would be visible inside the _'if-block'_, but any variable declared inside the _'if-block'_ would only be visible there and so What's the best practice? and how do you manage these variables?

The key is - _'never declare a variable for a greater scope than is necessary'_. So, you could make your life really easy by just declaring everything at the __'Ancestor'__ level, in this example. But that now makes that variable visible everywhere. Somebody might accidentally adjust the value inadvertently in one of the blocks. If it is visible and you can get name conflicts, there is a variety of different problems that happen when you give too much scope. So, you want to encapsulate your code as much as possible, encapsulate your variables, protect them and that means, declaring them as soon as they are needed, but not before and not giving them scope, not giving them visibility into other blocks that do not need them.
So those are the general best practices for managing. One of the other things to mention, a variable declared in one process, cannot be seen in another process and so if you want to pass data from one process to another, you are going to need to use arguments and we will talk about that a little bit later because that's another __UiPath Associate certification objective__

<h2>Test Your knowledge </h2>
{% include accordion.html %}
### References that you might want to have a look at :
*  <a href="https://www.rpacertified.com/associate-objectives.html"> UiPath Associate Exam Objectives </a>
*  <a href="https://www.rpacertified.com/2020/11/11/debug-edit-variable.html"> Variable Debugging </a>
*  <a href="https://www.rpacertified.com/2021/06/07/uipath-default-variable-types.html"> Variable Types </a>

#### Where to find out more about UiPath?

To find out more about Managing Variables from UiPath, visit the <a href="https://docs.uipath.com/studio/docs/managing-variables">Official Documentation</a>.



<div class="row">
	
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card  w-100">
            <div class="card-header">
            Discuss with Us on Twitter
            </div>

            <div class="card-body">
<!-- **************************** -->       


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Road to <a href="https://twitter.com/hashtag/RPA?src=hash&amp;ref_src=twsrc%5Etfw">#RPA</a> <a href="https://twitter.com/hashtag/certification?src=hash&amp;ref_src=twsrc%5Etfw">#certification</a> <br>Lessons learned : 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲 𝗮𝗰𝗰𝗲𝘀𝘀𝗶𝗯𝗶𝗹𝗶𝘁𝘆 𝘄𝗶𝘁𝗵𝗶𝗻 𝗮 𝘀𝗲𝗾𝘂𝗲𝗻𝗰𝗲 𝗶𝗻 𝗨𝗶𝗣𝗮𝘁𝗵<a href="https://twitter.com/hashtag/RPAAssociate?src=hash&amp;ref_src=twsrc%5Etfw">#RPAAssociate</a> <a href="https://twitter.com/hashtag/UiPath?src=hash&amp;ref_src=twsrc%5Etfw">#UiPath</a> <a href="https://twitter.com/hashtag/UiRPA?src=hash&amp;ref_src=twsrc%5Etfw">#UiRPA</a> <br><br>An insightful tutorial by <a href="https://twitter.com/cameronmcnz?ref_src=twsrc%5Etfw">@cameronmcnz</a> <a href="https://t.co/WJ22ZBX11E">https://t.co/WJ22ZBX11E</a></p>&mdash; Supreet Singh (@ohsidhua) <a href="https://twitter.com/ohsidhua/status/1403064077770014728?ref_src=twsrc%5Etfw">June 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

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
