import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Components/Timer';
import Question from './Components/Question';
import Modal from './Components/Modal';
import './Components/modal.css';
import ExamHistory from './Components/ExamHistory';
import JumperButton from './Components/JumperButton';
import QuestionsPanel from './Components/QuestionsPanel';
import QuestionJumperPanel from './Components/QuestionJumperPanel';



class Exam extends React.Component {
	
  constructor(props) {
    super(props);
    this.saveQuestionState = this.saveQuestionState.bind(this);
	this.gradeTheExam = this.gradeTheExam.bind(this);
	this.setCurrentQuestion = this.setCurrentQuestion.bind(this);
	
	this.showGrade = false;
	this.elapsedTime=0;
	
	let examQuestions = require('./questions.json').slice(this.props.start, this.props.end);
    this.state = {
      graded: false,
	  questions: require('./questions.json').slice(this.props.start, this.props.end),
	  currentQuestionNumber: 0,
	  cheating: false,
    };
  }

    setCurrentQuestion(position) {
		this.setState({currentQuestionNumber: position});
	}
	
   saveQuestionState(question){
	  var updatedExamQuestions = this.state.questions;
	  updatedExamQuestions[this.currentQuestionNumber] = question;  
      this.setState({questions: updatedExamQuestions});
   }
	
	isQuestionAnsweredCorrectly(question) {
        let i = 0;
		for (i = 0; i < question.options.length; i++) {
           if ( (question.options[i].correct) != (question.options[i].selected) ) {
			 return false;
		   }
		}
		return true;
	}
	
	getCorrectCount() {
		let correctCount = 0;
		let i = 0;
		for (i = 0; i < this.state.questions.length; i++) {
           if ( this.isQuestionAnsweredCorrectly(this.state.questions[i]) ) {
			 correctCount++;
		   }
		}
		return correctCount;
	}

	gradeTheExam() {
		
		let correctCount = this.getCorrectCount();
		let examHistory = this.getExamHistory();
		examHistory.exams.push(this.state.questions);
		localStorage.setItem('examHistory', JSON.stringify(examHistory));
		this.setState({graded: true}, () =>{});
	    this.showGrade = true;
		alert("You scored " + correctCount + " out of " + this.state.questions.length + ".");
	}
	
	getExamHistory() {
      try{
         let object = localStorage.getItem('examHistory');
         let examHistory = "";
         if (object == null) {
            examHistory = {name:"Exam History"};
            let exams = [];
            examHistory.exams = exams;
            localStorage.setItem('examHistory', JSON.stringify(examHistory));
         } else {
            examHistory = JSON.parse(object);
         }
         return examHistory;
      }catch(e){
         console.log(e);
      }
		
	}

  componentDidUpdate(){
	 this.showGrade = false;
  }
  
  toggleCheat(){
	 this.setState({cheating: !this.state.cheating});
  }


  render() { 
    return (

			<div class="container">

			<div show={this.showGrade} >
			  <p>Your grade is {this.getCorrectCount()} out of {this.state.questions.length}. Would you like to <a onClick={()=>this.toggleCheat()}>cheat?</a></p>
			</div>

			<QuestionsPanel questions={this.state.questions} currentQuestionNumber = {this.state.currentQuestionNumber} disabled={this.state.graded} cheating={this.state.cheating}
							saveQuestionState={this.saveQuestionState}  setCurrentQuestion={this.setCurrentQuestion} gradeTheExam = {this.gradeTheExam} />

			<QuestionJumperPanel setCurrentQuestion={this.setCurrentQuestion} questions={this.state.questions}/>

			<ExamHistory/>

			</div>

    );
  }
}

ReactDOM.render(
  <Exam start="25" end="30"/>,
  document.getElementById('root')
);

