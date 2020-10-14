---
layout: practice-test
author: Serge
title: UiPath Variable Naming Conventions
blurb: UiPath Certification questions and answers to test yourself on the rules UiPath Studio analyzer uses to validate method and variable names.
---
<script>
var exam = null;
var questionNumber = 0;

window.addEventListener('load', function () {

 var questionBank = localStorage.getItem("questions");
 //console.log("The size is: " + questionBank.length);
 questionBank = JSON.parse(questionBank);
 questionBank = questionBank.slice(16,21);
 
 try {
  exam = new Exam(questionBank);
  //console.log("Exam created without parsing the exam!");
 }
 catch(err) {
   console.log("Error creating exam! " + err.message);
 }

 displayQuestion(questionNumber);
 initializeQuestionJumper();
 
});
</script>
