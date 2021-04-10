---
layout: answered-question
author: Serge
title: Which job status(es) will prevent the deletion of an associated robot?
blurb: Watch out for pending and running job statuses if you are asked how to delete an associate robot in Orchestrator on the UiPath Certification Exam.
difficulty: 6
objective: 8.1 Describe how to provision attended and unattended robots to UiPath Orchestrator
canonical: https://www.rpacertified.com/2020/09/09/orc-job-status-prevent-robot-deletion.html
keywords: job status, delete UiPath robot, delete robot, UiPath jobs, UiPath Status, UiPath Certification Status, UiPath Cert Jobs
---

<h1>UiPath Job Status Deletion</h1>

Question:  Which job status(es) will prevent the deletion of an associated robot?

 - [X] &nbsp;  Running and Pending
 - [ ] &nbsp;  Faulted and Pending
 - [ ] &nbsp;  Suspended and Stopped
 - [ ] &nbsp;  Running Only

## Answer

If the UiPath jobs status is running or pending, the associated <a href="https://www.rpacertified.com/2020/09/09/orc-available-functions-for-attended-robot.html">UiPath Robot</a> cannot be deleted from UiPath Orchestrator. So option A is correct.

### UiPath Job Status List

These are the possible UiPath Orhcestrator job statuses for robots:

- Pending
- Running
- Successful
- Faulted
- Stopping
- Terminating
- Suspended
- Resumed
- Stopped

 <figure class="figure">
  <img src="https://files.readme.io/ed3d862-job_details.png" alt="Delete UiPath Job Robot" class="img-fluid mx-auto d-block img-thumbnail rounded ">
  <figcaption class="figure-caption">Ensure the UiPath Orchestrator job status is not running or pending if you wish to delete the associated robot. </figcaption>
</figure>

#### RPA Robot States

What do these job statuses mean? This table provides a bit more detail:

<table border="1" class="table table-striped">
<tr>
  <th class="table-primary">&nbsp;&nbsp;Job State&nbsp;&nbsp;</th>
  <th class="table-primary">&nbsp;&nbsp;Description &nbsp;&nbsp;</th>
</tr>
<tr>
  <td>&nbsp;&nbsp;Pending&nbsp;&nbsp;</td>
  <td>&nbsp;&nbsp;Job is queued on the same Robot or it is trying to establish a connection with the Robot (only different jobs on the same Robot can be queued) &nbsp;&nbsp;</td>
</tr>
<tr>
  <td>&nbsp;&nbsp;Running&nbsp;&nbsp;</td>
  <td>&nbsp;&nbsp;The robot has started executing the designated process. &nbsp;&nbsp;</td>
</tr>
<tr>
  <td>&nbsp;&nbsp;Successful&nbsp;&nbsp;</td>
  <td>&nbsp;&nbsp;The robot has finished running or has been stopped manually &nbsp;&nbsp;</td>
</tr>
<tr>
  <td>&nbsp;&nbsp;Faulted&nbsp;&nbsp;</td>
  <td>&nbsp;&nbsp;The job failed to start or threw an unhandled error during execution &nbsp;&nbsp;</td>
</tr>
<tr>
  <td>&nbsp;&nbsp;Stopping&nbsp;&nbsp;</td>
  <td>&nbsp;&nbsp;Triggered by clicking the Stop button is pressed in Orchestrator &nbsp;&nbsp;</td>
</tr>
<tr>
  <td>&nbsp;&nbsp;Terminating&nbsp;&nbsp;</td>
  <td>&nbsp;&nbsp;Triggered by clicking the Kill button in Orchestrator &nbsp;&nbsp;</td>
</tr>
<tr>
  <td>&nbsp;&nbsp;Suspended&nbsp;&nbsp;</td>
  <td>&nbsp;&nbsp;Triggered with the purpose of allowing user intervention or completion of an intermediate process &nbsp;&nbsp;</td>
</tr>
<tr>
  <td>&nbsp;&nbsp;Resumed&nbsp;&nbsp;</td>
  <td>&nbsp;&nbsp;Triggered when the job transitions from the suspended state after user task completion or completion of an intermediate process  &nbsp;&nbsp;</td>
</tr>
<tr>
  <td>&nbsp;&nbsp;Stopped&nbsp;&nbsp;</td>
  <td>&nbsp;&nbsp;A job is in this state if it stopped by using the Kill button, or by canceling it from the system tray before it finished executing and no errors were throws &nbsp;&nbsp;</td>
</tr>
 </table>
                                                                
### UiPath Job Deletion

If your goal is to terminate or delete an RPA job in UiPath Orchestrator, you will require administrative access and may have to look at killing any rogue jobs or UiPath processes that are running.

<div class="row">
	
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card  w-100">
            <div class="card-header">
            UiPath on Twitter
            </div>

            <div class="card-body">
<!-- **************************** -->            
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Which <a href="https://twitter.com/UiPath?ref_src=twsrc%5Etfw">@UiPath</a> job status will prevent the deletion of an associated <a href="https://twitter.com/hashtag/RPA?src=hash&amp;ref_src=twsrc%5Etfw">#RPA</a> robot in Orchestrator? It&#39;s a commonly asked <a href="https://twitter.com/hashtag/UiPathCertification?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathCertification</a> question. Will you get it right?<a href="https://twitter.com/hashtag/UiPathCertified?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathCertified</a> <a href="https://twitter.com/hashtag/UiPathAssociate?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathAssociate</a> <a href="https://twitter.com/hashtag/UiPathOrchestrator?src=hash&amp;ref_src=twsrc%5Etfw">#UiPathOrchestrator</a><a href="https://t.co/dCbJOjvdGi">https://t.co/dCbJOjvdGi</a> <a href="https://t.co/Zfi6zMmZ7R">pic.twitter.com/Zfi6zMmZ7R</a></p>&mdash; rpacertified (@rpacertified) <a href="https://twitter.com/rpacertified/status/1380671881724956674?ref_src=twsrc%5Etfw">April 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<!-- **************************** -->   
            
            
            </div>
        </div>
    </div>
	
	<div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card w-100">
            <div class="card-header">
            UiPath Orchestrator Tutorial on YouTube
            </div>

            <div class="card-body">
	    
	<p>Here's how to take UiPath Orchestrator skills to the next level.</p>
	<p>Check out this UiPath Youtube tutorial from <a href="http://www.twitter.com/cameronmcnz">@cameronmcnz</a>.	 </p>  
	    
<p/>	    
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/db3uqUmI3dI"></iframe>
</div>
<p/>
<p>#UiPath #UiPathCertified #RPACertified #RPA #RPACertification #UiPathTutorial</p>
            </div>
        </div>
    </div>
	
</div>


For more information on Orchestrator job states, check out the <a href="https://docs.uipath.com/orchestrator/docs/job-states">documentation</a>
