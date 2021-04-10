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

Question: Which job status(es) will prevent the deletion of an associated robot?

 - [X] &nbsp;  Running and Pending
 - [ ] &nbsp;  Faulted and Pending
 - [ ] &nbsp;  Suspended and Stopped
 - [ ] &nbsp;  Running Only

## Answer

If the UiPath job status is _running_ or _pending,_ the associated <a href="https://www.rpacertified.com/2020/09/09/orc-available-functions-for-attended-robot.html">UiPath Robot</a> cannot be deleted from UiPath Orchestrator. So option A is correct.

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

What do these UiPath robot job statuses mean? This table provides a bit more detail:

<table border="1" class="table table-striped">
<tr>
  <th class="table-primary"> Job Status  </th>
  <th class="table-primary"> UiPath Orchestrator Job Status Detail  </th>
</tr>
<tr>
  <td> Pending </td>
  <td> Job is queued on the same Robot or it is trying to establish a connection with the Robot. Note that only different jobs on the same Robot can be queued.  </td>
</tr>
<tr>
  <td> Running </td>
  <td> The UiPath robot has started executing the designated process.  </td>
</tr>
<tr>
  <td> Successful </td>
  <td> The UiPath robot has finished running or has been stopped manually  </td>
</tr>
<tr>
  <td> Faulted </td>
  <td> The UiPath job failed to start or threw an unhandled error during execution  </td>
</tr>
<tr>
  <td> Stopping </td>
  <td> This job status is triggered by clicking the Stop button.  </td>
</tr>
<tr>
  <td> Terminating </td>
  <td> Ths UiPath Orchestrator job status is triggered when the RPA admin clicks the Kill button in Uipath Orchestrator  </td>
</tr>
<tr>
  <td> Suspended </td>
  <td> This job status is triggered to allow user intervention or completion of an intermediate automation process  </td>
</tr>
<tr>
  <td> Resumed </td>
  <td> Triggered when the UiPath job transitions from a suspended state after user task completion or completion of an intermediate process   </td>
</tr>
<tr>
  <td> Stopped </td>
  <td> A job is in this state if it stopped by using the Kill button, or by canceling it from the system tray before it finished executing and no errors were throws  </td>
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
	    
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Here&#39;s a great way to learn more about <a href="https://twitter.com/UiPath?ref_src=twsrc%5Etfw">@UiPath</a> Orchestrator and how attended and unattended <a href="https://twitter.com/hashtag/RPA?src=hash&amp;ref_src=twsrc%5Etfw">#RPA</a> robots are managed.<a href="https://twitter.com/hashtag/RPATools?src=hash&amp;ref_src=twsrc%5Etfw">#RPATools</a> <a href="https://twitter.com/hashtag/RPACloud?src=hash&amp;ref_src=twsrc%5Etfw">#RPACloud</a> <a href="https://twitter.com/hashtag/DevOps?src=hash&amp;ref_src=twsrc%5Etfw">#DevOps</a> <a href="https://twitter.com/hashtag/automation?src=hash&amp;ref_src=twsrc%5Etfw">#automation</a> <a href="https://twitter.com/hashtag/uipathcertified?src=hash&amp;ref_src=twsrc%5Etfw">#uipathcertified</a> <a href="https://twitter.com/hashtag/uipathassociate?src=hash&amp;ref_src=twsrc%5Etfw">#uipathassociate</a> <a href="https://twitter.com/hashtag/uipathcertification?src=hash&amp;ref_src=twsrc%5Etfw">#uipathcertification</a><a href="https://t.co/dDNogVY4lr">https://t.co/dDNogVY4lr</a> via <a href="https://twitter.com/YouTube?ref_src=twsrc%5Etfw">@YouTube</a></p>&mdash; Cameron McKenzie (@cameronmcnz) <a href="https://twitter.com/cameronmcnz/status/1380675000802418688?ref_src=twsrc%5Etfw">April 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        </div>
    </div>
	
</div>


For more information on Orchestrator job states, check out the <a href="https://docs.uipath.com/orchestrator/docs/job-states">documentation</a>

<iframe src="https://www.youtube.com/embed/xtpk2RORXDA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
