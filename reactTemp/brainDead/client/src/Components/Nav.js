import React, { Component } from 'react';
import '../App.css';
// import data from "./data.json";

class Nav extends Component {
  
    render() {
        return (
        <div className="wrapper">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/game">Logo</a>
                    </div>
                    <div className="navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-stats"></span> Stats</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-out"></span> Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}

export default Nav;
