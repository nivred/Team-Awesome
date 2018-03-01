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
        console.log(res.data.result);
        let allStats = [];
       for(let i = 1, j = 0; i <= res.data.result.length; i++, j++) {
            let score = {
                rank: i,
                user_name: res.data.result[j].user_name,
                score: res.data.result[j].score
            }
            allStats.push(score);
         }
        this.setState({stats:allStats});
      })
      .catch(err => console.log(err))
    }
  };


componentDidMount = () => {
    window.addEventListener('load', this.getStats());
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
                            <a href="/game" type="button" class="btn btn-success btn-lg">PLAY AGAIN</a>
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
                                    {this.state.stats.map(stat => (
                                        <tr><td>{stat.rank}</td><td>{stat.user_name}</td><td>{stat.score}</td></tr>
                                        ))}
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
