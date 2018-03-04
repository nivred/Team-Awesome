import React, { Component } from 'react';
import '../App.css';
// import data from "./data.json";
import {Route, Redirect} from 'react-router';
import API from "../utils/API";

class Login extends Component {
    
  state = {
    response: "",
    name: "",
    email: "",
    password: "",
    pwd2: "",
    isAuthenticated:false
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handlePassName = (nameValue) => {
      console.log(nameValue);
    this.props.onPassName(nameValue);
  };

  handleLoginSubmit = event => {
    event.preventDefault();
    if(this.state.email && this.state.password) {
      API.login({
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res);
        if(res.data.status==="Success") {
            console.log("hello you are here");
            // this.props.name =res.data.name;
            console.log(res.data.name);
            this.setState({name:res.data.name});
            window.sessionStorage.setItem("SignIn",JSON.stringify({userName:this.state.name,time:Date.now()}));
            this.handlePassName(this.state.name);
            console.log("this "+ this.props.name);
            return(
                this.props.history.push("/game") 
            );
        } else {
          const placeHolderFix = () => {
            document.querySelector("#password").value = "";
            document.querySelector("#password").placeholder = "INVALID PASSWORD";
          }
          placeHolderFix();
          setTimeout(() => document.querySelector("#password").placeholder = "Password", 1500);
      }})
      .catch(err => console.log(err))
    }
  };

  handleRegisterSubmit = event => {
    event.preventDefault();
    if(this.state.password !== this.state.pwd2) {
      let notMatch = "Not a Match, Re-Enter Passwords"
      document.querySelector("#pwd1").placeholder = notMatch;
      document.querySelector("#pwd2").placeholder = notMatch;
      setTimeout(() => {
        document.querySelector("#pwd1").placeholder = "";
        document.querySelector("#pwd2").placeholder = "";
      }, 1500)
      return;
    }
    if(this.state.name && this.state.email && this.state.password) {
      API.register({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res);
        
        this.setState({name:res.data.name});
        this.handlePassName(this.state.name);

        
      })
      .catch(err => console.log(err))
    }
  };

  handleUsername = () => {
    console.log(`username: ${this.state.name}`)
    API.checkUser({ userdata: this.state.name }).then(res => {
      console.log(res.data.status);
      if(res.data.status === "User found") {
        alert("Can Use");
        document.querySelector("#userNameOK").classList.add("glyphicon-ok")
        document.querySelector("#userNameOK").classList.remove("glyphicon-remove")
      } else {
        alert("Cannot Use");
        document.querySelector("#userNameOK").classList.add("glyphicon-remove")
        document.querySelector("#userNameOK").classList.remove("glyphicon-ok")
      }
    })
  }

  handlePwdConfirm = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
    let pwd1 = document.querySelector("#pwd1").value;
    let pwd2 = document.querySelector("#pwd2").value;

    pwd1 === pwd2 ? (document.querySelector("#valid").textContent = "") : (document.querySelector("#valid").textContent = "Confirm Password");
  };


    
    render() {
        return (

        <div className="wrapper">


            {/* <div className="wrapperAnimation">
                <h1 className="goodVibration">
                    <span>BR<span className="redText">AI</span>N</span><br />
                    <span>DEAD</span>
                </h1>
            </div> */}
            
            <div id="landing" className="container-fluid text-center">

                <div className="col-sm-3 col-md-4"></div>

                    <div id="login" className="well col-sm-6 col-md-4">
                        <h2>User Login</h2>
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form onSubmit={this.handleLoginSubmit}> 
                                   <div className="form-group text-left">
                                        <label for="email">E-Mail</label>
                                        <input type="text" className="form-control" id="username-email" placeholder="contact@example.com" name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group text-left">
                                        <label for="pwd">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Password" name="password"
                                     value={this.state.password}
                                    onChange={this.handleInputChange} />
                                    </div>
                                    <div className="col-sm-6 col-md-6 text-center">
                                        <button type="submit" className="btn btn-lg"
                                        disabled={!(this.state.email && this.state.password)}
                                        onClick={this.handleLoginSubmit}>Sign In</button>
                                    </div>
                                    <div className="col-sm-6 col-md-6 text-center">
                                        <button type="button" className="btn btn-lg" data-toggle="modal" data-target="#myModal">Register</button>	
                                    </div>
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
                            <h2 className="modal-title text-center">Create New User</h2>
                        </div>

                        <div className="modal-body">
                             <form onSubmit={this.handleRegisterSubmit}> 
                                <div className="form-group">
                                    <label for="username">Username <span id="userNameOK" class="glyphicon"></span>:</label>
                                    <input style={{display : 'inline-block'}} type="text" className="form-control" id="username" name="name" 
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleUsername} />
                               </div>
                                <div className="form-group">
                                    <label for="email">Email address:</label>
                                    <input type="email" className="form-control" id="email" name="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label for="pwd">Password:</label>
                                    <input type="password" className="form-control" id="pwd1" name="password" 
                                    value={this.state.password}
                                    onChange={this.handlePwdConfirm} />
                                </div>
                                <div className="form-group">
                                    <label for="pwd">Confirm Password:</label>
                                    <input type="password" className="form-control" id="pwd2" name="pwd2" 
                                    value={this.state.pwd2} 
                                    onChange={this.handlePwdConfirm} />
                              </div>
                                <div className="modal-footer">
                                    <div id="valid"></div>
                                    <button type="submit" className="btn btn-lg" data-dismiss="modal"
                                    disabled={!(this.state.name && this.state.email && this.state.password && this.state.pwd2)}
                                    onChange={this.handlePwdConfirm} 
                                    onClick={this.handleRegisterSubmit}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div>
        );
    }
}

export default Login;
