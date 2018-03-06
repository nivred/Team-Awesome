import React, { Component } from 'react';
// import { Switch, Route, BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import { Switch, Route,Link} from 'react-router-dom';
import Timer from "./Timer";
import Logout from "./Logout";
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
                    <div className="navbar-header col-md-5">
                        <div className="navbar-brand">
                            <Link to="/Game"><img src="../assets/images/brainDead.png" alt=""/></Link>
                        </div>
                    </div>
                    <div className="navbar-header col-md-2">
                        <Switch>
                            <Route exact path="/Game" component={() => <Timer {...this.props}/>} />
                       </Switch>
                    </div>
                    <div className="navbar-header col-md-5">
                        <Switch>
                            <Route exact path="/Game" component={() => <Logout {...this.props} pathname="Game" />} />
                            <Route exact path="/Stats" component={() => <Logout {...this.props} pathname="Stats" />} />
                        </Switch>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}

export default Nav;
