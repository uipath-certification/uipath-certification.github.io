---
layout: default
author: Serge
title: Variable Names Quiz
blurb: Here's a quiz on UiPath variable names.
---
<div class="container">
<script>
  class Exam {
    constructor(examQuestions) {
  
    this.graded=false;
  	//console.log("The size is: " + examQuestions.length);
  	examQuestions = JSON.parse(examQuestions);
  	console.log("The size is: " + examQuestions.length);
  	examQuestions = examQuestions.slice(10,15);
  	console.log("In constructor with these: " + examQuestions);
        this.questions = new Array();
  		let i = 0;
  		//console.log("Start of for loop" + questions.length);
  		//alert("About to enter for loop");
  	  	for (i = 0; i < examQuestions.length; i++) {
  			let id = examQuestions[i].id;
  			//alert(id);
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
      this.correctCount = 0;
	    let i = 0;
	    for (i = 0; i < options.length; i++) {
		    if (options[i].correct) {
		    this.correctCount++;
		  }
      console.log(this.correctCount);
	    console.log(this.isMultipleChoice());
	}
    }
    isMultipleChoice() {
      return this.correctCount > 1;
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
  	document.getElementById("query").innerHTML = exam.questions[questionNumber].query + " (choose " + exam.questions[questionNumber].correctCount + ")";;
  	document.getElementById("labelOption0").innerHTML = exam.questions[questionNumber].options[0].text;
  	document.getElementById("labelOption1").innerHTML = exam.questions[questionNumber].options[1].text;
  	document.getElementById("labelOption2").innerHTML = exam.questions[questionNumber].options[2].text;
  	document.getElementById("labelOption3").innerHTML = exam.questions[questionNumber].options[3].text;
  
  	document.getElementById("answerLink").innerHTML = exam.questions[questionNumber].query;
  	document.getElementById("answerLink").setAttribute("href", exam.questions[questionNumber].answer);
  	
  
  	
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
    
    if (exam.graded) {
		  highlightCorrectAnswers();
	  }
  	
  }
  
  highlightCorrectAnswers = function() {

		let i = 0;
		for (i = 0; i < exam.questions[questionNumber].options.length; i++) {
			if (exam.questions[questionNumber].options[i].correct) {
				console.log('outerOptionDiv' + i);
				document.getElementById('outerOptionDiv' + i).classList.add("class", "border");
				document.getElementById('outerOptionDiv' + i).classList.add("class", "border-success");
			} else {
				document.getElementById('outerOptionDiv' + i).classList.remove("class", "border");
				document.getElementById('outerOptionDiv' + i).classList.remove("class", "border-success");
			}
		}

}
  
  gradeExam = function(){
  
    exam.graded=true;
  
  	//Make sure changes on the question they asked for the grade to be there.
  	exam.questions[questionNumber].options[0].checked = document.getElementById("option0").checked;
  	exam.questions[questionNumber].options[1].checked = document.getElementById("option1").checked;
  	exam.questions[questionNumber].options[2].checked = document.getElementById("option2").checked;
  	exam.questions[questionNumber].options[3].checked = document.getElementById("option3").checked;
  
  	let checkboxes = document.querySelectorAll(".option-radio");
	  let i = 0; 
	  for (i=0; i<checkboxes.length;i++) {
		  checkboxes[i].disabled=true;
	  } 
  
  
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
    highlightCorrectAnswers();
  	document.getElementById('score').innerHTML = 'You got '  + correctCount + ' out of ' + exam.questions.length + ' correct.';
    document.getElementById('finish').setAttribute('class', 'invisible');
  	
  }
  
</script>
<a href="/questions.html">Initialize questions if none appear and come back</a>
<br/><br/>

<div class="container">
  <div class="card">
    <div class="card-header" id="questionNumber"></div>
    <div class="card-body">
      <h3 class="card-title" id="query"></h3>
      <div class="form-check my-2" id="outerOptionDiv0">
        <input class="form-check-input  option-radio" type="radio" name="optionRadios" id="option0" value="option0">
        <label class="form-check-label" for="option0" id="labelOption0">
        </label>
      </div>
      <div class="form-check my-2" id="outerOptionDiv1">
        <input class="form-check-input  option-radio" type="radio" name="optionRadios" id="option1" value="option1">
        <label class="form-check-label" for="option1" id="labelOption1">
        </label>
      </div>
      <div class="form-check my-2" id="outerOptionDiv2">
        <input class="form-check-input  option-radio" type="radio" name="optionRadios" id="option2" value="option2">
        <label class="form-check-label" for="option2" id="labelOption2">
        </label>
      </div>
      <div class="form-check my-2" id="outerOptionDiv3">
        <input class="form-check-input  option-radio" type="radio" name="optionRadios" id="option3" value="option3">
        <label class="form-check-label" for="option3" id="labelOption3">
        </label>
      </div>
      <div>
        <p class="card-text mt-3">
          <a href="#" id="previous" class="btn btn-primary" onclick="navigateQuestions('previous')">&lt;&lt; Previous</a>
          <a href="#" id="next" class="btn btn-primary" onclick="navigateQuestions('next')">Next &gt;&gt;</a> 
          <a href="#" id="finish" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="gradeExam()">Finish</a>
        </p>
        <div></div>
      </div>
    </div>
  </div>
    <div class="card mt-2">
      <div class="card-header" id="questionJumperTitle">
        Question Jumper
      </div>
      <div class="card-body">
        <h3 class="card-title" id="questionJumperCardTitle"></h3>
        <p class="card-text"><span id="question-jumper"> </span></p>
      </div>
    </div>
    <div class="card mt-2">
      <div class="card-header" id="answerCard">
        <a href="#" onclick="document.getElementById('answerCardBody').classList.toggle('collapse');" >Nothing to see here</a>
      </div>
      <div class="card-body collapse" id="answerCardBody">
        <h3 class="card-title" id="answer"></h3>
	<p>Click this button to cheat.</p>
	<a href="#" id="cheat" class="btn btn-warning" onclick="highlightCorrectAnswers()">Cheat</a>
        <p class="card-text">If that's not enough, here's the detailed UiPath Certification question answer.</p>
        <p class="card-text"><a href="#" id="answerLink" target="_blank">Answer opens in a new window.</a></p>
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
