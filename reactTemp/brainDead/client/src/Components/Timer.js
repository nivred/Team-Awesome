import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Timer extends Component {  // ******Note you cannot export more than one defaults form a single file
    state = {
        elapsed: "00"
    }

    timer = null;
    start = null;

    

    

    // Start = event => {
    //     event.preventDefault();
    //     this.setState({start:Date.now()});
    //     this.timer = setInterval(this.tick,1);
    // }
    
    //-----------------------------------------------------------------------------------------------
    // Description: Preparing the startTimer Event for card onClick which will encompass the 
    //     necessary actions 
    // handleStartTimerEvent = event => {
    //     event.preventDefault();
    //     this.setState({start:Date.now()});
    //     this.timer = setInterval(this.tick,1);
    // }
    //-----------------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <div id="controller" className="col-md-4 text-center">
                    {/* <a href="#" type="button" className="btn btn-success" onClick={this.Start}><span className="glyphicon glyphicon-play-circle "></span></a> */}
                    <span id="timer"><span id="minutes">00</span>:<span id="seconds">00</span></span>
                    {/* <a href="#" className="btn btn-danger dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-cog"></span></a>
                    <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                        <li role="presentation" className="dropdown-header">Display Time</li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">1 sec</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">2 sec</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">3 sec</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">4 sec</a></li>    
                    </ul> */}
                </div>
                <div className="col-md-4" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-stats"></span> Stats</a></li>
                        <li><Link to="/"><span className="glyphicon glyphicon-log-out"></span> Sign out</Link></li>
                    </ul>               
                </div>
            </div>
        )
    }
}