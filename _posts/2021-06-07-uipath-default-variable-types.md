---
layout: answered-question
author: Kivens
title: Which of the following are not default types in the UiPath Variables tab?
blurb: When you create a new UiPath Process, there are five variable types listed in the Variables tab dropdown. Can you name them?
difficulty: 6
objective: 1.2 Identify and describe the different types of robots, i.e., attended versus unattended robots
canonical: https://www.rpacertified.com/2021/06/07/uipath-default-variable-types.html
keywords: attended automation, attended robots, automation best practices, rpa use case, rpa best practices
---

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/Bd5rzdGzSTo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>

# UiPath Default Variable Types

So, applications handled data. That is one of the things they do. 
    *Handle data. 
    *Can do conditional statements. 
    *Can do things quickly with iterative loops here. 

We are going to look at data and data that changes. And when you got data that changes, we call that variable.

And so, to explore variables, I am going to create a new process in UI path studio, and I am going to call it “Variables”. I know it is not a very creative name, but I am not a very creative person.

Now, as that starts up, I just wanted to take you to the UI Path Associate Certification objectives and you can see that there is an objective here specifically for variables and arguments. And it says that anybody who wants to pass the UI path Association Certification exam should be able to describe the different variable types, not all of them, but the key ones.

How those variables are used in UI Path studio, how they are managed and some best practices for scope. Now I am not going to get into scope right now, but I would like to cover some of those other points with this application I just created. So, I am going to open the main workflow. And after opening the main workflow, I am going to add a sequence right onto the heart of it.

And after I have done that in the lower left-hand corner, I am going to click on the variables tab. On the variables tab, probably do not have to tell you, but that is where you go to create variables in UI Path studio. It is worth clicking on variable type, take a look at the different variable types that are available just by default, right off the bat:

    *Boolean - that your true or false 
    *Int32 - that's whole numbers.
    *Object - that can be pretty much anything because everything is an object and an object-oriented world. 
    *Data table - that is used for typically handling the data that goes inside of an Excel sheet or the data we have pulled from an Excel sheet
    *Array[T], which just means an array of anything.
    *Browse for Types - If there is a type that you are looking for, like the Dictionary class, you can go into that browser types.

## Strings

So, let's see how you can use this window. Let's create a new variable. I'm going to call this the “Message” is going to be of type String and I'll give it the message “Hello World”.

Click away to commit that. And there you go. I've got a new variable called hello world, and I could come over into the activities tab and look for the message box and then printing out the value of that variable is just as simple as typing the variable name into this box. In fact, the IntelliSense will come up right away and it'll automatically put that in.

I can click debug file and Boom. All of a sudden, “Hello World” comes up with the message box. So now I've displayed that property. They should always note that there is the properties tab on the right-hand side, and you can almost always set a variable in this window as well. 

## Booleans

So, you can see right there. There's that text property. I can type a message in there and that would be another way to get the variable to display, but you know what, why not create another variable? Well, I'm going to create a variable called “Flag” and it'll be of type Boolean: True or False. Now when I type it in, I just have to type in True.

And there you see; we've got a True value now. With Booleans, it can be True, it can be False, no double quotes with text or as a string. The Boolean it's not in double quotes, it's just True or False. And, we don't use the zero or one. So, some languages love zero on one to be true and false. Here, it has to be True or it has to be False. 

I have got a little air here in the ear, says, well, you need a value for the message box to display and I just want to display the Flag. So, another approach to setting a variable is to do it over in this properties window. And I'll just put flag in there. And now that Boolean value, which has been set to true should print out when I run the application. And does it. Boom. There it is. That's the True value. 

## Int32

So, what have we got? We've got Booleans. We've got Strings. What else do we have in there? We've got the int32. Don't get that confused with int. A lot of times they'll ask you if the variable type is int on the UI Path Associate exam, it's not, it’s int32. So just keep that in your head there. 

I dunno. I could make this the magic number. And what's the magic number? Maybe the magic number will be 7, no double quotes, just a whole number here. And I could go over here, and I could just print out the magic number. And again, if I run this boom here, we see that magic number seven being displayed. So that's kind of neat how that works over there. 

## Array[T]

Now, there's a couple of other data types. I mentioned there is this array type, this like array of teeth that the T is like, fill in the blanks later. What do you want to do you want to be strings? Do you want it to be ints? Let's say I wanted to create an array of INTS.

I could say, hey, it's going to be an array of int32 objects. And I just got the option, Boolean, String, stuff like that, but I was going to make it int32. What will I call it? I'll call it “EyeNeedARaise” because it's a raise and there, there's this index there. One comma, two comma three, {1, 2, 3}. And if you want to print that out, well, here in this message box, you reference the variable “EyeNeedARaise”.

And then what is it? It is something like, I dunno, is that ElementAt. There's ElementAt. I can find that method. So, objects have methods and this int32 object has a method called ElementAt, and we'll do element at zero because it uses zero-based counting. And so, element at zero should be the number 1 in my array.

And has that come up? There we go. We have now got that number 1 coming up. So, there you go. That's your default set of data types. We didn’t cover Object and we didn't cover Data Table. We'll cover Data Table once we start getting into Excel automation. 

## Browse for Types

It's worth noting that you do have this browse for types option.

And if there's something not there in the default list, you can come over here and you can look for it. So, you know, type in “hash” and they'll give you “HashSet”, “HashTable”, “HashtableAst”, “HashAlgorithm”. 

If you type in “dictionary”, it'll give you the Dictionary class. So, there's the system dictionary class right there.

So, there's some custom type that you want. All you have to do is browse for, and you should be able to find it. And so there you go. That's just a quick overview of the basic variable types in UI path and how you can use them.


Question: Which of the following is not one of the default variable types listed in the drop down list of the Variables tab?

- [ ] &nbsp;  Boolean
- [x] &nbsp;  int
- [ ] &nbsp;  String
- [x] &nbsp;  Dictionary

## Answer

Options b and c are correct.

## UiPath Studio Variables Tab

When you start a new UiPath project, there are only five varaible types listed in the Varaibles tab. They are:

1. String
2. int32
3. Boolean
4. Object
5. Array of [T]

Note that b) is incorrect because the variable type is int32, not int.

The Dictionary class is a valid UiPath variable type, but it is not one of the defaults listed in the varaibles tab.

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
