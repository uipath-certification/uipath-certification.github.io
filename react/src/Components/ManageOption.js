
import React, { Component } from 'react';

class ManageOption extends Component{
    state = {
        question: this.props.question,
        options: []
    };

    setCorrectAnswerOrNot(index){
        try{
            return this.props.question.options[index].correct;
        }catch(e){
            return false;
        }
    }

    setOptionCount(){
        var isNew = false;
        var options = [];
        var count = 4;
        try {
            count = this.props.question.options.length; 
        } catch (e) {
            isNew = true;
        }
        
        if(isNew){
            options = this.returnBlankJsonObject().options;
        }else{
            for(var i = 0; i<count; i++){
                var optionObj = {};
                optionObj.text = this.props.question.options[i].text;
                optionObj.correct = this.props.question.options[i].correct;
                options.push(optionObj);               
            }
        }
        return options;
    }
    
    returnBlankJsonObject(){
        var question = {};
        question.id = "";
        question.query = "";
        question.answer = "";
        question.difficulty = "";
        question.marked = "";
        question.timespent = "";
        question.objectives = [];
        question.options = [];
        for(var i = 0; i<4; i++){
            var option = {};
            option.text = "";
            option.correct = false;
            option.select = false;
            question.options.push(option);
        }
        
        return question;
    }

    getOptionText(index){
        try {
            return this.props.question[index].text;
        } catch (error) {
            return "";
        }
    }

    componentDidMount(){
    }

    componentDidUpdate(){      
        //tried using the value/defaultValue but had problems with it
        try {
            for(var i = 0; i<this.props.question.options.length; i++){
                //document.getElementById("answer"+i).value = this.props.question.options[i].text;
                //document.getElementById("checkbox"+i).checked = this.props.question.options[i].correct;
            }    
        } catch (error) {
            for(var i = 0; i<this.setOptionCount().length; i++){
                //document.getElementById("answer"+i).value = "";
                //document.getElementById("checkbox"+i).checked = false;
            }  
        }
        
    }

    onChangeText = (event) =>{
        this.props.onChangeOptionText((event.target.id).split("answer")[1], event.target.value);
    }

    onChangeCheckbox = (event) =>{
        this.props.onChangeOptionCorrect((event.target.id).split("checkbox")[1], event.target.checked);
    }

    initializeCheckBox=(event)=>{
        var index = (event.target.id).split("checkbox")[1];
        try {
            return this.props.question.options[index].correct;
        } catch (error) {
            return false;
        }
    }



    render(){
        var options = this.setOptionCount();
       return(
            
            <div>
                <div>Options:</div>
                {options.map((value, index)=>{
                    console.log(value);
                    return <div class="form-check">
                        <input class="form-check-input" id={"checkbox"+index} type="checkbox" checked={value.correct} onChange={this.onChangeCheckbox}/>
                        <input type="text" class="form-control" key={index} id={"answer"+index} placeholder={"Option "+(index+1)} value={value.text} onChange={this.onChangeText}></input>
                    </div>
                })}
            </div>
        )
    }
}

export default ManageOption;