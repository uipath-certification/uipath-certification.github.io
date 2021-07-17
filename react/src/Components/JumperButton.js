import React, { Component } from 'react';

class JumperButton extends Component{

    changeQuestion = (x)=>{
        this.props.setCurrentQuestion(x);
    }

    setDesignForButton(){
        if(this.props.indexNumber === this.props.currentQuestionNumber){
            return "btn-secondary btn-lg";
        }else{
            return "btn-info";
        }
    }

    componentDidMount() {}

    componentDidUpdate(){}

    render(){
        return(
            <button class= {" btn mr-2 " + this.setDesignForButton()} onClick={() => this.changeQuestion(this.props.indexNumber)}>{this.props.indexNumber + 1}</button>
        )
    }
}

export default JumperButton