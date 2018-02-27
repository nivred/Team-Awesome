import React, { Component } from 'react';
import '../App.css';

export default class Timer extends Component {
    state = {
        elapsed: 0,
        myTime: 0,
        Clock: 0,
        mSec: 0,
        secs: "00",
        mins: "00"
    }

    doubleDigit = num => Math.log10(num) < 1 ? `0${num}` : num;

    // timer = () => {
    //     // this.setState(state => {
    //     //     state.myTime = state.myTime++;
    //     //     // state.mSec = this.doubleDigit(Math.floor(state.myTime % 1));
    //     //     state.secs = this.doubleDigit(Math.floor((state.myTime) % 60));
    //     //     state.mins = this.doubleDigit(Math.floor((state.myTime) / 60));
    //     //     return state;
    //     // })
    //     // this.state.myTime++;
    //     // this.state.mSec = this.doubleDigit(Math.floor(this.state.myTime % 100));
    //     // this.state.secs = this.doubleDigit(Math.floor((this.state.myTime / 100) % 60));
    //     // this.state.mins = this.doubleDigit(Math.floor((this.state.myTime / 100) / 60));


    // }

    tick = () => this.setState({elapsed: Date.now() - this.state.start})

    formatTime = (time,string) => {
        switch (string) {
            case 'milliseconds':
                return this.doubleDigit(Math.floor(time % 1000));
                break;
            case 'seconds':
                return this.doubleDigit(Math.floor((time / 1000) % 60));
                break;
            case 'minutes':
                return this.doubleDigit(Math.floor((time / 1000) / 60));
                break;
        }
    }

    Start = event => {
        console.log("using start");
        event.preventDefault();
        this.setState({start:Date.now()});
        this.timer = setInterval(this.tick,1);
    }

    render() {
        return(
            <div>
                <div id="controller" className="col-md-4 text-center">
                    <a href="#" type="button" className="btn btn-success" onClick={this.Start}><span className="glyphicon glyphicon-play-circle "></span></a>
                    <span id="timer"><span id="minutes">{this.formatTime(this.state.elapsed, "minutes")}</span>:<span id="seconds">{this.formatTime(this.state.elapsed, "seconds")}</span></span>
                    <a href="#" className="btn btn-danger dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-cog"></span></a>
                    <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                        <li role="presentation" className="dropdown-header">Display Time</li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">1 sec</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">2 sec</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">3 sec</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">4 sec</a></li>    
                    </ul>
                </div>
                <div className="col-md-4" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/stats"><span className="glyphicon glyphicon-stats"></span> Stats</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-out"></span> Sign out</a></li>
                    </ul>               
                </div>
            </div>
        )
    }
}