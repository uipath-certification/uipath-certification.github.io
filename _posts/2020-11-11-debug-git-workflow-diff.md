---
layout: answered-question
author: Serge
title: The UiPath Workflow Diff tool
blurb: What's the easiest way to compare file in Git with UiPath Studio?
difficulty: 6
objective: 2.3 Explain the significance of connecting an automation project to the version control solution
---
<h1>UiPath Workflow Diff tool</h1>

Question: What is the name of the tool provided by UiPath Studio to compare file versions stored in a Git or GitHub repo?

- [x] &nbsp;  Workflow Diff
- [ ] &nbsp;  Diff Compare
- [ ] &nbsp;  Workflow Compare
- [ ] &nbsp;  Compare Files

## Answer

Options a is correct.

I'm a big fan of WinDiff, but that's not included as part of UiPath Studio.

To compare file revisions in your source code management tool from with UiPath Studio, a special tool named UiPath Workflow Diff is provided.

The question specifically talks about UiPath, Git and GitHub, but you can use Workflow Diff with any DVCS tool.

The UiPath's Compare Files tool is a real feature, but it compares separate files in UiPath for differences, as opposed to UiPath's Workflow Diff which compares versions of the same file.

<img src="https://files.readme.io/ff48668-File_Diff.png" class="img-fluid" alt="UiPath Workflow Diff Tool.">

There's more information about Workflow Diff in the UiPath <a href="https://docs.uipath.com/studio/docs/using-file-diff">docs</a>
