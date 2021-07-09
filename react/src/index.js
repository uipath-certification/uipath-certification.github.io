import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Components/Timer';
import Question from './Components/Question';
import Modal from './Components/Modal';
import './Components/modal.css';
import ExamHistory from './Components/ExamHistory';


class Exam extends React.Component {
	
  constructor(props) {
    super(props);
    this.saveQuestionState = this.saveQuestionState.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
	
	let examQuestions = require('./questions.json').slice(this.props.start, this.props.end);
    this.state = {
      graded: false,
	  questions: require('./questions.json').slice(this.props.start, this.props.end),
	  currentQuestionNumber: 0,
      time:0,
      score:0,
      timerRunning: true,
      show: false
    };
	
    setInterval(() => {
		this.state.time++;
	}, 1000);

	console.log("Number of Questions: " + this.state.questions.length);
	console.log("Here is the history state: " + JSON.stringify(this.getExamHistory()));
   
  }
  

  
   showModal (){
	   if (this.state.show==false) {
		this.setState({ show: true });
	   }
   };

   hideModal (){
	   if (this.state.show==true) {
		this.setState({ show: false });
	   }
   };

	getCurrentQuestion() {
		return this.state.questions[this.state.currentQuestionNumber];
	};

    setCurrentQuestion(position) {
		this.setState({currentQuestionNumber: position});
		this.setState({time:0})
        this.updateTimeSpent(); 
		//this.setState({currentQuestion: this.state.questions[position]});
	}
	
	nextQuestion() {
	  this.setCurrentQuestion(this.state.currentQuestionNumber + 1);
	}
	
