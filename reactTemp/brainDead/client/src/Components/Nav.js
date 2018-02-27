import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Timer from "./Timer";
import '../App.css';
// import data from "./data.json";

class Nav extends Component {
  
    //  displayGreeting = () => {   
    //     let playerName = this.props.name;
    //     if(playerName != "") {
    //       console.log("Nav says Hi to " + playerName);
    //       return <h2>Hello {playerName} ! </h2>;
    //     }
    // };
    

    render() {   
       
        return (
        <div className="wrapper">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header col-md-4">
                        <a className="navbar-brand" href="/game">
                            <img src="../assets/images/brainDead.png" />
                        </a>
                    </div>

                    <Switch>
                        <Route exact path="/Game" component={() => <Timer {...this.props}/>} />
                    </Switch>
                </div>
            </nav>
        </div>
        )
    }
}

export default Nav;
