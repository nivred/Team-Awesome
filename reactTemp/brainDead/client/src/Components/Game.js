import React, { Component } from 'react';
import '../App.css';
import ClickItem from "./ClickItem";
import data from "../data.json";

class Game extends Component {
  
    state = {
      data,
      score: 0,
      topScore: 0
    };

    handleItemClick = event => {
        // make something happen
        alert('Flip Me!')
    };

  render() {
        return (
            <div className="wrapper">
                <div className="container-fluid text-center">    
                    <div id="main-content" className="row content col-md-3">
                        {this.state.data.map(item => (
                            <ClickItem
                                key={item.id}
                                id={item.id}
                                shake={!this.state.score && this.state.topScore}
                                handleClick={this.handleItemClick}
                                image={item.image}
                            />
                        ))}
                        {/* {/* <div className="row"> */}
                            {/* <div className="col-sm-3 col-md-3">
                            <div className="card" data-tilt data-tilt-glare="true" data-tilt-transition="true"  data-tilt-scale="1.1">
                                <div className="card-block">
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3 col-md-3">
                            <div className="card">
                                <div className="card-block">
                                </div>
                            </div>
                            </div>        
                            <div className="col-sm-3 col-md-3">
                            <div className="card">
                                <div className="card-block">
                                </div>
                            </div>
                            </div>        
                            <div className="col-sm-3 col-md-3">
                            <div className="card">
                                <div className="card-block">
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-3 col-md-3">
                            <div className="card">
                                <div className="card-block">
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3 col-md-3">
                            <div className="card">
                                <div className="card-block">
                                </div>
                            </div>
                            </div>        
                            <div className="col-sm-3 col-md-3">
                            <div className="card">
                                <div className="card-block">
                                </div>
                            </div>
                            </div>        
                            <div className="col-sm-3 col-md-3">
                            <div className="card">
                                <div className="card-block">
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-3 col-md-3">
                            <div className="card">
                                <div className="card-block">
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-3 col-md-3">
                            <div className="card">
                                <div className="card-block">
                                </div>
                            </div>
                            </div>        
                            <div className="col-sm-3 col-md-3">
                            <div className="card">
                                <div className="card-block">
                                </div>
                            </div>
                            </div>        
                            <div className="col-sm-3 col-md-3">
                            <div className="card">
                                <div className="card-block"> */}
                                {/* </div> */}
                            {/* </div> */}
                            {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;
