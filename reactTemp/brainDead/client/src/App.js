import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Game from "./Components/Game";
import ClickItem from "./Components/ClickItem";
import API from "./utils/API";

class App extends Component {
 
  state = {
    response: "",
    name: ""
  };

  onPassName = (nameValue) => {
    this.setState({name: nameValue});
    console.log("App says Hi to " + nameValue);
  };

 

render() {
return (
  <Router>
  <div>
      <Route path="/" component = {()=> <Nav {...this.state} />} />

    <Switch>
      <Route exact path="/" component = {()=> <Login  onPassName={this.onPassName}  />} />
      <Route exact path="/Game" component = {Game} />
    </Switch>
  </div>
</Router>
)
}

 
 }
export default App;
