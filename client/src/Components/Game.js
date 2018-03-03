import React, { Component } from 'react';
import '../App.css';
import ClickItem from "./ClickItem";
import ShuffleDeck from "../ShuffleDeck"
import API from "../utils/API";

class Game extends Component {
  
    state = {
      ShuffleDeck: ShuffleDeck(),
      name: this.props.name,
      score: 0,
      topScore: 0,
      selected: [],
      match: [],
      start:null,
      isStarted:false,
      elapsed:"00"
    };

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
     

    shouldComponentUpdate(nextProp, nextState) {
        if(this.state.elapsed !== nextState.elapsed || this.state.start !== nextState.start || this.state.isStarted !== nextState.isStarted) {
            return false;
        } else {
            return true;
        }
    }

    formatNumDisplay = num => Math.log10(num) < 1 ? `0${num}` : num;

    formatTime = (time,string) => {
        switch (string) {
            case 'milliseconds':
                return this.formatNumDisplay(Math.floor(time % 1000));
                break;
            case 'seconds':
                return this.formatNumDisplay(Math.floor((time / 1000) % 60));
                break;
            case 'minutes':
                return this.formatNumDisplay(Math.floor((time / 1000) / 60));
                break;
        }


    };
    
    timer;


    timerStart = event => {
        event.preventDefault();
        
        if(!this.state.isStarted) {
          this.setState({start:Date.now(), isStarted:true});
        
          this.timer = setInterval(this.tick,1);
        }
        
    }
    
    tick = () => this.setState(()=>{
        const elapsed = Date.now() - this.state.start
        document.querySelector("#minutes").textContent = this.formatTime(elapsed, "minutes")
        document.querySelector("#seconds").textContent = this.formatTime(elapsed, "seconds")
        return {elapsed}

    });

    youWin = () => {
        this.addScoreSubmit();
        this.setState(
            {isStarted:false,
            ShuffleDeck:ShuffleDeck(),
            start:0,
            match:[],
            selected:[]
        });
        
    }

    handleItemClick =  (id,position) => {
        if (this.state.match.includes(this.state.ShuffleDeck[position].id)){
            return;
        
        } else{
        this.setState((state)=>{
            if (this.state.selected.length > 1) {
                alert("this is selected greater than 1 "+this.state.selected.length);
                return;
            }
            if (this.state.selected.length===1){
                if((state.ShuffleDeck[position].position==state.ShuffleDeck[this.state.selected[0].position].position)){
                    return;
                this.state.selected.push(state.ShuffleDeck[position]);

                } 
                state.ShuffleDeck[position].flipped = true;
                if (state.ShuffleDeck[position].id==state.ShuffleDeck[this.state.selected[0].position].id){
                    this.state.match.push(state.ShuffleDeck[position].id);
                    this.state.selected =[];
                    if (this.state.match.length==6) {
                        // alert("you won");
                        state.ShuffleDeck[position].flipped = true;
                        clearInterval(this.timer);
                        this.youWin(state);
                        
                    }
                } else {
                setTimeout(() => {
                    state.ShuffleDeck[position].flipped = false;
                    state.ShuffleDeck[this.state.selected[0].position].flipped = false;
                    this.state.selected =[];
                    console.log(this.state.selected);
                }, 300);
            }
            }else{

                state.ShuffleDeck[position].flipped = true;
                this.state.selected.push(state.ShuffleDeck[position]);
        }
            return {ShuffleDeck: state.ShuffleDeck};
        });
     }  
    };

  render() {
        return (
            <div className="wrapper">
                <div className="container-fluid text-center">    
                    <div id="main-content" className="row content">
                        <div class="col-xs-12 col-sm-12">
                            {this.state.ShuffleDeck.map(item => (
                                <ClickItem
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
