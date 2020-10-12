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
 console.log("Questions after pull " + questionBank);
 console.log("The size is: " + questionBank.length);
 questionBank = JSON.parse(questionBank);
 questionBank = questionBank.slice(11,13);
 console.log("Here is the questionBank object: " + questionBank);
 console.log("This JSON should have three records  " + questionBank.length);
 
 try {
  alert("Starting to create the exam");
  exam = new Exam(questionBank);
  console.log("That worked without parsing the exam!");
 }
 catch(err) {
   console.log(err.message);
   console.log("Not giving up! Parsing now and passing...");
   exam = new Exam(questionBank)
 }

 displayQuestion(questionNumber);
 initializeQuestionJumper();
 
});
</script>