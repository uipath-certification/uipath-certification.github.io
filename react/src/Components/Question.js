import React, { Component } from 'react';
 
class Question extends Component{
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.currentQuestion,
        }
    }   
    render(){
        return (
            <div class="card-body">
             <h3 class="card-title" id="query"> 
               {this.props.question.query}
            </h3>
            <div class="form-check my-2" id="outerOptionDiv0">
            <input class="form-check-input  option-radio" type="checkbox" name="optionRadios" id="option0" value="option0"
                defaultChecked={this.props.question.options[0].selected} 
                onClick={() => this.props.toggleOption(0, this.props.question, this.props.questions, this.props.currentNumber)} 
            ></input>
            <label class="form-check-label" for="option0" id="labelOption0">
            {this.props.question.options[0].text}
            </label>
            </div>
            <div class="form-check my-2" id="outerOptionDiv1">
            <input class="form-check-input  option-radio" type="checkbox" name="optionRadios" id="option1" value="option1"
                defaultChecked={this.props.question.options[1].selected} 
                onClick={() => this.props.toggleOption(1, this.props.question, this.props.questions, this.props.currentNumber)} 
            ></input>
            <label class="form-check-label" for="option1" id="labelOption1">
            {this.props.question.options[1].text} 
            </label>
            </div>
            <div class="form-check my-2" id="outerOptionDiv2">
            <input class="form-check-input  option-radio" type="checkbox" name="optionRadios" id="option2" value="option2"
                defaultChecked={this.props.question.options[2].selected} 
                onClick={() => this.props.toggleOption(2, this.props.question, this.props.questions, this.props.currentNumber)} 
            ></input>
            <label class="form-check-label" for="option2" id="labelOption2">
            {this.props.question.options[2].text} 
            </label>
            </div>
            <div class="form-check my-2" id="outerOptionDiv3">
            <input class="form-check-input  option-radio" type="checkbox" name="optionRadios" id="option3" value="option3"
                defaultChecked={this.props.question.options[3].selected} 
                onClick={() => this.props.toggleOption(3, this.props.question, this.props.questions, this.props.currentNumber)} 
            ></input>
            <label class="form-check-label" for="option3" id="labelOption3">
            {this.props.question.options[3].text} 
            </label>
      </div> 
            
            </div>
           
            
        )
    }
}
 
export default Question;