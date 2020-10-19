---
layout: practice-test
author: Serge
title: UiPath Mock exam on workflow, sequences and flowcharts
blurb: Test yourself to see if you know when to use a UiPath Studio sequence vs flowchart project?
---
<script>
var exam = null;
var questionNumber = 0;

window.addEventListener('load', function () {

 var questionBank = localStorage.getItem("questions");
 //console.log("The size is: " + questionBank.length);
 questionBank = JSON.parse(questionBank);
 questionBank = questionBank.slice(20,25);
 
 try {
  exam = new Exam(questionBank);
 }
 catch(err) {
   console.log("Error creating exam! " + err.message);
 }

 displayQuestion(questionNumber);
 initializeQuestionJumper();
 
});
</script>