    previousQuestion() {
	  this.setCurrentQuestion(this.state.currentQuestionNumber - 1);
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
	
	
	
	
	gradeTheExam() {
		
		let correctCount = 0;
		let i = 0;
		for (i = 0; i < this.state.questions.length; i++) {
           if ( this.isQuestionAnsweredCorrectly(this.state.questions[i]) ) {
			 correctCount++;
		   }
		}
		
		let examHistory = this.getExamHistory();
		examHistory.exams.push(this.state.questions);
		localStorage.setItem('examHistory', JSON.stringify(examHistory));
		this.updateTimeSpent();
		this.setState({graded: true}, () =>{
      });
   
  
         //for(var que=0;que<examHistory.exams[((examHistory.exams.length)-1)].length;que++){
            //console.log( "Que Number "+que+"Marked "+examHistory.exams[examcount][que].marked);
         //   finalScore=finalScore+examHistory.exams[(examHistory.exams.length-1)][que].marked;
         //}
      
      
      this.stoptimer();
      //this.showModal(); //Score display
	  this.showModal();
      this.setState({score:correctCount});
	  return correctCount;
	}
	
	getExamHistory() {
		//alert("Get Exam History");
      try{
         let object = localStorage.getItem('examHistory');
         let examHistory = "";
         
         if (object == null) {
            examHistory = {name:"Exam History"};
            let exams = [];
            examHistory.exams = exams;
            localStorage.setItem('examHistory', JSON.stringify(examHistory));
            this.setState({history: examHistory})
         } else {
            examHistory = JSON.parse(object);
         }
         return examHistory;
      }catch(e){
         console.log(e);
      }
		
	}
	

  componentDidMount() {
    this.createJumperButtons();
    var fiveMinutes = 60 * 5,
    display = "timer";
    this.startTimer(fiveMinutes-1, display);
    if(this.state.time!=0){
      this.resetTimer();
   }
  }

  componentDidUpdate(){
	  
	  //alert("Component Did Update");
     this.handleButtons();
     this.createJumperButtons(); 

     //this.handleCheckOptions();
 
  }

  resetTimer(){
   this.setState({time:0});
  }

  
  updateTimeSpent(){
   let currentIndex = this.state.currentQuestionNumber;
   this.state.questions[currentIndex].timespent=this.state.questions[currentIndex].timespent+this.state.time;
  }
  
  createJumperButtons(){
   document.getElementById("questionJumper").innerHTML = "";
   var questionsLength = this.state.questions.length;
     for(var i = 0; i < questionsLength; i++){
         var button = document.createElement("button");
         button.appendChild(document.createTextNode(i+1));
         button.setAttribute("id", "btn"+i);
         button.setAttribute("type", "button");
         button.setAttribute("class", "btn btn-secondary btn-sm");
         if(i == this.state.currentQuestionNumber){
            button.setAttribute("class", "btn btn-primary btn-sm");
         }
         document.getElementById("questionJumper").appendChild(button);
         document.getElementById("questionJumper").appendChild(document.createTextNode("\u00A0"));//nbsp
     }

     for(let x = 0; x < questionsLength; x++){
         var elem = document.getElementById("btn"+x);
         elem.addEventListener("click", () => { this.clickJumperButton(x); });
     }
  }

  clickJumperButton(x){
   //this.gradeQuestion();
   this.updateTimeSpent();
   this.setState({time:0});
   this.setCurrentQuestion(x);
  
  }

  stoptimer(){
   this.setState({timerRunning: false});
   document.getElementById("timer").innerHTML = "Done Submission";
  }

  startTimer(duration, display){
      var timer = duration, minutes, seconds;
      var self = this;
      setInterval(function () {
         if(self.state.timerRunning){
         minutes = parseInt(timer / 60, 10);
         seconds = parseInt(timer % 60, 10);
         
         minutes = minutes < 10 ? "0" + minutes : minutes;
         seconds = seconds < 10 ? "0" + seconds : seconds;

         
         if(minutes === "00" && seconds === "00"){
            document.getElementById("finish").click();
         }else{
            try{
               document.getElementById(display).innerHTML = minutes + ":" + seconds;
            }catch(e){
               
            }
            
         }

         if (--timer < 0) {
            document.getElementById(display).innerHTML = "00:00";
            document.getElementById("next").setAttribute("class", "disabled btn btn-primary");
            document.getElementById("previous").setAttribute("class", "disabled btn btn-primary");
            document.getElementById("finish").setAttribute("class", "disabled btn btn-primary");
            clearInterval();
            //timer = duration;
         }
        }
      }, 1000);
   }

  handleButtons(){
    if(this.state.currentQuestionNumber === this.state.questions.length-1){
      document.getElementById("next").setAttribute("class", "disabled btn btn-primary");
    }else{
      document.getElementById("next").setAttribute("class", "enabled btn btn-primary");
    }
    if(this.state.currentQuestionNumber > 0){
      document.getElementById("previous").setAttribute("class", "enabled btn btn-primary");
    }
    try{
      if(this.state.currentQuestionNumber === 0){
        document.getElementById("previous").setAttribute("class", "disabled btn btn-primary");
      }
    }catch(e){
      console.log(e);
    }
    
  }

	


   saveQuestionState(question){
	  var updatedExamQuestions = this.state.questions;
	  updatedExamQuestions[this.currentQuestionNumber] = question;  
      this.setState({questions: updatedExamQuestions});
	  console.log("End of save chosen option");
   }
  
  render() { 
    return (


<div class="container">


<div class="card">
   <div class="card-header" id="questionNumber">
      Question {this.state.currentQuestionNumber + 1}
   </div>
   <div class="card-body">
   
   
   
      <Question saveQuestionState = {this.saveQuestionState} question={this.getCurrentQuestion()} disabled={this.state.graded}/>
	  
      <div>
         <p class="card-text mt-3">
            <a id="previous" class="disabled btn btn-primary" onClick={() => this.previousQuestion()}>&lt;&lt; Previous</a>&nbsp;
            <a id="next" class="btn btn-primary" onClick={() => this.nextQuestion()}>Next &gt;&gt;</a> &nbsp;
            <a id="finish" class="btn btn-primary" onClick={() => this.gradeTheExam()}>Finish</a>&nbsp;
			
            <Timer />
			
            <Modal show={this.state.show} handleClose={this.hideModal}>
               <p>You Scored {this.state.score} points</p>
            </Modal>

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
      <h3 class="card-title" id="questionJumperCardTitle">Navigation</h3>
      <p class="card-text"></p>
      <div id="questionJumper"></div>
   </div>
</div>




<ExamHistory/>





</div>




    );
  }
}

ReactDOM.render(
  <Exam start="25" end="30"/>,
  document.getElementById('root')
);

