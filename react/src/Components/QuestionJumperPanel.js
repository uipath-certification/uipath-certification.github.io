import React, { Component } from 'react';
import Question from './Question';
import JumperButton from './JumperButton';

class QuestionJumperPanel extends Component{
	
	constructor(props) {
        super(props);
    }
	
    render(){
        return (

			<div class="card mt-2">
			   <div class="card-header" id="questionJumperTitle">
				  Question Jumper
			   </div>
			   <div class="card-body">
				  <h3 class="card-title" id="questionJumperCardTitle">Navigation</h3>
				  <p class="card-text"></p>
				  <div id="questionJumper">
				  {
					  this.props.questions.map((value, index) => { 
						return <JumperButton indexNumber={index} setCurrentQuestion={this.props.setCurrentQuestion} ></JumperButton>
					  }
					)
				  }
				  </div>
			   </div>
			</div>

        )
    }
} 

export default QuestionJumperPanel;

