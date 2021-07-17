import React, { Component } from 'react';
import JumperButton from './JumperButton';


class QuestionJumperPanel extends Component{

    render(){
        return (
            <div class="card">
                <div class="card-header">Question Jumper</div>
                <div class="card-body">
                    {
                        this.props.questions.map((value, index) => { 
                            return <JumperButton indexNumber={index} setCurrentQuestion={this.props.setCurrentQuestion} currentQuestionNumber={this.props.currentQuestionNumber}
                            questions={this.props.questions}></JumperButton>
                        })
                    }
                    
                </div>
            </div>

   
        )
    }

}

export default QuestionJumperPanel;