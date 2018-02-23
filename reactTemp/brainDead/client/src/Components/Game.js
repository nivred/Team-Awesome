import React, { Component } from 'react';
import '../App.css';
import ClickItem from "./ClickItem";
import ShuffleDeck from "../ShuffleDeck"

class Game extends Component {
  
    state = {
      ShuffleDeck: ShuffleDeck(),
      score: 0,
      topScore: 0,
      selected: [],
      match: []
    };

    handleItemClick =  (id,position) => {
        if (this.state.match.includes(this.state.ShuffleDeck[position].id)){
            return;
        }
        this.setState((state)=>{
            if (this.state.selected.length==1){
                state.ShuffleDeck[position].flipped = true;
                if (state.ShuffleDeck[position].id==state.ShuffleDeck[this.state.selected[0].position].id){
                    console.log("we have a match")
                    this.state.match.push(state.ShuffleDeck[position]);
                    this.state.selected =[];
                } else {
                // alert("check match selected "+ this.state.selected[0].id +" current " + this.state.ShuffleDeck[position].id);
                 setTimeout(() => {
                    state.ShuffleDeck[position].flipped = false;
                    state.ShuffleDeck[this.state.selected[0].position].flipped = false;
                    console.log(state.ShuffleDeck[1]);
                    console.log(this.state.selected);
                    this.state.selected =[];
                    console.log(this.state.selected);


                    
                }, 0);
            }
            }else{

                state.ShuffleDeck[position].flipped = true;
                this.state.selected.push(state.ShuffleDeck[position]);
                console.log(this.state.selected);
        }
            return {ShuffleDeck: state.ShuffleDeck};
        });
        
        // make something happen
        
    };

  render() {
        return (
            <div className="wrapper">
                <div className="container-fluid text-center">    
                    <div id="main-content" className="row content">
                        <div class="col-xs-12">
                            {this.state.ShuffleDeck.map(item => (
                                <ClickItem
                                    key={item.id}
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
