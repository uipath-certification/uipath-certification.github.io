---
layout: practice-test
author: Serge
title: Attended vs Unattened Uipath Robots Quiz
blurb: You need to know the difference between attended and unattended robots to pass the UiPath Associate Exam.
canonical: https://www.rpacertified.com//2020/11/11/unattended-robots-when-to-use.html
---

<script>
var exam = null;
var questionNumber = 0;

window.addEventListener('load', function () {

 var questionBank = localStorage.getItem("questions");
 //console.log("The size is: " + questionBank.length);
 questionBank = JSON.parse(questionBank);
 questionBank = questionBank.slice(26,32);
 
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
