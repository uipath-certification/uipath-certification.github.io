---
layout: practice-test
author: Serge
title: This is a test of the new Exam layout
blurb: Testing the new exam layout.
---
<script>
   window.addEventListener('load', function () {
   
     var questionBank = localStorage.getItem("questions");
     console.log("Questions after pull " + questionBank);
     var exam = new Exam(questionBank);
     console.log(exam);
     var questionNumber = 0;
	 
   	 console.log("The size is: " + questionBank.length);
   	 questionBank = examQuestions.slice(9,12);
	 
	 try {
	  alert("Starting to create the exam");
      var exam = new Exam(questionBank);
	  
      console.log("That worked without parsing the exam!");
     }
     catch(err) {
	   console.log(err.message);
       console.log("Not giving up! Parsing now and passing...");
       questionBank = JSON.parse(questionBank);
       var exam = new Exam(questionBank)
 
     }
     console.log(exam); 
   
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