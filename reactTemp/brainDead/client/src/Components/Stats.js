import React, { Component } from 'react';
import '../App.css';
import API from "../utils/API";

class Stats extends Component {
  
    state = {
    response: "",
    stats: []
  };

  getStats = () => {
    if(this.props.name) {
      API.allScores()
      .then(res => {
        console.log(res);
        
        this.setState({stats:res});
      })
      .catch(err => console.log(err))
    }
  };


componentDidMount = () => {
    getStats();
};


  render() {
        return (
            <div id="stats" class="wrapper">
                <div class="container text-center">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <div class="col-md-12 well">
                            <div class="panel panel-default">
                                <h3 class="panel-body-sm">Your time was: 00:30</h3>
                            </div>
                            <div class="panel panel-default">
                                <h3 class="panel-body-sm">Your best time is: 00:20</h3>
                            </div>
                            <a href="#" type="button" class="btn btn-success btn-lg">PLAY AGAIN</a>
                        </div>
                        <div class="col-md-12">	
                            <h2>HIGH SCORES</h2>
                            <table class="table" border="0" cellspacing="0" cellpadding="0">
                                <thead>
                                    <tr>
                                        <th>RANK</th>
                                        <th>NAME</th>
                                        <th>TIME</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>USERNAME</td>
                                        <td>00:20</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>USERNAME</td>
                                        <td>00:20</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>USERNAME</td>
                                        <td>00:20</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>USERNAME</td>
                                        <td>00:20</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>USERNAME</td>
                                        <td>00:20</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>USERNAME</td>
                                        <td>00:20</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>USERNAME</td>
                                        <td>00:20</td>
                                    </tr>			
                                    <tr>
                                        <td>8</td>
                                        <td>USERNAME</td>
                                        <td>00:20</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>USERNAME</td>
                                        <td>00:20</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>USERNAME</td>
                                        <td>00:20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        )
    }
}

export default Stats;
