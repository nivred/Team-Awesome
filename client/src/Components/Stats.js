import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import API from "../utils/API";

class Stats extends Component {
  
    state = {
    response: "",
    name: this.props.name,
    stats: [],
    lastScore: 0,
    bestScore: 0
  };

//pull name from session storage if not in state
componentDidMount = () => {
    if(window.sessionStorage.getItem("SignIn") !== null && this.state.name === "") {
      let getValue = window.sessionStorage.getItem("SignIn"); 
      this.setState({
        name:JSON.parse(getValue).userName
      });
    } else if(window.sessionStorage.getItem("SignIn") == null && this.state.name === "") {
      return this.props.history.push("/");

    }
    if(this.state.name != "") {
        this.getStats();
        this.getLast();
        this.getBest();
      }
};

  //get top ten scores for all users for rankings board
  getStats = () => {
      API.allScores()
      .then(res => {
        console.log(res.data.result);
        let allStats = [];
       for(let i = 1, j = 0; i <= res.data.result.length && i <= 10; i++, j++) {
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
  //get last score for user (most recent game played)
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
  //get best score for user
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



  render() {
        return (
            <div id="stats" className="wrapper">
                <div className="container text-center">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="col-md-12 well">
                            <div className="panel panel-default">
                                <h3 className="panel-body-sm">Your last time was <span id="blink_me">{this.state.lastScore}</span></h3>
                            </div>
                            <div className="panel panel-default">
                                <h3 className="panel-body-sm">Your best time is {this.state.bestScore}</h3>
                            </div>
                            <Link to="/Game"><div type="button" className="btn btn-sample btn-lg">PLAY AGAIN</div></Link>
                        </div>
                        <div id="highScores" className="col-md-12">	
                            <h2>HIGH SCORES</h2>
                            <table className="table" border="0" cellSpacing="0" cellPadding="0">
                                <thead>
                                    <tr>
                                        <th>RANK</th>
                                        <th>NAME</th>
                                        <th>TIME</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.stats.map(stat => (
                                        (this.props.name === stat.user_name && this.state.bestScore === stat.score) ?
                                        <tr className="highlight"><td>{stat.rank}</td><td>{stat.user_name}</td><td>{stat.score}</td></tr>
                                         : <tr><td>{stat.rank}</td><td>{stat.user_name}</td><td>{stat.score}</td></tr>
                                        
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        )
    }
}

export default Stats;
