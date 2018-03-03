import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import API from "../utils/API";

class Stats extends Component {
  
    state = {
    response: "",
    stats: [],
    lastScore: 0,
    bestScore: 0
  };

  getStats = () => {
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
  };

  getLast = () => {
    if(this.props.name) {
      API.lastScore({
        name: this.props.name})
      .then(res => {
        console.log(res.data.result);  
        this.setState({lastScore:res.data.result[0].score});
      })
      .catch(err => console.log(err))
    }
  };

  getBest = () => {
    if(this.props.name) {
      API.bestScore({
        name: this.props.name})
      .then(res => {
        console.log(res.data.result);
        this.setState({bestScore:res.data.result[0].score});
      })
      .catch(err => console.log(err))
    }
  };


componentDidMount = () => {
    window.addEventListener('load', this.getStats());
    console.log("Hello, " + this.props.name + " from the Stats Component");
    this.getLast();
    this.getBest();
};


  render() {
        return (
            <div id="stats" class="wrapper">
                <div class="container text-center">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <div class="col-md-12 well">
                            <div class="panel panel-default">
                                <h3 class="panel-body-sm">Your time was: {this.state.lastScore}</h3>
                            </div>
                            <div class="panel panel-default">
                                <h3 class="panel-body-sm">Your best time is: {this.state.bestScore}</h3>
                            </div>
                            <Link to="/Game"><div type="button" class="btn btn-success btn-lg">PLAY AGAIN</div></Link>
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
