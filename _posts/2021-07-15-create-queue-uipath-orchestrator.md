---
layout: featured-post
author: Kivens
editor: Serge
title: "Create Queue in UiPath Orchestrator Example"
blurb: "Here's a quick example of how to create queues in UiPath Orchestrator."
canonical: https://www.rpacertified.com/2021/07/15/create-queue-uipath-orchestrator.html
keywords: UiPath queues, UiPath Studio, UiPath Example, UiPath Tutorial, RPA Programming, UiPath Associate, UiPah Orchestrator
---

# Create a UiPath Queue

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/DQfUp0pgMu8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
<br/>

## UiPath Orchestrator Queue Tutorial

Hi, I'm Cameron Kenzie @cameronmcnc on Twitter. And I wanted to talk to you about Queues in UI path and specifically, I want to show you how to create one, and I want to show you how to read some data off that queue as well. So if you want to work with queues, the first thing you need to do is create a queue and I'm here in orchestrator, cloud.UIpath.com.

You click on automations queue, and then you just click the plus button and name your queue. So I'll call it the Insights Queue. And then you can add a description if you really want, do you want a unique reference? This will allow you to make sure that only specific requests go to this queue, specify your auto retry. But I just want to demonstrate the basics here, so I’ll just create this very, very basic queue. So, the queue is now been created. 

## Writing into the UiPath Orchestrator Queue

And then the question is, how do you actually write to that queue? Well, it really couldn't be easier. All you have to do is go into UI path studio and create a new orchestration process. Don't create a process, create an orchestration process because the default process won't work and I'll call it, Add Message To Queue. That would be the name of my project. I'll open the main window and I'm going to search over here for the Add Queue Item And Get Reference. 

So let's connect these two up. That looks nice and handsome. And then over here, I just double-click and I specify all of the different properties that I need. So a double-click to open it up. There we go. And now it wants to cue name. And of course, the queue name just maps to Insights Queue that needs to be in quotations.

I will give it high priority and then you can have an expression to save the output to, I'm not going to worry about that now, but I am going to worry about what I actually put into this queue. And you can see this collection here. You can code it in so I can say, you know, email and the value is mail@mcnz.com.

Then we could have a status and maybe this person is diamond status, and then maybe we could have interests and then maybe their interest is UIpath. And there we go. Let's take a look at that

Okay. Now this looks handsome. So email, status and interest. And so that's been set to the collection and I can just now save that and click the run button. It'll just take a moment to run, notice that it started and it finished. And now with that completed, I can head over to UI path. There's my queue. I'm going to take a look at that queue, view transaction.

And you see that there's one new transaction here. That's the one that I just wrote. And if I take a look at the details on that, you notice that the email, the status and the interest are all configured there. So, diamond, UIpath, mail@mcnz.com, which is exactly what I configured here in the collection where it actually says collection.

## Reading UiPath Orchestrator Queue

So, I just click on this and there you go, email status interests. And so that's all been pushed up to the server. Now, how would you read that? Well, that's just done in a new UI path studio projects. I'm going to go home. I'm going to close this project and I'm going to create a new orchestrator process and I'm going to call it Process Queue Items.

And then when this starts off, I'm going to open the main window and I'm going to look for the activity called Get Queue Items. There it is right there. I'm going to drop it. And this Get Queue Items. It needs to know the queue name. And of course that was Insights Queue. And that's just the name of the queue over here. Insights queue. No big mystery.

<figure class="figure">
  <img src="https://files.readme.io/b3c9929-create_queue_window.png" alt="Create UiPath Queue" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">How to create a UiPath Queue in Orchestrator example.</figcaption>
</figure>

When this get queue items runs, it wants to take all of the items in the queue and hold it into a variable. So I just highlighted the variable there and press control K and the little set VAR comes up, which is going to allow it to set the appropriate type. And I'm just going to call this, GetQueueItemsOutput, and I'm going to need that in the moment.

So I'm going to just copy that as I create it. Then you can see down here in the variables, it gets created and it's a type IEnumerable with a collection of queue items inside of it. And when you have a loop, it's a good idea to just loop through it. Or when you have an Iterable object is a good idea to loop through it.

