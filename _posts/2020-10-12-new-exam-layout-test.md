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
 //var exam = new Exam(questionBank);
 //console.log(exam);
 
 
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
 //console.log(exam); 
 var questionNumber = 0;
 displayQuestion(0);
 document.getElementById("question-jumper").innerHTML;
 let buttons = "";
 for (i = 0; i < exam.questions.length; i++) {
	var aTag = document.createElement('a');
	aTag.setAttribute('onClick','displayQuestion(\''+ i + '\')');
	aTag.setAttribute('class','btn btn-info mr-2');
	aTag.setAttribute('id', 'jumpTo'+i);
	aTag.innerHTML = "" + (i+1);
	document.getElementById("question-jumper").append(aTag);
 }
});
</script>