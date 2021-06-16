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

## Accessing variables in UiPath
So, we just talked about _variables_ and declaring variables, but another part of the objective in the _UiPath Associate Certification_ exam is the fact that you need to not only know the basic variable types, but you also need to understand how variables are scoped in UiPath and it is actually, fairly straight forward.

_Variables_ have scope within the process in which they are defined and within the boundaries of the _object_ that defines them and any _sub-objects_. Within the container that defines them or any sub-containers. And that container could be something like _a sequence_ could be, uh, an if block could be an exception block.

But any kind of block element inside of UiPath. Let us take a look at how that gets defined. So, we are talking about scope here. I have actually always been a fan of Listerine. So, I am going to actually create a new application here. I am going to call it Listerine. I am going to spell it correctly. Create this project.

And then I got to create three sequences, which are going to represent the different blocks of _scope_ in the application. So, open the _Main Workflow_. From the main workflow, I am going to click on the _Activities tab_ and I am going to look for a sequence. I am going to drag it right onto the workflow there and I had to name this sequence _Ancestor_.
So, there is my ancestor. You know what? I am going to go down here into the _Variables tab_ and I am going to create a new variable and I'm going to call this variable, _'Annie'_. It will be a _String_ and its default value will be - _'My name is Annie!'_. There we go, we have got that. You know what? I could even throw in a little message box on top of that and print out that variable- _'Annie'_.

Everything looks good. You can actually see down there in the scope. It says the scope of this variable is the ancestor block. And if I run this, everything runs swimmingly. You can see that all of a sudden it now says, _'My name is Annie!'_. So, okay. Fantastic! Things are working well now let us add another sequence.

So, I am going to go down to this _Activities tab_, take a look at the sequences. Drag one in under the message box. And I am going to name this the _'Parent'_ and I think I am going to throw a message box in here and I'm going to create a variable in the message box. Now here is another way to create a variable.

I use the _Variables tab_, but if you click - _'Ctrl and K'_. Remember that that is a certification question right there. UiPath associate certification question- 

**_What is the shortcut escape sequence to create a variable in UiPath Studio?_**

Okay. But I will set the variable here and I am going to set this one. What? we are in the parent. So, I will call this _'Peter'_. That now creates a new variable- _'Peter'_. Now you will notice that down here, it has set the variable name. It has also made the variable type- _Object_. I am not too happy with that, so I am going to change it to _String_, but you will also see that the scope is _'Parent'_ and so, this variable is visible inside the _'Parent'_. It actually wouldn't be visible outside the _'Parent'_. So, if I put this message box right after _'Annie'_, I would end up with an error. But since it is inside the _'Parent'_ and its scope is _'Parent'_. Life is good. So, let us just run this. Let us see how it goes. It should print out. Oh, my name is Annie, but you know what? I did not assign anything to that message box. So, it works well, but it works exactly as it was programmed. They actually want it to print out 'My name is Peter.' So, I'll go into that- little section there. There we go. My name is Annie from the _'Ancestor'_ and then my name is Peter from the _'Parent'_ and you can probably see what's coming next here. Um, we are actually going to add another sequence and that's going to be inside _'Parent'_ and we'll call it 'Child One.' Then it looks like it is time for another message box in here. We will drop _'Child One'_ in here, and 'Ctrl+K' again, we'll have a variable name- _'Charlie'_, change the data type to 'String', have its name, _'My name is Charlie!'_. Now, it looks like everything is working well right here, I can click debug file and you probably can guess what is going to happen here.

_'My name is Annie!'_ from the _'Ancestor'_, _'Peter'_, from the _'Parent'_, _'Charlie'_, from the _'Child'_, that all looks great. And you know what? I am going to add one more just to really shake things up. I am going to add one more sequence and this sequence is going to be, it is going to be right after the message box, and it would be called - _'Child Zero'_. Right? We are computer programmers here. So, we are doing, zero-based counting and I'll have a message box and the message box (Ctrl+K) I'll create a variable called _'Chantelle'_ and there we go. That variable is created. I need to set that to be-a String and we will say, _'My name is Chantelle!'_.

Are we done here? I think we are happy with the way this is working. Do the little run instead of debug file. You can always choose different ones there,' My name is Annie!', _'My name is Peter'_,_'My name is Chantelle!'_ and _'My name is Charlie!'_. So, this is all working well. Now, here is the thing that _'Annie'_, that variable is declared in the _'Ancestor'_ and that variable is actually visible inside the _'Parent'_ and the _'Child'_ as well.

