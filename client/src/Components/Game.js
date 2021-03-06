import React, { Component } from 'react';
import '../App.css';
import ClickItem from "./ClickItem";
import ShuffleDeck from "../ShuffleDeck"
import API from "../utils/API";
//setting state for the game
class Game extends Component {
  
    state = {
      ShuffleDeck: ShuffleDeck(this.props.cards),
      name: this.props.name,
      score: 0,
      selected: [],
      match: [],
      start:null,
      isStarted:false,
      elapsed:"00"
    };
//get user name from session storage if not in state
componentDidMount = () => {
    if(window.sessionStorage.getItem("SignIn") !== null && this.state.name === "") {
        let getValue = window.sessionStorage.getItem("SignIn"); 
        this.setState({
        name:JSON.parse(getValue).userName
        });
    } else if(window.sessionStorage.getItem("SignIn") == null && this.state.name === "") {
        return this.props.history.push("/");
      }
};
    
//this will convert milliseconds to hours, minutes and seconds
millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    if(minutes > 59) {
        var hours = minutes - 59;
        minutes = 59;
    }
    else {
        hours = 0;
    }
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (hours < 10 ? '0' : '') + hours + ":" + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
//post scores to database
addScoreSubmit = () => {       
    API.addScore({
        name: this.state.name,
        score: this.millisToMinutesAndSeconds(this.state.elapsed),
        theme: 1
    })
    .then(res => {
                      
    })
    .catch(err => console.log(err))
};
     
//checks time to see if we should update state
shouldComponentUpdate(nextProp, nextState) {
    if(this.state.elapsed !== nextState.elapsed || this.state.start !== nextState.start || this.state.isStarted !== nextState.isStarted) {
        return false;
    } else {
        return true;
    }
}
//displays the timer
formatNumDisplay = num => Math.log10(num) < 1 ? `0${num}` : num;
//formats time
formatTime = (time,string) => {
    switch (string) {
        case 'milliseconds':
            return this.formatNumDisplay(Math.floor(time % 1000));
        case 'seconds':
            return this.formatNumDisplay(Math.floor((time / 1000) % 60));
        case 'minutes':
            return this.formatNumDisplay(Math.floor((time / 1000) / 60));
        default:
            return this.formatNumDisplay(Math.floor((time / 1000) / 60));
        }
};
    
timer;

//starts the timer
timerStart = event => {
    event.preventDefault();
    if(!this.state.isStarted) {
        this.setState({start:Date.now(), isStarted:true});
        this.timer = setInterval(this.tick,1);
    }
        
}
 //used the timer   
tick = () => this.setState(()=>{
    const elapsed = Date.now() - this.state.start
    document.querySelector("#minutes").textContent = this.formatTime(elapsed, "minutes")
    document.querySelector("#seconds").textContent = this.formatTime(elapsed, "seconds")
    return {elapsed}
});
//when user matches all cards
youWin = () => {
    this.setState(
        {isStarted:false,
        ShuffleDeck:ShuffleDeck(this.props.cards),
        start:0,
        match:[],
        selected:[]
    });
    return this.props.history.push("/Stats");
}
//card gameplay
handleItemClick =  (id,position) => {
//if you click on card that has already been matched return to click another card
    if (this.state.match.includes(this.state.ShuffleDeck[position].id)){
        return;
    } else {
    //evaluate the card clicked and once done then update state
        this.setState( state => {
        // if the first card is in selected then compare the first and second cards
            if (state.selected.length===1){
                //if the first and second cards are the same ignore and return
                if((state.ShuffleDeck[position].position===state.ShuffleDeck[state.selected[0].position].position)){
                    return;
                } 
            // flip the card over
            state.ShuffleDeck[position].flipped = true;
            //checks to see if there is a match and if there is push into match
            if (state.ShuffleDeck[position].id===state.ShuffleDeck[state.selected[0].position].id){
                this.state.match.push(state.ShuffleDeck[position].id);
                // check for a win and if there is update score clear time and reset game
                if (this.state.match.length===6) {
                    clearInterval(this.timer);
                    this.addScoreSubmit();
                    setTimeout(()=> this.youWin(state), 500)
                }                    
            } else {
                    // if no match flip cards back either by click or timer
                    setTimeout(() => {
                        state.ShuffleDeck[position].flipped = false;
                        state.ShuffleDeck[state.selected[0].position].flipped = false;
                    }, 300);
              }
        } else{
            //flip first card and push into selected and return and update state
            state.ShuffleDeck[position].flipped = true;
            this.state.selected.push(state.ShuffleDeck[position]);
            return {ShuffleDeck: state.ShuffleDeck};
        }
        return {ShuffleDeck: state.ShuffleDeck, selected: []};
    });
        
    }  
};

render() {
    return (
        <div className="wrapper">
            <div className="container-fluid text-center">    
                <div id="main-content" className="row content">
                    <div className="col-xs-12 col-sm-12">
                        {this.state.ShuffleDeck.map((item, i) => (
                            <ClickItem
                                key={i}
                                timerStart={this.timerStart}
                                id={item.id}
                                handleClick={this.handleItemClick}
                                image={item.image}
                                flipped={item.flipped}
                                faceDown={item.faceDown}
                                position={item.position}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default Game;