I'm going to loop through that with, For Each. I'm gonna just go for each of them, the elements inside this queue. So I'll put it down there. We've got a for each. I think I’m going to double-click on this. And so for each item in GetQueueItemsOutput.

What do I want to do? Well, maybe I will just want to get the information that is in the queue. So how do you actually get details of that item? So, we've got one item in the queue here. If we view transactions and then even take a look at this and view the details. You notice that we've got the status and the email, how do we actually pull those properties out?

Well, inside the body of this for loop here, I'm just going to add a write message much better than the left message, write line. And then in this write line, I'm just going to say, well, each queue item is listed as an item, so I'm going to say item.SpecificContent(“email”).

And of course, this has actually given me a little warning here. And the reason for the warning is in that for each loop, you'll notice up here that the argument type is Object. Actually, want that argument type to be QueueItem. Cause that's what's inside of that list.

Yeah, there you go. Right under UIpath Core, QueueItem, click control last, and then just verify down here that we've got the ToString and I'll just kind of take that, put it into notepad. And there you go. You can actually see the whole content of that line there. You're going to click control S here.

I'm going to give this a little run. And you notice that as it runs, it's actually pulled that information out mail@mcnc.com. So that's how easy it is to just pull data out of the queue. We can even copy that and paste it in right there. And then of course the other fields that we've got is a status. So, you know, maybe just pull out status as well.

And give it another run. You know, we got diamond and mail@mcnc. I actually pull out the fields inside of that queue but notice that the object is still in the queue. Right? And its status is new. How do you change the status and actually handle it? So, no one else is going to handle it. Right?

Once somebody's handled something in the queue, you don't want, I want it handled again. Well, what you do there is you just get the transaction item. So we just look for the Get Transaction Item activity over here. There it is just pull it in.

It's going to ask for the name of the queue. And of course the queue, we can find that out right over here. It's the same one hasn't changed. So it's the Insights Queue. Put that in quotes here and then have an output for the transaction items. 

So where do we want to store that variable again? Control K allows us to set a variable and just very boringly call it TransactionItem, now that creates the variable that we need. You can see it down there. Okay. And now with the TransactionItem available to us, we can simply go over here and just say, Hey, we want to change that transaction status, so Set Transaction status here.

And then what do we want to set the transaction status to? You can choose. I want to set mine to Successful then. Of course, it wants to know what transaction item we're talking about. And we're just talking about this one here, the TransactionItem I just created.

And there you go. That now allows us to not only get the information out of the transaction, but actually get the information out of the queue, but also get the transaction item and then change the status on the object in the queue. So I click control S there, click run, we get the information. Then we actually start a transaction. We end it and it seems like it processed the queue. So did it really? Let's go take a look our queue. 

So over here, here's our Insights Queue. Well, take a look at the transactions. And now you notice this transaction that previously was New, has now been marked as Successful and there you go.

That's how you handle your transactions in UI path Orchestrator. There you go. That's how easy it is to create some queues in UIpath, and then do some manipulation of the data on that queue as well. Now, if you enjoyed that tutorial, why don't you head over to the serverside.com? Lots of great tutorials about enterprise software development and UIpath over there.

If you're interested in my personal antics, you can always follow me on Twitter @cameronmcnz and subscribe.

## Sample Questions

#### Sample Question #1
Question: What is the name of the activity that allows us to add items into the Queue?

- [x] &nbsp;  Add Queue Item And Get Reference
- [ ] &nbsp;  Add Transaction Item
- [ ] &nbsp;  Set Transaction Status
- [ ] &nbsp;  Get Transaction Item

#### Answer

Option a is correct. 

To add Queue Item in the Queue, you must add the the Add Queue Item and Get Reference Activity.

#### Sample Question #2
Question: What is the name of the activity that allows us to get items into the Queue?

- [ ] &nbsp;  Add Queue Item And Get Reference
- [ ] &nbsp;  Add Transaction Item
- [x] &nbsp;  Get Queue Items
- [ ] &nbsp;  Get Transaction Item

#### Answer

Option c is correct. 

Get Queue Items is the correct answer. This will return all the items from the specified queue.

### Learn more about UiPath Queues

If you'd like to go beyond this UiPath Queues, visit the <a href="https://docs.uipath.com/orchestrator/v2016.2/docs/managing-queues-in-orchestrator">UiPath Forum</a>.

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
