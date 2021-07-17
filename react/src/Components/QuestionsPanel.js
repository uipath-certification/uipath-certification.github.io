import React, { Component } from 'react';
import QuestionNew from './QuestionNew';
import Timer from './Timer';

class QuestionsPanel extends Component{
    isQuestionAnsweredCorrectly(question){}

    getCurrentQuestion(){
        return this.props.questions[this.props.currentQuestionNumber];
    }
    
    changeQuestion(index){
        this.props.setCurrentQuestion(index);
    }

    nextQuestion = () => {
        this.changeQuestion(this.props.currentQuestionNumber + 1);
    }

    previousQuestion = () => {
        this.changeQuestion(this.props.currentQuestionNumber - 1);
    }

    getEnabledOrDisabledButtonState(flag){}

    setPreviousButtonState(){
        if(this.props.currentQuestionNumber === 0){
            return " disabled btn btn-primary ";
        }
        return " btn btn-primary ";
    }

    setNextButtonState(){
        if(this.props.currentQuestionNumber === this.props.questions.length-1){
            return " disabled btn btn-primary ";
        }
        return " btn btn-primary ";
    }

    setFinishButtonState(){
        if(!this.props.disabled){
            return " btn btn-primary ";
        }
        return " disabled btn btn-primary ";
    } 

    render(){
        return (
            <div class="card">
                <div class="card-header" id="questionNumber">
                    Question:
                </div>
                <div class="card-body">
                    <QuestionNew saveQuestionState = {this.props.saveQuestionState} question={this.props.questions[this.props.currentQuestionNumber]} disabled={this.props.disabled} cheating={this.props.cheating} />
                    
                    <div>
                        <p class="card-text mt-3">
                            <a href="#" id="previous" class={this.setPreviousButtonState()} onClick={this.previousQuestion}>&lt;&lt; Previous</a>&nbsp;
                            <a href="#" id="next" class={this.setNextButtonState()} onClick={this.nextQuestion}>Next &gt;&gt;</a> &nbsp;
                            <a href="#" id="finish" class={this.setFinishButtonState()} onClick={this.props.gradeTheExam}>Finish</a>&nbsp;
                            <Timer gradeTheExam = {this.props.gradeTheExam} disabled={this.props.disabled} startTime={this.props.startTime}/>
                        </p> 
                    </div>
                </div>
            </div>

   
        )
    }

}

export default QuestionsPanel;