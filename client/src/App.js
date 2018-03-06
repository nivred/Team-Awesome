import React, { Component } from 'react';

import { 
  Switch, 
  Route, 
  BrowserRouter as Router 
} from 'react-router-dom';

// import styles from './App.css';
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Game from "./Components/Game";
// import ClickItem from "./Components/ClickItem";
import Stats from "./Components/Stats";
import API from "./utils/API"; 

class App extends Component {
 
  state = {
    response: "",
    name: "",
    isAuthenticated: false,
    start:false,
    isStarted:false,
    elapsed:"00",
    cards: []
  };

  onPassName = (nameValue) => {
    this.setState({name: nameValue});
    console.log("App says Hi to " + nameValue);
  };

  getCards = () => {
      API.getCards()
      .then(res => {
        console.log(res.data.result);
        let deck = [];
       for(let i = 0; i < res.data.result.length; i++) {
            let card = {
                id: res.data.result[i].card_id,
                position: 0,
                image: res.data.result[i].image_url,
                flipped: false,
                faceDown: "./assets/images/cardBack.jpg"
            }
            deck.push(card);
         }
        this.setState({cards:deck});
      })
      .catch(err => console.log(err))
  };

  componentDidMount = () => {
    this.getCards();
  };

  render() {
    return (
      <Router>
      <div>
          <Route path="/" component = {()=> <Nav {...this.state} />} />
          <Switch>
            <Route exact path="/" component = {(props)=> <Login {...props} onPassName={this.onPassName} />} />
            <Route exact path="/Game" component = {(props)=> <Game {...props} timerStart={this.timerStart} name={this.state.name} elapsed={this.state.elapsed} cards={this.state.cards} />} />
            <Route exact path="/Stats" component= {()=> <Stats {...this.state} />} />
          </Switch>
        
      </div>
    </Router>
    )
  }

 
}
export default App;
