import React, { Component } from 'react';
import ManageOption from './ManageOption';

class ManageQuestionsPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            question: {},
            position: 'new'
        };
        this.onChangeOptionText = this.onChangeOptionText.bind(this);
        this.onChangeOptionCorrect = this.onChangeOptionCorrect.bind(this);
        
    }

    updateStateQuestion= (event) =>{
        console.log(JSON.stringify(this.state.position));
        try {
            this.setState({question:this.props.questions[event.target.value]});
            this.setState({position:event.target.value});
            document.getElementById("querymanaged").value = this.props.questions[event.target.value].query; 
            document.getElementById("difficultymanaged").value = this.props.questions[event.target.value].difficulty;  
            document.getElementById("answermanaged").value = this.props.questions[event.target.value].answer;          
        } catch (error) {
            this.setState({question:{}});
            this.setState({position:'new'});
            document.getElementById("querymanaged").value = ""; 
            document.getElementById("difficultymanaged").value = "";  
            document.getElementById("answermanaged").value = "";
        }
        
    }

    saveThisQuestion=()=>{
        var question = JSON.parse(JSON.stringify(this.props.questions[0]));
        if(this.state.position == 'new'){
            question.id = "";
        }else{
            question = this.state.question;
        }

        //getting the values
        question.query = document.getElementById("querymanaged").value;
        question.difficulty = document.getElementById("difficultymanaged").value;
        question.answer = document.getElementById("answermanaged").value;
        question.marked = 0;
        question.timespent = 0;
        //objectives still to be added

        var optionsCount = 4;
        try {
            optionsCount = question.options.length;
        } catch (error) {
            
        }
        for(var i = 0; i<optionsCount; i++){
            question.options[i].selected = false;
            question.options[i].correct = document.getElementById("checkbox"+i).checked;
            question.options[i].text = document.getElementById("answer"+i).value;         
        }
        if(this.validateQuestion(question).length != 0){
            alert(this.validateQuestion(question).join("; "));
        }else{
            // alert(this.validateQuestion(question).length);
            alert(JSON.stringify(question));
            this.setState({question:question});
            this.props.addOrEditAQuestion(question);
        }
    }

    validateQuestion(question){
        var result = [];
        var correctAnswers = 0;

        //check if blank
        if (this.notBlank(question.query, "Query") != null) result.push(this.notBlank(question.query, "Query"))
        if (this.notBlank(question.answer, "Answer") != null) result.push(this.notBlank(question.answer, "Answer"))
        if (this.notBlank(question.difficulty, "Difficulty") != null) result.push(this.notBlank(question.difficulty, "Difficulty"))
        
        for(var i = 0; i<question.options.length; i++){
            if (question.options[i].correct) correctAnswers++;
            if (this.notBlank(question.options[i].text, "Option "+(i+1)) != null) result.push(this.notBlank(question.options[i].text, "Option "+(i+1)))
        }

        //objectives

        if(question.options.length < 4){
            result.push("Options must not be lesser than 4");
        }

        if(correctAnswers < 1){
            result.push("Must have correct answers");
        }

        if(correctAnswers === question.options.length){
            result.push("Must have incorrect answers");
        }
        
        return result;
    }

    notBlank(input, fieldName){
        if(input == "" || input == null){
            return fieldName + " must not be empty";
        }
        return null;
    }

    getQuestion(){
        try {
            return this.state.question.query
        } catch (error) {
            return "";    
        }
    }

    getDifficulty(){
        try {
            return this.state.question.difficulty
        } catch (error) {
            return "";    
        }
    }

    getAnswer(){
        try {
            return this.state.question.answer
        } catch (error) {
            return "";    
        }
    }

    onChangeOptionText(index, newValue){
        var question = JSON.parse(JSON.stringify(this.state.question));
        if(JSON.stringify(question) == "{}"){
            question = this.returnBlankJsonObject();
        }
        question.options[index].text = newValue;
        
        this.setState({question:question});
    }

    onChangeOptionCorrect(index, newValue){
        var question = JSON.parse(JSON.stringify(this.state.question));
        if(JSON.stringify(question) == "{}"){
            question = this.returnBlankJsonObject();
        }
        question.options[index].correct = newValue;
        
        this.setState({question:question});
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

    async pushOptions(standardCountOfOptions, question, option){
        for(var i = 0; i<standardCountOfOptions; i++){
            question.options.push(option);
        }
    }
    
    render(){
        return(
            <div class="card">
                <div class="card-header">Manage Questions</div>
                <div class="card-body">
                    
                    <div class="form-group row">

                        <label for="questions" class="col-sm-2 col-form-label">Target Question:</label>
                        <div class="col-sm-10">
                        <select class="form-control form-control-sm" name="questions" id="targetQuestion" onChange={this.updateStateQuestion}>
                            <option value="new">New Question</option>
                            {this.props.questions.map((question, index)=>{
                                return <option value={index}>{question.query}</option>
                            })} 
                        </select></div>
                        
                        <label for="query" class="col-sm-2 col-form-label">Question</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="querymanaged" placeholder="Question" defaultValue={this.getQuestion()}/>
                        </div>

                        <label for="answer" class="col-sm-2 col-form-label">Answer</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="answermanaged" placeholder="Answer" defaultValue={this.getAnswer()}/>
                        </div>

                        <label for="difficulty" class="col-sm-2 col-form-label">Difficulty</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="difficultymanaged" placeholder="Difficulty" defaultValue={this.getDifficulty()}/>
                        </div>

                        <ManageOption question={this.state.question} position={this.state.position} onChangeOptionText={this.onChangeOptionText} onChangeOptionCorrect={this.onChangeOptionCorrect}/>
                        <div class="col-sm-12">
                            <input class="btn btn-primary" type="submit" value="Submit" onClick={()=>this.saveThisQuestion()} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ManageQuestionsPanel;