Any block inside of that block- _'Annie'_ is available. So, I can actually move this into the _'Parent'_ block. I do not have any compiler errors and I can move it into _'Child Zero'_. I do not have any compiler errors and I can move it into _'Child One'_ and they do not have any compiler errors. Okay. So that all looks good. Looks interesting to me and so I have not changed the scope of _'Annie'_. Notice, _'Annie'_ still has a scope of _'Ancestor'_, but it is visible inside of every single block, it is visible inside the _'Ancestor'_ block, but also any sub-block as well. So _'Parent'_ and _'Child'_. Now contrast that with _'Peter'_. _'Peter'_, declared in the _'Parent'_ has scope in the _'Parent'_.

I can move that into _'Child Zero'_. That works cause _'Child Zero'_ was inside the _'Parent'_. But watch this, if I move that to _'Ancestor'_, all of a sudden, I've got an error and I've got an error because _'Peter'_ has scope only within the _'Parent'_ block. You can actually see it there. There's _'Peter'_. When I highlight the _'Parent'_ block, you can see it declared a scope for _'Parent'_.

But if I actually highlight the _'Ancestor'_ block, you'll actually see, it's not even declared. Right. Hey, where did it go? Well, it is not declared in that block and that is what this error message is telling me. So, hey, Peter is not declared here. It is declared in the _'Parent'_ block. So, I could always change this.I could go down here, and I could say, hey, okay, We'll, give Peter- _'Ancestor'_ scope. And as soon as I do that, the error goes away because now _'Peter'_ is visible inside the _'Ancestor'_ and _'Parent'_ and _'Child'_ because they are all nested inside of one another, but I do not want to do that. I want to keep, uh, the P as a P. So, I will move that down to the parent and then tighten this up again and say, hey, that has got _'Parent'_ scope. Um, similarly, we have got the _'Child'_ scope, so we have got _'Chantelle'_ and _'Charlie'_, uh, _'Chantelle'_ has scope for _'Child Zero'_. So, you see that _'Charlie'_ has scoped for _'Child One'_, and you can see that there as well.

You also noticed that visible inside _'Child One'_ is also the _'Parent'_ and _'Ancestor'_. So you can see that in the Variables tab, there, it’s actually keeping tabs on what is visible. Now, one question might be- Would _'Charlie'_ be visible in _'Child Zero'_? 
Well, you can have a variable declared in a block and it is visible in any sub-block or sub-component.

But _'Child Zero'_ and _'Child One'_, they are sort of at the same level. They are not sub-components of each other. They are at that same spot, that same level in the hierarchy, and definitely, if an object is declared in _'Child Zero'_, it's not visible in _'Child One'_. So, if I try and move _'Chantelle'_ down from _'Child Zero'_ to _'Child One'_, You get an error.

And similarly, if I try and put _'Charlie'_ into _'Child Zero'_, I will get an error there as well. Um, so the variable has to be declared in a particular block if it is, it's then visible in that block, and then it's visible in any sub-block of that block as well. That is the basic rule for scoping inside of UiPath.
Now, let me see if I can get this to work again. I will move that over there. Move this over here. And it looks like all our problems are gone and I can even run this file and say, Go one, two, three. _'My name is Peter'_, _'My name is Chantelle!'_, _'My name is Charlie!'_, _'My name is Annie!'_ and there you go and that's because _'Annie'_ was moved down to the bottom there, I think taking it all back would even look like that.

That gives you an idea of the way that we use the scope in UiPath Studio. And that is what you need to understand for the UiPath Associate exam. Now it is also worth noting that all of the different activities will create their own block. So, if you were to go in and create your own- _'if-block'_.
I typed it there - _'if-block'_. So, if you were to add an _'if-block'_ in here, that _'if-block'_ would have its own scoping rules, so any variable declared inside 'Parent would be visible inside the _'if-block'_, but any variable declared inside the _'if-block'_ would only be visible there and so What's the best practice? and how do you manage these variables?

The key is - _'never declare a variable for a greater scope than is necessary'_. So, you could make your life really easy by just declaring everything at the _'Ancestor'_ level, in this example. But that now makes that variable visible everywhere. Somebody might accidentally adjust the value inadvertently in one of the blocks. If it is visible and you can get name conflicts, there is a variety of different problems that happen when you give too much scope. So, you want to encapsulate your code as much as possible, encapsulate your variables, protect them and that means, declaring them as soon as they are needed, but not before and not giving them scope, not giving them visibility into other blocks that do not need them.
So those are the general best practices for managing. One of the other things to mention, a variable declared in one process, cannot be seen in another process and so if you want to pass data from one process to another, you are going to need to use arguments and we will talk about that a little bit later because that's another _UiPath Associate certification objective_

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
