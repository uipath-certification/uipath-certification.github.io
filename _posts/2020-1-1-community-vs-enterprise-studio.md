---
layout: practice-test
author: Serge
title: UiPath Studio Community vs Enterprise Edition
blurb: Easy marks are lost if you don't know the difference between community and enterprise editions of UiPath Studio.
canonical: https://www.rpacertified.com//2020/11/11/uipath-studio-enterprise-vs-community.html
---
<script>
var exam = null;
var questionNumber = 0;

window.addEventListener('load', function () {

 var questionBank = localStorage.getItem("questions");
 //console.log("The size is: " + questionBank.length);
 questionBank = JSON.parse(questionBank);
 questionBank = questionBank.slice(32,39);
 
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
