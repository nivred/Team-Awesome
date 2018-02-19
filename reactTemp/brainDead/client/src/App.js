import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Game from "./Components/Game";
import data from "./data.json";

const App = () =>

  <Router>
    <div>
      {
        <Nav />
      }
      <Switch>
        <Route exact path="/" component = {Login} />
        <Route exact path="/Game" component = {Game} />
      </Switch>
    </div>
  </Router>

  {/* <Route component = {NoMatch} /> */}

export default App;
