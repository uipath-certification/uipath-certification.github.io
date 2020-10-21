---
layout: answered-question
author: Serge
title: Worflow Diff vs Compare Files in UiPath Studio
blurb: Know the difference between Compare Files and Workflow Diff for the UiPath Certification Exam
difficulty: 8
objective: 2.3 Explain the significance of connecting an automation project to the version control solution
canonical: https://www.rpacertified.com//2020/11/11/debug-compare-files-studio.html
---
<h1>UiPath Compare Files tool</h1>

Question: What is the name of the tool provided by UiPath Studio to compare file versions stored in a Git or GitHub repo?

- [ ] &nbsp;  Workflow Diff
- [ ] &nbsp;  Diff Compare
- [ ] &nbsp;  Workflow Compare
- [x] &nbsp;  Compare Files

## Answer

Options d is correct.

Don't confuse UiPath Workflow Diff with Studio's Compare Files feature.

The UiPath Compare Files window allows you to compare the content of different .xaml files or project.json files. It is not used to compare versions of the <em>same</em> file.

I'm not sure how deep the UiPath Associate Exam gets into Compare Files and Workflow Diff, but it is definitely fair game for the UiPath Developer Certification Exam. This question is marked with a difficulty of 8 to reflect that.


> The UiPath Studio Compare Files pany is used to compare differences between package.json or .xaml files, be it a library or process processes or libraries, assuming the items being compared have comparable workflows.


<img src="https://files.readme.io/d5a5052-compare_files_window.png" class="img-fluid" alt="UiPath Compare Files Tool.">

There's more data about Studio's Compare Files tool in the UiPath <a href="https://docs.uipath.com/studio/docs/comparing-files">docs</a>
