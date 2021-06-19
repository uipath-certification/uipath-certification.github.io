import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Exam extends React.Component {
	
  constructor(props) {
    super(props);
	let jsonQuestions = require('./questions.json');
	let examQuestions = jsonQuestions.slice(this.props.start, this.props.end);
	
	let examHistory = this.getExamHistory();
    this.state = {
      graded: false,
	  start: this.props.start,
	  end: this.props.end,
	  history: examHistory,
	  questions: examQuestions,
	  currentQuestionNumber: 0,
	  currentQuestion: examQuestions[0]
    };
	console.log("Number of Questions: " + this.state.questions.length);
	console.log("Here is the history state: " + JSON.stringify(this.state.history));
	
  }
	nextQuestion() {
		console.log("In next question: "+ this.state.currentQuestionNumber);
		let currentIndex = this.state.currentQuestionNumber;
		this.setState({currentQuestionNumber: currentIndex + 1});
		this.setState({currentQuestion: this.state.questions[currentIndex + 1]});
		console.log("End next question: "+ this.state.currentQuestionNumber);
		
		console.log("Selected?: "+ this.state.currentQuestion.options[0].selected);
	}
	
	previousQuestion() {
		let currentIndex = this.state.currentQuestionNumber;
		this.setState({currentQuestionNumber: currentIndex - 1});
		this.setState({currentQuestion: this.state.questions[currentIndex-1]});
	}
	
	getQuestion(questionNumber) {
		this.setState({currentQuestionNumber: questionNumber});
		this.setState({currentQuestion: this.state.questions[questionNumber]});
	}
	
	gradeTheExam() {
		console.log("In Grade Exam");
		let examHistory = this.getExamHistory();
		console.log("Here is the history: " + JSON.stringify(this.state.history));
		console.log(this.state.history.exams);
		examHistory.exams.push(this.state.questions);
		this.setState({history: examHistory})
		localStorage.setItem('examHistory', JSON.stringify(examHistory));
		console.log("Here is the history again: " + JSON.stringify(this.state.history));
		return "999";
	}
	
	getExamHistory() {
		console.log("Trying toget Exam History");
		let object = localStorage.getItem('examHistory');
		let examHistory = "";
		
		if (object == null) {
			console.log("No history in local storage");
			examHistory = {name:"Exam History"};
			let exams = [];
			examHistory.exams = exams;
			localStorage.setItem('examHistory', JSON.stringify(examHistory));
			this.setState({history: examHistory})
		} else {
			examHistory = JSON.parse(object);
		}
		
		console.log(examHistory);
		console.log("Number of exams in history: " + examHistory.exams.length);
		console.log("Here is the exam history: \n\n" + JSON.stringify(examHistory));
		return examHistory;
	}
	
	
	getCorrectCount() {
		//console.log("Get Correct Count.");
		return "999";
	}
	
	clearLocalStorage() {
		alert("About to clear");
		console.log("In The Clear Of Localstorage");
		localStorage.clear('examHistory');
		this.setState({history: this.getExamHistory()});
	}
	
	toggleOption(index) {
		console.log("In Toggle Option");
		let question = this.state.currentQuestion;
		let examQuestions = this.state.questions;
		//console.log(question);
		//console.log(index);
		let flag = question.options[index].selected;
		question.options[index].selected = !flag;		
		examQuestions[this.state.currentQuestionNumber] = question;
		this.setState({currentQuestion: question});
		this.setState({questions: examQuestions});
	}
		
  
  render() { 
    return (


<div class="container">
   <div class="card">
      <div class="card-header" id="questionNumber">
	  Question {this.state.currentQuestionNumber + 1}
	  </div>
      <div class="card-body">
         <h3 class="card-title" id="query"> 
  {this.state.currentQuestion.query} 
  (choose {this.getCorrectCount()})
		 </h3>
         <div class="form-check my-2" id="outerOptionDiv0">
            <input class="form-check-input  option-radio" type="checkbox" name="optionRadios" id="option0" value="option0"
			defaultChecked={this.state.currentQuestion.options[0].selected} 
			onClick={() => this.toggleOption(0)} key={Math.random()}
			></input>
            <label class="form-check-label" for="option0" id="labelOption0">
			{this.state.currentQuestion.options[0].text} 
			</label>
         </div>
         <div class="form-check my-2" id="outerOptionDiv1">
            <input class="form-check-input  option-radio" type="checkbox" name="optionRadios" id="option1" value="option1"
			defaultChecked={this.state.currentQuestion.options[1].selected} 
			onClick={() => this.toggleOption(1)} key={Math.random()}
			></input>
            <label class="form-check-label" for="option1" id="labelOption1">
			{this.state.currentQuestion.options[1].text} 
			</label>
         </div>
         <div class="form-check my-2" id="outerOptionDiv2">
            <input class="form-check-input  option-radio" type="checkbox" name="optionRadios" id="option2" value="option2"
			defaultChecked={this.state.currentQuestion.options[2].selected} 
			onClick={() => this.toggleOption(2)} key={Math.random()}
			></input>
            <label class="form-check-label" for="option2" id="labelOption2">
			{this.state.currentQuestion.options[2].text} 
			</label>
         </div>
		 
         <div class="form-check my-2" id="outerOptionDiv3">
            <input class="form-check-input  option-radio" type="checkbox" name="optionRadios" id="option3" value="option3"
			defaultChecked={this.state.currentQuestion.options[3].selected} 
			onClick={() => this.toggleOption(3)} key={Math.random()}
			></input>
            <label class="form-check-label" for="option3" id="labelOption3">
			{this.state.currentQuestion.options[3].text} 
			</label>
         </div>
         <div>
            <p class="card-text mt-3">
               <a id="previous" class="enabled btn btn-primary"
			   onClick={() => this.previousQuestion()}
			   >&lt;&lt; Previous</a>
               <a id="next" class="enabled btn btn-primary" 
			   onClick={() => this.nextQuestion()}
			   >Next &gt;&gt;</a> 
               <a id="finish" class="btn btn-primary"
			   onClick={() => this.gradeTheExam()}
			   >Finish</a>
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
         <h3 class="card-title" id="questionJumperCardTitle">Feature Incomplete</h3>
         <p class="card-text"></p>
      </div>
   </div>
   
   <div class="card mt-2">
      <div class="card-header" id="localStorageTitle">
         Local Storagee
      </div>
      <div class="card-body">
         <h3 class="card-title" id="localStorageCardTitle">What's in Storage?</h3>
		 <p>Number of exams in your history: {this.state.history.exams.length} </p>
		 <a id="clearls" class="btn btn-primary"
			   onClick={() => this.clearLocalStorage()}
			   >Clear Local Storage</a>
		 <div><pre key={Math.random()}> { JSON.stringify(this.state.history, "", "\t") } </pre></div>
         <p class="card-text">
		 </p>
      </div>
   </div>
</div>




    );
  }
}

// ========================================

ReactDOM.render(
  <Exam start="10" end="13"/>,
  document.getElementById('root')
);


