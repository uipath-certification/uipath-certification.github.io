---
layout: practice-test
author: Serge
title: UiPath Mock Exam on Git, Packages and Debugging Studio
blurb: How well do you know UiPath Studio debugging? This UiPath Certification Practice Test will help you guage your readiness to take the exam.
---
<script>
var exam = null;
var questionNumber = 0;

window.addEventListener('load', function () {

 var questionBank = localStorage.getItem("questions");
 //console.log("The size is: " + questionBank.length);
 questionBank = JSON.parse(questionBank);
 questionBank = questionBank.slice(39,50);
 
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
