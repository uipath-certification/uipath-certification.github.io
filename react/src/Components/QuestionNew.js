import React, { Component } from 'react';
 
class QuestionNew extends Component{
    /* Counts the number of correct options */
    getNumberOfCorrectOptions(){
        var numberOfCorrectAnswers = 0;
        for(var i = 0; i<this.props.question.options.length; i++){
            if(this.props.question.options[i].correct){
                numberOfCorrectAnswers++;
            }
        }
        return numberOfCorrectAnswers;
    }

    /* Decides if it should be checkboxes or radio buttons */
    getRadioOrCheckbox = () => {
        var numberOfCorrectAnswers = this.getNumberOfCorrectOptions();
        if(numberOfCorrectAnswers < 2){
            return "radio";
        }else{
            return "checkbox";
        }
    }

    /* Runs when a user clicks on an option checkbox or radio button */
    toggleOption = (index) => {
        if(this.getRadioOrCheckbox() === "radio"){
            for(var i = 0; i <this.props.question.options.length; i++){
                this.props.question.options[i].selected = false;
            }   
        }
        this.props.question.options[index].selected = !this.props.question.options[index].selected;
        this.props.saveQuestionState(this.props.question);
    }


    /* Returns true if the user has answered the question correctly */
    isAnsweredCorrectly(){}

    /* Returns true if the input fields should be disabled */
    isDisabled() {
        return this.props.disabled;
    }

    isCheating(){
        return this.props.cheating;
    }


    /* Puts a highlight on the correct answers */
    highlightAnswer(index){
        if((this.props.cheating && this.props.question.options[index].correct) || (this.props.disabled && this.props.question.options[index].correct)){
            return " border border-success ";
        }
        return " ";
    }
 
    render(){
        return (
            <div class="card-body">

            <h3 class="card-title" id="query"> {this.props.question.query}</h3>
            
            {
            this.props.question.options.map((option, index)=>
                <div class={" form-check my-2 class " + this.highlightAnswer(index)}  id={"outerOptionDiv"+index}>
                    <input class="form-check-input  option-radio " type={this.getRadioOrCheckbox()} name="optionRadios" id={"option"+index} 
                        value="" checked={this.props.question.options[index].selected} disabled="" onClick={()=>{this.toggleOption(index)}}></input>
                    <label class="form-check-label" for="" id={"optionsLabel"+index}>{option.text}</label>
                </div>
            )
            }
            </div>

           
            
        )
    }
}
 
export default QuestionNew;