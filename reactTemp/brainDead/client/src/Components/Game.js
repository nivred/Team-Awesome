import React, { Component } from 'react';
import '../App.css';
import ClickItem from "./ClickItem";
import ShuffleDeck from "../ShuffleDeck"

class Game extends Component {
  
    state = {
      ShuffleDeck: ShuffleDeck(),
      name: this.props.name,
      score: 0,
      topScore: 0,
      selected: [],
      match: []
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
        alert(this.state.name);
        alert(this.state.elapsed/60/60);
        this.setState(
            {isStarted:false,
            ShuffleDeck:ShuffleDeck(),
            start:0,
            match:[],
            selected:[]
        });
    }

    handleItemClick =  (id,position) => {
        // console.log("match is");
        // console.log(this.state.match);
        // console.log("position id"+this.state.ShuffleDeck[position].id);
        if (this.state.match.includes(this.state.ShuffleDeck[position].id)){
            // console.log("i did a return")
            return;
        
        } else{
        this.setState((state)=>{
            if (this.state.selected.length==1){
                if((state.ShuffleDeck[position].position==state.ShuffleDeck[this.state.selected[0].position].position)){
                    return;
                } 
                state.ShuffleDeck[position].flipped = true;
                if (state.ShuffleDeck[position].id==state.ShuffleDeck[this.state.selected[0].position].id){
                    console.log("we have a match")
                    this.state.match.push(state.ShuffleDeck[position].id);
                    this.state.selected =[];
                    if (this.state.match.length==6) {
                        alert("you won");
                        this.youWin();
                    }
                } else {
                console.log("check match selected "+ this.state.selected[0].id +" current " + this.state.ShuffleDeck[position].id);
                 setTimeout(() => {
                    state.ShuffleDeck[position].flipped = false;
                    state.ShuffleDeck[this.state.selected[0].position].flipped = false;
                    console.log(state.ShuffleDeck[1]);
                    console.log(this.state.selected);
                    this.state.selected =[];
                    console.log(this.state.selected);
                }, 500);
            }
            }else{

                state.ShuffleDeck[position].flipped = true;
                this.state.selected.push(state.ShuffleDeck[position]);
                console.log(this.state.selected);
        }
            return {ShuffleDeck: state.ShuffleDeck};
        });
        
        // make something happen
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
