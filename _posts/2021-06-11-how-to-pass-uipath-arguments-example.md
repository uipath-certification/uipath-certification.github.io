---
layout: answered-question
author: Kivens
title: How to pass arguments in UI Path?
blurb: How do we use UI Patharguments?
difficulty: 6
canonical: https://www.rpacertified.com/2021/06/11/how-to-pass-uipath-arguments-example.html
keywords: attended automation, attended robots, automation best practices, rpa use case, rpa best practices
---

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/wpu4vjI36pM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>



# UiPath Arguments

Now I don't want to fight, but I do want to argue, at least I want to talk about UI path arguments for a minute or two. Now, why do I want to do that? Well, one of the reasons is because it's an important part of the UI Path Associate Certification exam. As you can see here from the UI Path exam objectives, it says that if you want to pass the exam, you need to demonstrate an ability to describe the functions and differences between UI path variables and arguments. Including how UI path arguments are used, managed, and best practices for using UI path arguments. 

So, to demonstrate how UI path arguments are used and how they differ from UI path variables, I'm going to open up UI path studio and create a brand-new process and I'm going to call it the *UiPath Arguments* example, click enter to create this.

And as the project starts up, I'm going to open the *main workflow*. And on that main workflow, I'm going to add an *assign* activity. And in this assign activity, I'm just going to *initialize* a name, a new variable. Now you can always use the variables tab to do that, but if you use the shortcut *control plus K*, it allows you to declare a name variable right inside of the text fields.

So, this neat little trick, shortcut control K. I'm just going to create a variable called *MainVariable*, main variable, and I'm simply going to assign it the value *This is the main variable value to start*. 
	
    Assign
	MainVariable = “This is the main variable value to start”

I don't know, something like that. You can see it there. And so, I got this main variable. Now, what if I wanted to display that in another sequence, display the value of that main variable in *another sequence*, another process and the tool.


## UI Path - In Argument

Let's add a new sequence. I'm going to call it the *InSequence*. It was better to be in-sequence than to be out-of-sequence, I guess, and to call a sequence from another sequence, you can just drag it onto the workflow. So I'm going to drag the in sequence onto the workflow in the main workflow, click open workflow, which will open up *InSequence*.

And here, I just want to print out the value of that *MainVariable*, right? I'm going to click on the activities tab and I'm going to add a *Message box*, and I'm just going to try and display that the value of that *MainVariable*.

Now, if I just type *MainVariable* inside the sequence, we will notice I've got an error regarding *MainVariable* being not declared. It may be inaccessible due to its protection level. Main variable doesn't make any sense here. And that's because variables only have scope within the block in which they're declared and more specifically, or generally within the sequence in which they're declared.

You can't just use a variable in one sequence that's been declared in another, but you can get the value of that variable into this sequence by passing the value of the original variable as an argument. So instead of saying MainVariable here, what I can do is I can go down to this *Arguments* tab. And I can create a new argument.

I'll call it *in_Argument*. It's not a great name, but it works. Its direction is *in* because the value is going to come in from the main workflow. It's type is String. That all looks good. And it's the value of this *in* argument. That I want to display in the Message box. And so, notice that my compile errors have gone.

I've now referencing a variable, really an argument that's within scope. And the promise is this argument is actually going to get its data from another workflow, from the main workflow. And how does it get that? Well, it gets that by mapping a variable in the workflow that called this sequence to the in argument.

And how do you do that? Well, the orange box that's just appeared on the main sequence is a bit of a guide. It's saying, hey, there's an argument use in the *in* sequence and we need you to map a variable to it. So I click *Import Arguments*. You can see in argument is referenced here. It says, what value do you want in argument to copy and use inside of the in sequence workflow while I just want them to copy the value of that main variable, which is, this is the *MainVariable* value to start.

And now if I click run, you'll actually see that displayed in the message box and that message box is used in another sequence. So now I've passed the value of a variable from one sequence to another, by using a UI path argument now that's an *in* argument. 


## UI Path - Out Argument

There's also an out argument. So let's see how those works. I'm going to add a new sequence and I'll call this the *OutSequence*. Go back the main workflow and just drag it on after the first *in* sequence. So, you've added it there. I'll click open workflow. And what do we want to do on here? Well, we're not getting data passed in.

What we want to do is we want to manipulate some data, create a variable, and then pass that variable out. And so to do that, we're just going to add a quick *assign* activity. Now you can use control K to create a variable in UI path. You can use *control shift M* to create an argument. There's a neat little shortcut for you.

And this argument, I want to call *out_Argument* now, again, that is the naming convention, uh, in out or io for in out arguments, lowercase letters and underscore, and then the actual name of the argument. And your name should be better than just the word argument. I'm just doing that to use this as an example.

And so, there's my *out* argument. Now, whenever you use the short cut to create an out argument, always make sure that the argument’s direction is correct. So defaulted to out here, which is correct, but you know, you might need an out or an in-out property, just make sure that it's specified correctly  with argument type String.

That all looks good to me. And so now we want this argument to be passed to the original program, as you would probably give it a value too. So this is *The value assigned in the out sequence*. That's where they go with, give them this value, this argument of value. And now we want to display that value in the main workflow.

