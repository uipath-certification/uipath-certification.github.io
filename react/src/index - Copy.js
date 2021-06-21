import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Option extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.optionData.text,
	  correct:this.props.optionData.correct,
	  selected:this.props.optionData.selected
    };
  }	
  
  toggleChange = () => {
    this.setState({
      selected: !this.state.selected,
    });
  }
	

  render() {
    return (
		<div class="form-check my-2" id="outerOptionDiv0">
		<input class="form-check-input  option-radio" type="checkbox" name="optionRadios" id="option0" value="option0" defaultChecked={this.state.selected} onChange={this.toggleChange}>
		</input> 
		<label class="form-check-label" htmlFor="option0" id="labelOption0">
		{this.state.text}
		</label>
		</div>
    );
  }
}

class Question extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
	  correct:false,
	  selected:true
    };
	console.log("Option A is: " + this.props.data.options[0].text);
  }	

	
	
	
  renderOption(optionData) {
    return <Option optionData={optionData}/>;
  }

  render() {

    return (
<span>
      <h3 class="card-title" id="query">{this.props.data.query} (choose 2)</h3>
      {this.renderOption(this.props.data.options[0])}
      {this.renderOption(this.props.data.options[1])}
      {this.renderOption(this.props.data.options[2])}
      {this.renderOption(this.props.data.options[3])} 
</span>
    );
  }
}

class NavigationButtons extends React.Component {
  render() { 
    return (
	
      <div>
         <p class="card-text mt-3">
            <a id="previous" class=" btn btn-primary" 
			onClick={() =>Exam.nextQuestion()}>&lt;&lt; Previouss</a>
            <a id="next" class="enabled btn btn-primary" 
			onClick={()=>this.nextQuestion()}>Next &gt;&gt;</a> 
            <a id="finish" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick="{() => nextQuestion()}">Finish</a>

         </p>
         <div></div>
      </div>
    );
  }
}

class QuestionJumper extends React.Component {
  render() { 
    return (
      <div class="card-header" id="questionJumperTitle">
         Question Jumper(NotImplemented)
      </div>
    );
  }
}

class Exam extends React.Component {
	
	
  constructor(props) {
    super(props);
	let jsonQuestions = require('./questions.json');
    this.state = {
      graded: false,
	  start: this.props.start,
	  end: this.props.end,
	  currentQuestionNumber: 0,
	  questions: jsonQuestions.slice(this.props.start, this.props.end)
    };

	console.log("Number of Questions: " + this.state.questions.length);
	console.log(JSON.stringify(this));
	
  }
  
	nextQuestion() {
		console.log("In next question: "+ this.state.currentQuestionNumber);
		this.setState({currentQuestionNumber:  this.state.currentQuestionNumber+1});
		console.log("End next question: "+ this.state.currentQuestionNumber);
	}
	
	previousQuestion() {
		this.setState({currentQuestionNumber: this.state.currentQuestionNumber-1});
	}
	
	getQuestion(i) {
		this.setState({currentQuestionNumber: i});
	}
		
  
  render() { 
    return (
		<div class="container">
		   <div class="card">
			  <div class="card-header" id="questionNumber">Question {this.state.currentQuestionNumber}</div>
			  <div class="card-body"> 
				<Question data={this.state.questions[this.state.currentQuestionNumber]}/> 

      <div>
         <p class="card-text mt-3">
            <a id="previous" class=" btn btn-primary" 
			onClick={() =>this.nextQuestion()}>&lt;&lt; Previouss</a>
            <a id="next" class="enabled btn btn-primary" 
			onClick={()=>this.nextQuestion()}>Next &gt;&gt;</a> 
            <a id="finish" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick="{() => nextQuestion()}">Finish</a>

         </p>
         <div></div>
      </div>




			  </div>
		   </div>
		   <div class="card mt-2">
				<QuestionJumper/>
		   </div>
		</div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Exam start="10" end="15"/>,
  document.getElementById('root')
);


