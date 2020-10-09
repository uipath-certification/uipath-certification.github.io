---
layout: default
author: Serge
title: Variable Names Quiz
blurb: Here's a quiz on UiPath variable names.
---


<div class="container">


<script>
/*
var questions = [

	{id:1, query:"Which of the following describes the most ideal type of activity to automate with UiPath?", "answer":"test-answer.md",
			options:[
			{text:"Multistep process with many decision points with structured data", correct:false, selected:false}, 
			{text:"Perform Analysis on data and provide", correct:true, selected:false},
			{text:"Varied tasks that rely heavily on user input", correct:false, selected:false},
			{text:"Rule-based process with structured data", correct:false, selected:false}
			],
      "objectives":[
         "1.1",
         "2.2"
      ]},
			
	{query:"A client receives a spreadsheet containing orders. The orders must be input into an internal web-based order system.  Which is the best activity to use?", 
			options:[
			{text:"Sequence", correct:true, selected:false}, 
			{text:"Flowchart", correct:false, selected:false},
			{text:"Learning Machine", correct:false, selected:false},
			{text:"Transactional Process", correct:false, selected:false}
			],
      "objectives":[
         "1.1",
         "2.2"
      ]},


	{query:"Which Activity requires the least amount of parameters?", 
			options:[
			{text:"SMTP", correct:false, selected:false}, 
			{text:"Outlook", correct:true, selected:false},
			{text:"POP3", correct:false, selected:false},
			{text:"Mail", correct:false, selected:false}
			],
      "objectives":[
         "1.1",
         "2.2"
      ]},		
			
	{query:"What happens if you try to save a table using Excel Write Range activity to a file that does not exist?", 
			options:[
			{text:"Throws a “File not found” error", correct:false, selected:false}, 
			{text:"Workflow will wait until the file appears and times out if it doesn’t", correct:false, selected:false},
			{text:"Activity will not run and continue the sequence", correct:false, selected:false},
			{text:"Creates the file and saves the table", correct:true, selected:false}
			],
      "objectives":[
         "1.1",
         "2.2"
      ]},
			
	{query:"When using an Excel Application Scope activity, which activity should be used to sort a table directly in an .xlsx file?", 
			options:[
			{text:"Sequence", correct:false, selected:false}, 
			{text:"Flowchart", correct:false, selected:false},
			{text:"Learning Machine", correct:false, selected:false},
			{text:"Transactional Process", correct:true, selected:false}
			],
      "objectives":[
         "1.1",
         "2.2"
      ]},	
			
	];
*/

class Exam {
    constructor(examQuestions) {
	//console.log("The size is: " + examQuestions.length);
	examQuestions = JSON.parse(examQuestions);
	console.log("The size is: " + examQuestions.length);
	examQuestions = examQuestions.slice(10,15);
	
	console.log("In constructor with these: " + examQuestions);
      this.questions = new Array();
		let i = 0;
		//console.log("Start of for loop" + questions.length);
		alert("About to enter for loop");
	  	for (i = 0; i < examQuestions.length; i++) {
			let id = examQuestions[i].id;
			alert(id);
			let query = examQuestions[i].query;
			let answer = examQuestions[i].answer;
			let options = new Array();
			let objectives = new Array();
			//console.log("Start of j loop" + examQuestions[i].options.length);
			let j = 0;
			for (j = 0; j < examQuestions[i].options.length; j++) {
				let text = examQuestions[i].options[j].text;
				let correct = examQuestions[i].options[j].correct;
				let selected = examQuestions[i].options[j].selected;
				options.push(new Option(text, correct, selected));
				//console.log(text);
				//console.log("Value of j" + j);
			}
			let k = 0;
			for (k = 0; k < examQuestions[i].objectives.length; k++) {
				objectives.push(examQuestions[i].objectives[k]);
				//console.log(k);
			}
			let question = new Question(id, query, answer, options, objectives);
			this.questions.push(question);
			//console.log('Question done');
		}
		//console.log("Done for loop");
  }
}

class Question {
  
  constructor(id, query, answer, options, objectives) {
    this.id=id;
    this.query = query;
    this.answer = answer;
    this.options = options;
    this.objectives = objectives;
  }
  
}
class Option {
  constructor(text, correct, selected) {
    this.text = text;
    this.correct = correct;
    this.selected = selected;
  }
  
   isAnsweredCorrectly() {
    return (this.correct && this.selected);
  }
}

var questions = localStorage.getItem("questions");
  
console.log("Questions after pull " + questions);

var exam = new Exam(questions);
console.log(exam);

var questionNumber = 0;

window.addEventListener('load', function () {
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
})

navigateQuestions = function(number){
console.log('navigateQuestions' + number);
	if(number=='next') {
		number = questionNumber + 1;
	}
	if(number=='previous') {
		number = questionNumber - 1;
	}
	displayQuestion(number);
}

