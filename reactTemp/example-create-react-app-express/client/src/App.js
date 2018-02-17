import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class Login extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/Game">Logo</a> {/*href needs to change from /Game to /*/}
            </div>
          </div>
        </nav>
        
        <div className="wrapperAnimation">
          <h1 className="goodVibration">
            <span>T<span className="redText">O</span>TAL</span><br />
            <span>RECALL</span>
          </h1>
        </div>
        
        <div className="container-fluid text-center">

          <div className="col-sm-3 col-md-4"></div>
          
            <div id="login" className="well col-sm-6 col-md-4">
                <h2>User Login</h2>
                <div className="panel panel-default">
                  <div className="panel-body">
                    <form action="/api/login" method="POST">
                      <div className="form-group text-left">
                        <label for="email">E-Mail</label>
                        <input type="text" className="form-control" id="email" placeholder="contact@example.com" />
                      </div>
                      <div className="form-group text-left">
                        <label for="pwd">Password</label>
                        <input type="text" className="form-control" id="password" placeholder="Password" />
                      </div>
                      <button type="submit" className="btn btn-lg">Sign In</button>
                      <button type="button" className="btn btn-lg" data-toggle="modal" data-target="#myModal">Register</button>	
                    </form>
                  
                  </div>
                </div>
              </div>

            <div className="col-sm-3 col-md-4"></div>

          </div>

          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
          
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h2 className="modal-title">New User Info</h2>
                </div>

                <div className="modal-body">
                  <form action="/action_page.php">
                    <div className="form-group">
                      <label for="username">Username:</label>
                      <input type="text" className="form-control" id="pwd" />
                    </div>
                    <div className="form-group">
                      <label for="email">Email address:</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label for="pwd">Password:</label>
                      <input type="password" className="form-control" id="pwd" />
                    </div>
                    <div className="form-group">
                      <label for="pwd">Confirm Password:</label>
                      <input type="password" className="form-control" id="pwd" />
                    </div>
                  </form>
                </div>
          
                <div className="modal-footer">
                  <button type="submit" className="btn btn-lg" data-dismiss="modal">Submit</button>
                </div>
          
              </div> 
            </div> 
          </div> 
        </div>
    );
  }
}

class Game extends Component {

  render() {
    return (
      <div className="wrapper">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Logo</a>
            </div>
            <div className="navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-stats"></span> Stats</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-log-out"></span> Sign out</a></li>
              </ul>
            </div>
          </div>
        </nav>
          
        <div className="container-fluid text-center">    
          <div className="row content">

            <div className="col-sm-4 col-md-3 sidenav">

              <div className="well">
                <h2>Timer</h2>
                <div className="panel panel-default">
                  <div className="panel-body">
                    <h1>00:00</h1>
                    <button onClick="">START GAME</button>
                  </div>
                </div>
              </div>

              <div className="well text-center">
                <div className="form-group">
                  <h2>Options</h2>
                  <div className="panel panel-default text-left">
                    <div className="panel-body">
                      <label for="cardSpeed">Speed:</label>
                      <select className="form-control" id="card-speed">
                        <option>4 sec</option>
                        <option>3 sec</option>
                        <option>2 sec</option>
                        <option>1 sec</option>
                      </select>              
                    </div>
                  </div>

                  <div className="panel panel-default text-left">
                    <div className="panel-body">
                      <label for="cardNumber">Card #:</label>
                      <select className="form-control" id="card-number">
                        <option>8 cards</option>
                        <option>12 cards</option>
                        <option>16 cards</option>
                        <option>20 cards</option>
                      </select>
                    </div>
                  </div>

                  <div className="panel panel-default text-left">
                    <div className="panel-body">
                      <label for="cardTheme">Themes:</label>
                      <select className="form-control" id="card-theme">
                        <option>Theme 1</option>
                        <option>Theme 2</option>
                        <option>Theme 3</option>
                      </select>          
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="main-content" className="col-sm-8 col-md-9 text-center"> 
              <div className="row">
                <div className="col-sm-3 col-md-3">
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
                    <div className="card-block">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

const App = () =>
<Switch>
  <Route exact path="/" component = {Login} />
  <Route exact path="/Game" component = {Game} />
</Switch>

{/* <Route component = {NoMatch} /> */}

export default App;
