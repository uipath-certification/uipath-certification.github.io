---
layout: practice-test
author: Serge
title: This is a test of the new Exam layout
blurb: Testing the new exam layout.
---
<script>
var exam = null;
var questionNumber = 0;

window.addEventListener('load', function () {

 var questionBank = localStorage.getItem("questions");
 console.log("The size is: " + questionBank.length);
 questionBank = JSON.parse(questionBank);
 questionBank = questionBank.slice(11,13);
 
 try {
  exam = new Exam(questionBank);
  console.log("Exam created without parsing the exam!");
 }
 catch(err) {
   console.log("Error creating exam! " + err.message);
 }

 displayQuestion(questionNumber);
 initializeQuestionJumper();
 
});
</script>