displayQuestion = function(number){

	console.log("Number to display is " + number);

	exam.questions[questionNumber].options[0].checked = document.getElementById("option0").checked;
	exam.questions[questionNumber].options[1].checked = document.getElementById("option1").checked;
	exam.questions[questionNumber].options[2].checked = document.getElementById("option2").checked;
	exam.questions[questionNumber].options[3].checked = document.getElementById("option3").checked;

    questionNumber = number;

	questionNumber = parseInt(number, 10);

	let questionNumberDisplay = parseInt(number, 10) + 1;
	document.getElementById("questionNumber").innerHTML = "Question " + questionNumberDisplay;
	document.getElementById("query").innerHTML = exam.questions[questionNumber].query;
	document.getElementById("labelOption0").innerHTML = exam.questions[questionNumber].options[0].text;
	document.getElementById("labelOption1").innerHTML = exam.questions[questionNumber].options[1].text;
	document.getElementById("labelOption2").innerHTML = exam.questions[questionNumber].options[2].text;
	document.getElementById("labelOption3").innerHTML = exam.questions[questionNumber].options[3].text;
	

	
	document.getElementById("option0").checked = exam.questions[questionNumber].options[0].checked;
	document.getElementById("option1").checked = exam.questions[questionNumber].options[1].checked;
	document.getElementById("option2").checked = exam.questions[questionNumber].options[2].checked;
	document.getElementById("option3").checked = exam.questions[questionNumber].options[3].checked;	
	
	var radios = document.querySelectorAll('input[type="radio"]:checked');
	var value = radios.length>0? radios[0].value: null;
	
	
	document.getElementById("previous").setAttribute("class", "enabled btn btn-primary");
	document.getElementById("next").setAttribute("class", "enabled btn btn-primary");
	if (questionNumber==0) {
		document.getElementById("previous").setAttribute("class", "disabled btn btn-primary");
	}
	if (questionNumber == (exam.questions.length-1)) {
		document.getElementById("next").setAttribute("class", "disabled btn btn-primary");
	}
	
}

gradeExam = function(){

	//Make sure changes on the question they asked for the grade to be there.
	exam.questions[questionNumber].options[0].checked = document.getElementById("option0").checked;
	exam.questions[questionNumber].options[1].checked = document.getElementById("option1").checked;
	exam.questions[questionNumber].options[2].checked = document.getElementById("option2").checked;
	exam.questions[questionNumber].options[3].checked = document.getElementById("option3").checked;

	let correctCount = 0; 
	for (i = 0; i < exam.questions.length; i++) {
		let correct = true;
		for (j = 0; j < exam.questions[i].options.length; j++) {
			correct = (exam.questions[i].options[j].checked == exam.questions[i].options[j].correct);
			if (correct == false) {
				
				document.getElementById('jumpTo'+i).setAttribute('class', 'btn btn-danger  mr-2');
				break;
			} else {
				document.getElementById('jumpTo'+i).setAttribute('class', 'btn btn-success  mr-2');
			}
		}
		if (correct) {correctCount++}
	}
	//alert(correctCount);
	document.getElementById('score').innerHTML = 'You got '  + correctCount + ' out of ' + questions.length + ' correct.';
	
}


</script>

<br/><br/>


<div class="container">

<div class="card">
  <div class="card-header" id="questionNumber">
    
  </div>
  <div class="card-body">
    <h3 class="card-title" id="query"></h3>
	
	
	
<div class="form-check">
  <input class="form-check-input" type="radio" name="optionRadios" id="option0" value="option0">
  <label class="form-check-label" for="option0" id="labelOption0">
    
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="optionRadios" id="option1" value="option1">
  <label class="form-check-label" for="option1" id="labelOption1">
    
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="optionRadios" id="option2" value="option2">
  <label class="form-check-label" for="option2" id="labelOption2">
    
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="optionRadios" id="option3" value="option3">
  <label class="form-check-label" for="option3" id="labelOption3">
    
  </label>
</div>
<div>
<p class="card-text">

    <a href="#" id="previous" class="btn btn-primary" onclick="navigateQuestions('previous')">&lt;&lt; Previous</a>
	
	<a href="#" id="next" class="btn btn-primary" onclick="navigateQuestions('next')">Next &gt;&gt;</a>
	<a href="#" id="finish" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="gradeExam()">Finish</a>
	</div>
	
	
</p>
<div>

</span>
</div>	
	
	
  </div>
</div>

<div class="card mt-2">
  <div class="card-header" id="questionJumperTitle">
    Question Jumper
  </div>
  <div class="card-body">
    <h3 class="card-title" id="query"></h3>
    <p class="card-text"><small class="text-muted"><span id="question-jumper"></small></p>  
 </div>
</div>
	
	
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Quiz Results</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id="score" class="modal-body">

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

</div>
