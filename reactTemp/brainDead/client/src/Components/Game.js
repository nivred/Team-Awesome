import React, { Component } from 'react';
import '../App.css';
import ClickItem from "./ClickItem";
import ShuffleDeck from "../ShuffleDeck"

class Game extends Component {
  
    state = {
      ShuffleDeck: ShuffleDeck(),
      score: 0,
      topScore: 0
    };

    handleItemClick = id => {
        // make something happen
        alert('Flip Me!')
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
                                    shake={!this.state.score && this.state.topScore}
                                    handleClick={this.handleItemClick}
                                    image={item.image}
                                    flipped={item.flipped}
                                    faceDown={item.faceDown}
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
