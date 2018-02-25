import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
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
    name: ""//,
    // loggedIn: false
  };

  onPassName = (nameValue) => {
    this.setState({name: nameValue});
    console.log("App says Hi to " + nameValue);
    // this.setState({loggedIn:true})
    // this.state.loggedIn ? <Redirect push to="/Game" /> : <Redirect to="/" />   
  };

 

  render() {
    return (
      <Router>
      <div>
          <Route path="/" component = {()=> <Nav {...this.state} />} />

        <Switch>
          <Route exact path="/" component = {()=> <Login onPassName={this.onPassName} />} />
          <Route exact path="/Game" component = {Game} />
          <Route exact path="/Stats" component = {Stats} />
        </Switch>
      </div>
    </Router>
    )
  }

 
}
export default App;
