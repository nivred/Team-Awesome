import React, { Component } from 'react';

import { 
  Switch, 
  Route, 
  BrowserRouter as Router, 
  Redirect,
  withRouter 
} from 'react-router-dom';

import './App.css';
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Game from "./Components/Game";
import ClickItem from "./Components/ClickItem";
import Stats from "./Components/Stats";
import API from "./utils/API"; 

class App extends Component {
 
  state = {
    response: "",
    name: "",
    isAuthenticated: false,
    start:false,
    isStarted:false,
    elapsed:"00"
  };

  onPassName = (nameValue) => {
    this.setState({name: nameValue});
    console.log("App says Hi to " + nameValue);
    // this.setState({loggedIn:true})
    // this.state.loggedIn ? <Redirect push to="/Game" /> : <Redirect to="/" />   
  };

  // timerStart = event => {
  //   event.preventDefault();
    
  //   if(!this.state.isStarted) {
  //     this.setState({start:Date.now(), isStarted:true});
    
  //     this.timer = setInterval(this.tick,1);
  //   }
    
  // }

  // tick = () => this.setState({elapsed: Date.now() - this.state.start});

  render() {
    return (
      <Router>
      <div>
          <Route path="/" component = {()=> <Nav {...this.state} />} />
<<<<<<< HEAD
        
        
          <Switch>
            <Route exact path="/" component = {(props)=> <Login {...props} onPassName={this.onPassName} />} />
            <Route exact path="/Game" component = {()=> <Game timerStart={this.timerStart} name={this.state.name} elapsed={this.state.elapsed} />} />
          </Switch>
        
=======


        <Switch>
          <Route exact path="/" component = {(props)=> <Login {...props} onPassName={this.onPassName} />} />
          <Route exact path="/Game" component = {()=> <Game {...this.state} timerStart={this.timerStart}/>} />
          <Route exact path="/Stats" component = {()=> <Stats {...this.state} />} />
        </Switch>
>>>>>>> 5ea981de6aada53416307fbb33503efe4194cee2
      </div>
    </Router>
    )
  }

 
}
export default App;
