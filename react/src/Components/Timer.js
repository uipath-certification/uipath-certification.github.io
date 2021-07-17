import React, { Component } from 'react';

class Timer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            time: "04:59"
        };
    }
    curateTimer(time){
        var minutes = Math.floor(time / 60);
        var seconds = time - minutes * 60;
        if(minutes<10){
            minutes = "0"+minutes;
        }
        if(seconds<10){
            seconds = "0"+seconds;
        }
        var minutesAndSeconds = minutes + ":" + seconds;
        if(time<1 || this.props.disabled){
            this.props.gradeTheExam();
            return "00:00";
        }
        return minutesAndSeconds;
    }

    updateTimer(){
        var expireTime = this.addMinutes(this.props.startTime, 5);
        var gradeNow = this.props.gradeTheExam;
        setInterval(()=>{
            this.setState({time:this.curateTimer(parseInt(((expireTime - new Date())/1000)))});
         }, 1000);
    }

    addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes*60000);
    }

    componentDidMount(){
        this.updateTimer();
    }

    componentDidUpdate(){}

    render(){
        return (
            <>
                <button class="btn btn-secondary">{this.state.time}</button>
            </>
        )
    }
}

export default Timer;