import React, { Component } from 'react';
import QuestionsPanel from './QuestionsPanel';
import QuestionJumperPanel from './QuestionJumperPanel';
import ManageQuestionsPanel from './ManageQuestionsPanel';

class RpaExam extends Component{
    constructor(props) {
        super(props);
        this.saveQuestionState = this.saveQuestionState.bind(this);
        this.gradeTheExam = this.gradeTheExam.bind(this);
        this.setCurrentQuestion = this.setCurrentQuestion.bind(this);
        this.addOrEditAQuestion = this.addOrEditAQuestion.bind(this);
        this.showGrade = false;
        this.elapsedTime=0;
        
        this.state = {
          graded: false,
          questions: require('../questions.json').slice(this.props.start, this.props.end),
          currentQuestionNumber: 0,
          cheating: false
        };
    }

        /* Updates the currentQuestionNumber based on the position number passed in */
        setCurrentQuestion(position) {
            this.setState({currentQuestionNumber:position});
        }

        /* Updates the question in the set of questions based on the question passed in. */
        saveQuestionState(question){
            let updatedExamQuestions = this.state.questions;
            updatedExamQuestions[this.state.currentQuestionNumber] = question; 
           this.setState({questions:updatedExamQuestions});
        }


        /* Returns true if the question is answered correctly. */
        isQuestionAnsweredCorrectly(question){
            var isCorrect = true;
            for(var i = 0; i<question.options.length; i++){
                if(!question.options[i].selected === question.options[i].correct){
                    isCorrect = false
                }
            }
            return isCorrect;
        }

        /* Gets the number of questions the user answered correctly */
        getCorrectCount() {
            var score = 0;
            for(var i = 0; i<this.state.questions.length; i++){
                if(this.isQuestionAnsweredCorrectly(this.state.questions[i])){
                    score++;
                }
            }
            return score;
        }

        /* Triggered when the user asks the exam to be graded. */
        gradeTheExam() {
            this.setState({graded:true});
            this.setState({timer:0});
        }

        /* Toggles the state of the cheat flag */
        toggleCheat = () => {
            this.setState({cheating:!this.state.cheating})
        }

        addOrEditAQuestion(question){
            
            if(question.id == ""){
                let updatedExamQuestions = this.state.questions;
                updatedExamQuestions.push(question); 
                this.setState({questions:updatedExamQuestions});
            }else{
                for(var i = 0; i<this.state.questions.length; i++){
                    if(question.id == this.state.questions[i].id){
                        this.state.questions[i] = question;
                    }
                }
            }
        }

        componentDidMount() {}

        componentDidUpdate(){}

    
    render(){
        return (
            <div class="container">

            <div show="" >
              <p>Your grade is {this.getCorrectCount()} out of {this.state.questions.length}. Would you like to <a onClick={this.toggleCheat}>cheat?</a></p>
            </div>
            
            <QuestionsPanel questions={this.state.questions} currentQuestionNumber = {this.state.currentQuestionNumber} disabled={this.state.graded} cheating={this.state.cheating}
            saveQuestionState={this.saveQuestionState}  setCurrentQuestion={this.setCurrentQuestion} gradeTheExam = {this.gradeTheExam} startTime={new Date()} />
            
            <QuestionJumperPanel questions={this.state.questions} setCurrentQuestion={this.setCurrentQuestion} currentQuestionNumber={this.state.currentQuestionNumber}/>

            <ManageQuestionsPanel questions={this.state.questions} addOrEditAQuestion={this.addOrEditAQuestion}/>

            </div>            
        )
    }
}

export default RpaExam;