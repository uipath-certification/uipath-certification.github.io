---
layout: answered-question
author: YouTube
title: UiPath Anchor Base Example
blurb: In this quick UiPath Anchor Base example tutorial, you'll quickly learn how to select specific Ui elements in a web page, PDF file, or even a desktop application.
difficulty: 6
objective: 7.2 Identify and describe Microsoft Excel and DataTable functions, and how Excel activities are used for data manipulation
canonical: https://www.rpacertified.com//2021/04/03-uipath-anchor-base-example-tutorial.html
keywords: UiPath Anchor, Anchor Base, Anchor Base Tutorial, UiPath Anchor Base, uipath indicate anchor, uipath click image anchor, uipath multiple anchors
---
# Anchor Base UiPath Activity

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/BZFG_BL_sd4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>
## Anchor Base Tutorial
Editors Note: Many students have asked for guidance on the UiPath Anchor Base activity, and how it works with the Find Element and Find Image functions. We've always been fans of Anders Jensen, an we recommend this video fairly often. We've embedded it here and provided a mildly edited transcript of the video to help users get the most out of the content. Enjoy the video, and subscribe to Mr. Jensen's YouTube page if you get a chance.

In this UiPath Studio tutorial, we will learn how to use the UiPath anchor base activity. 
## What is a UiPath Anchor Base?
A UiPath anchor base activity helps to locate elements on a page based on their relative positions. Sometimes webpages or PDF files do not uniquely identify UiElements with ids. Or, the ids may change over time. To overcome this problem, a UiPath Anchor can be used. 
The UiPath Anchor Activity is useful when the developer does not have a reliable or predictable selector. 
Let me show you a UiPath Anchor Base example.

## How to use the Anchor Base activity

To use the UiPath Anchor Base activity, follow these steps:
1. Add the UiPath Anchor Base activity to your workflow
2. Target an anchor with UiPath's Find Element or Find Image activity
3. Specify the relative position to the target UiElement with the AnchorPosition property
4. Add the activities to be performed UiElement in the _Drop Action Activity Here_ swimlane of the Anchor Base activity

## Anchor Base in UiPath Example
I opened this RPA challenge website and there is an input field we would like to target with the UiPath _Type Into_ activity. 
Let’s type something like ‘road’ into the address field.
Just quickly run the workflow in UiPath Studio to verify that the _Type Into_ activity works without even the need for a UiPath Anchor Base activity
## Problems with UiPath Selectors
However, RPA applications that do screen scraping or rely on well-formed HTML and IDs will often run into problems with a basic UiPath selector.
To fix this problem and harden our applications, we can employ the UiPath anchor base activity. 
Delete what we have on the current workflow. Then search for the anchor base activity in UiPath Studio’s Activities panel.  The drag the anchor base activity onto the workflow.
You always create an anchor base close to your target. 
So let's add our _type into_ activity here as the UiPath Anchor Base action to perform. 
Then we will indicate the address field. We can type in ‘road’ again, 
Then we will have an anchor and that's something close to this address field. 
We will just take the address label, because that will always be close to the target field.
The best thing to do is just take this address because that will always be close to our field and 
## Find element vs find image
We can choose two find types in our anchors: find element and find image.
Always try find element first. If that doesn't work, you can use the find image.
Drag the find element activity into the UiPath anchor base acivity. 
That will be the address here. 
## Anchor Base AnchorPosition
Now we choose the Anchor Base position by specifying the AnchorPosition property.
The chosen anchor is over the target of our _Type Into_ activity, so the Anchor Base AnchorPosition should be on to. 
You can see that that the position changes in the UiPath Studio worfklow. 
So now we have our AnchorPostion set to top. We can now run our UiPath Anchor Base example application.
Run it two times to verify it works on different sides. 
## UiPath Anchor Base Find Image
But what if the find element didn't work? The UiPath Find Element and Find Image activities compliment each other. If the Find Element fails, you can always try the UiPath Find Image activity.
And what we'll do is that will indicate our anchor base image to be the address JPG. Besides the use of a JPG, GIF or PNG as the target, the UiPath Find Image Anchor works the same way as Find Element does.
Run the RPA application and you’ll see that it works exactly the same as before.
And that’s a full UiPath Anchor Base tutorial to demonstrate how to improve on the basic selector functionality provided with UiPath Studio.

Find more from Anders Jensen on his <a href="https://andersjensen.org/">webpage.</a>
