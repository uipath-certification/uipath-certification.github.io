---
layout: practice-test
author: Serge
title: Kebab vs Camel vs Pascal Case in UiPath Studio
blurb: Do you know the difference between kebab case and camel case?
canonical: https://www.rpacertified.com//2020/10/12/kebab-camel-pascal-case-quiz.html
---
<script>
var exam = null;
var questionNumber = 0;

window.addEventListener('load', function () {

 var questionBank = localStorage.getItem("questions");
 //console.log("The size is: " + questionBank.length);
 questionBank = JSON.parse(questionBank);
 questionBank = questionBank.slice(11,16);
 
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
