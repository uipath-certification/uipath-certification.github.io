import React, { Component } from 'react';
import Question from './Question';

class QuestionsPanel extends Component{
	
	constructor(props) {
        super(props);
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
	
	getCurrentQuestion() {
		return this.props.questions[this.props.currentQuestionNumber];
	};
	
	changeQuestion() {
		this.props.setCurrentQuestion( this.props.indexNumber)
	}
	
	nextQuestion() {
	  this.props.setCurrentQuestion(this.props.currentQuestionNumber + 1);
	}
	
    previousQuestion() {
	  this.props.setCurrentQuestion(this.props.currentQuestionNumber - 1);
	}

	
   getEnabledOrDisabledButtonState(flag) {
	if(flag){
      return " enabled btn btn-primary ";
    } else {
	  return " disabled btn btn-primary ";
	}  
   }

   
   setPreviousButtonState() {
	   let buttonEnabled = this.props.currentQuestionNumber > 0;
	   return this.getEnabledOrDisabledButtonState(buttonEnabled);
   }
   
   setNextButtonState() {
	let buttonEnabled = this.props.currentQuestionNumber < this.props.questions.length-1;
	return this.getEnabledOrDisabledButtonState(buttonEnabled);
   }
   
   setFinishButtonState() {
	   let buttonEnabled = !this.props.graded;
	   return this.getEnabledOrDisabledButtonState(buttonEnabled);
   }
   
    render(){
        return (


			<div class="card">
			   <div class="card-header" id="questionNumber">
				  Question {this.props.currentQuestionNumber + 1}
			   </div>
			   <div class="card-body">
			   
				  <Question saveQuestionState = {this.props.saveQuestionState} question={ this.getCurrentQuestion()} disabled={this.props.disabled} cheating={this.props.cheating}/>
				  
				  <div>
					 <p class="card-text mt-3">
						<a id="previous" class={this.setPreviousButtonState()} onClick={() => this.previousQuestion()}>&lt;&lt; Previous</a>&nbsp;
						<a id="next" class={this.setNextButtonState()} onClick={() => this.nextQuestion()}>Next &gt;&gt;</a> &nbsp;
						<a id="finish" class={this.setFinishButtonState()} onClick={() => this.props.gradeTheExam()}>Finish</a>&nbsp;
					 </p> 
					 <div></div>
				  </div>
			   </div>
			</div>

        )
    }
} 

export default QuestionsPanel;

