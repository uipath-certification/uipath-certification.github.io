---
layout: answered-question
author: Serge
title: Which job status(es) will prevent the deletion of an associated robot?
blurb: This Uipath test question checks if you know which status prefents Orchestrator robot deletion.
difficulty: 6
objective: 8.1 Describe how to provision attended and unattended robots to UiPath Orchestrator
canonical: https://www.rpacertified.com//2020/09/09/orc-job-status-prevent-robot-deletion.html
keywords: job status, UiPath jobs, UiPath Status, UiPath Certification Status, UiPath Cert Jobs
---

<h1>UiPath Job Status</h1>

Question:  Which job status(es) will prevent the deletion of an associated robot?

 - [X] &nbsp;  Running and Pending
 - [ ] &nbsp;  Faulted and Pending
 - [ ] &nbsp;  Suspended and Stopped
 - [ ] &nbsp;  Running Only

## Answer

Option A is correct.
| Column 1 Header | Column 2 Header | Column 3 Header |
| --------------- | --------------- | --------------- |
| Row 1 Column 1 | Row 1 Column 2 | Row 1 Column 3 |
| Row 2 Column 1 | Row 2 Column 2 | Row 2 Column 3 |
| Row 3 Column 1 | Row 3 Column 2 | Row 3 Column 3 |

If anything is in use, you cannot delete it.  All the other options the robot is in use in some capacity

As a refresher, here are all the possible job states:

<table border="1">
<tr>
  <th>&nbsp;&nbsp;Job State&nbsp;&nbsp;</th>
  <th>&nbsp;&nbsp;Description &nbsp;&nbsp;</th>
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

If your goal is to terminate/delete the job, you will require administrative access and may have to look at killing any rogue jobs/processes. 

For more information on Orchestrator job states, please see this <a href="https://docs.uipath.com/orchestrator/docs/job-states">link</a>
