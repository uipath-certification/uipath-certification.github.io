---
layout: answered-question
author: Serge
title: PDF Activity missing from the activities panel? How do you add it?
blurb: Here's what to do when PDF activities are missing from the activities panel in UiPath Studio
difficulty: 5
objective: 7.3 Describe the functions used to extract data from a .pdf file; for example, using OCR
canonical: 
---

<h1>PDF activities not found in Uipath Studio?</h1>
<h2>Here's how to find them.</h2>

Question:  If the PDF activities are not listed in your activities panel, how can you add them?

 - [ ] &nbsp;  Those activities are not available
 - [X] &nbsp;  You have to install PDF activities using the Manage Packages features
 - [ ] &nbsp;  Try to find a different but similar activity
 - [ ] &nbsp;  Reboot and they will appear

## Answer

Option B is correct.

<h3>UiPath Activity Missing and Not Loaded Error</h3>

Whenever an activity you need is missing, just click the _Manage Packages_ button at the top of the screen, search for the package that contains the activity, and install it.

It should go without saying that the other options are incorrect.

<h3>Manage Packages</h3>

The _Manage Packages_ feature has three areas to it: Local, Marketplace and Official.

<img src="https://github.com/uipath-certification/uipath-certification.github.io/blob/master/assets/Managepackages.jpg"/>

<b><u>The Local area</u></b>: These are packages stored locally on your machine but may have not been made available within your project.

<b><u>The Markeplace</u></b>: This is where developers such as yourself can create their own packages and make them available to everyone connecting to the marketplace.

<b><u>The Official area</u></b>: These are the packages that are officially supported by UiPath, you can get the latest packages as well as test out Beta versions of new packages.

<div class="embed-responsive embed-responsive-16by9">
  			<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/cHzL31ylZ2Q"></iframe>
</div>

To learn more about Manage Packages please click on this <a href="https://docs.uipath.com/studio/docs/managing-activities-packages">link</a>.


