 import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { matchPath } from 'react-router';
import '../App.css';

class Logout extends Component {  

state = {

   pathname: this.props.pathname 
}

    //display links to other components based on which component is active
    render() {   
       
        return (
        <div className="wrapper">
                <div className="container-fluid">
                <div className="col-md-12" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        { (this.state.pathname == "Game") ?
                        <li><Link to="/Stats"><span className="glyphicon glyphicon-stats"></span> Stats</Link></li>
                          : <li><Link to="/Game"><span className="glyphicon glyphicon-th"></span> Game</Link></li> }
                        <li><Link to="/"><span className="glyphicon glyphicon-log-out"></span> Sign out</Link></li> 
                    </ul>               
                </div>
                </div>
         </div>
        )
    }
}



export default Logout;