And so how can we do that while we can add a message box. We can say *Now the value is* + *MainVariable* value and that MainVariable value should be getting the value from the out sequence. And I'm going to come over here and just save the out sequence. Go back to main. Notice that orange box has showed up, telling me that I have to do a mapping for an argument.

I click import argument. It says. What do you want to assign the value of out argument to in your workflow? I'm just going to say, well, after that workflow runs, I want the value of that argument to be assigned to the MainVariable. Then we print that out. *Now the value is* + MainVariable, and we should be able to see the value now displayed in the main workflow that actually comes from the out sequence.

So I'll give this a run. You'll see the variable from the in sequence displayed first. This is the main variable. But now the next time it runs, the out sequence updated the MainVariable. When we asked for the value of the MainVariable, it now says, this is the value assigned in the out sequence, which is cool because even though that's the value assigned to the out sequence, we're actually referencing it in the main sequence.

So the data from that other sequence has now been passed back to the main workflow. That's the idea of an out argument. Some languages call it a return argument. 


## UIPath - In/Out Argument

Now finally, there's also an in out argument and in out argument is one that you can pass *into a workflow*. And then if it manipulates the field inside the workflow, that then get *reflected in the variable in the calling program*.

So, let's make this our final sequence. I'm going to add a new sequence. I'm going to call it the InOutSequence. There we go. The InOutSequence has been created. And in here, we'll add an assign activity. And in this assign activity, we will, we'll use that control shift M shortcut to create an argument called io_Argument.

And that's the proper syntax naming convention for in-out arguments is *io* underscore and the name of the argument. And I'll assign that to the string, “Just messed up the variable in IO sequence”. I mean, doesn’t really matter what you put in there, but just something to take note of the fact that we have messed around with the argument, and then hopefully that changes the variable in the main program.

Now, before I do that, I wouldn't mind just printing out the value. So proving that we're actually getting the value from the main workflow in, at the beginning *And at the start of io the argument is set to* + *io_Argument*. So we want to see what that io_Argument is at the beginning of the sequence.

And then. Well, we know that it gets changed to *Just messed up the variable*, but we want to see that value reflected in the main workflow. Now, there is one last thing that I need to do. If I go down to arguments here, you'll notice that the direction is Out. That's no good. I wanted an *In/Out* property. So, I want to not only get the value from the workflow that caused a sequence, but I want to pass it back as well.

So actually, I need to change the direction to In/Out if you don't do that, it's not going to function properly. So make sure you got that. Also make sure the argument type is string, but once that's complete, I think I am good. I'm going to go back to the main workflow. I will then drag the InOuTSequence onto the main workflow.

There we go. They're known, as it tells me, I have to map the arguments. So if you want to pass those UI path arguments, I've got to map the argument to a variable. And the variable is just the MainVariable. Now in the InOutSequence, we print out the value of that variable at the start. I'd like to actually print out the value of that variable after that sequence ends and make sure that the value of the variable argument is it's manipulated in the sequence is actually sent back to the calling program.

*The main variable value after io sequence is* + MainVariable. So that variable is getting changed quite a bit. And that's the whole idea of a variable. That's why it's called a variable and not a constant. I think my arguments have all been imported and assigned.

I think I'm ready to run this program now again, when it starts off, it's going to be the end sequence, displaying the value of the variable. Then the out sequence manipulates that variable. We print it out again. And when it's printed out, it says, *This is the value assigned in the out sequence*. Then we call the InOutSequence. So that value is going to get passed into the InOutSequence. So, when I look at the message at the start of the InOutSequence, I should see that *This is the value assigned in the out sequence*. And look, I do indeed see that you can see that right there.

And then finally we changed the value in the InOutSequence. Then we pass it back to main, main prints out the value, and now it says “Just messed up the variable in io sequence”. And so there you go. That is the whirlwind tour of in, out and in out arguments in UI path.


## Sample Questions

#### Sample Question #1
Question: What type of argument property is used for programs that wanted to get the product of two numbers?

- [ ] &nbsp;  In Argument
- [ ] &nbsp;  Out Argument
- [x] &nbsp;  In/Out Argument

#### Answer

Option c is correct. 

In this particular situation, the sequence will be needing an incoming variables for the two numbers and an outgoing variable for the product.

#### Sample Question #2
Question: What type of argument property is used for programs that wanted to get a string from a sequence?

- [ ] &nbsp;  In Argument
- [x] &nbsp;  Out Argument
- [ ] &nbsp;  In/Out Argument

#### Answer

Option b is correct. 

In this particular situation, the sequence will only be needing a return value in which the Out Argument is designed for.

#### Sample Question #3
Question: What type of argument property is used for programs that wanted to just output the product of two numbers?

- [x] &nbsp;  In Argument
- [ ] &nbsp;  Out Argument
- [ ] &nbsp;  In/Out Argument

#### Answer

Option a is correct. 

In this particular situation, the sequence will only be needing incoming variables to output it inside a sequence, given that the sequence will do the multiplication before displaying it.

#### Where to find out more?

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
