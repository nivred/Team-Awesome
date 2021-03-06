import React, { Component } from 'react';
import '../App.css';
// import data from "./data.json";
// import { Route, Redirect } from 'react-router';
import API from "../utils/API";
const bcrypt = require("bcryptjs");

   const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
class Login extends Component {
    
  state = {
    response: "",
    userdata: "",
    name: "",
    email: "",
    password: "",
    pwd2: "",
    validEmail:false
  };

  
  componentDidMount = () => {
    // User Persistence >>> This could possibly be simplified if all instances of state name is pulled from the parent component's state name
    if(window.sessionStorage.getItem("SignIn") !== null && this.state.name === "") {
      let getValue = window.sessionStorage.getItem("SignIn"); 
      this.setState({
        name:JSON.parse(getValue).userName
      });
    }
  };

  // handle changes for onchange events
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  // Passing information back to parent component
  handlePassName = nameValue => {
    this.props.onPassName(nameValue);
  };


  // Check if Login has information in the input fields and checks if the email and passwords are correct
  handleLoginSubmit = event => {
    event.preventDefault();
    if(this.state.userdata && this.state.password) {
      API.login({
        userdata: this.state.userdata,
        password: this.state.password
      })
      .then(res => {

        if(res.data.status==="Success") {

            this.setState({name:res.data.name});
            this.setState({email:res.data.email});
            window.sessionStorage.setItem("SignIn",JSON.stringify({userName:this.state.name,time:Date.now()}));
            this.handlePassName(this.state.name);

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

  // Handles registration form
  handleRegisterSubmit = event => {
    event.preventDefault();
    // -----------------------------------------------------------------
    
    console.log(emailRegEx.test(this.state.email));
    if (emailRegEx.test(this.state.email)) {
      
      this.setState({validEmail:emailRegEx.test(this.state.email)});

    }
    // -----------------------------------------------------------------
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
      const saltRounds = 10;
      let salt = bcrypt.genSaltSync(saltRounds);
      let hash = bcrypt.hashSync(this.state.password, salt);
      API.register({
        name: this.state.name,
        email: this.state.email,
        password: hash
      })
      .then(res => {
        console.log(res);
        this.setState({name:res.data.name});
        this.handlePassName(this.state.name);
        this.setState({validEmail:false});
      })
      .catch(err => console.log(err))
    }
  };

  // Checks if there are any changes to the username/email fields and if it matches anything in the database, effectively telling the user if the username/email is taken
  handleUsername = (userData,myStr) => {

    const activeElement = document.querySelector("#"+myStr+"OK")
    
    if(document.querySelector("#"+myStr.toLowerCase()).value === ""){
      activeElement.classList.remove("glyphicon-remove");
      activeElement.classList.remove("checkUserChange");
      activeElement.classList.remove("glyphicon-ok");
      activeElement.classList.remove("checkUserOK");
      activeElement.classList.add("glyphicon-remove");
      activeElement.classList.add("checkUserChange");
      return;
    };
    
    if ( emailRegEx.test(this.state.email) === false && myStr.toLowerCase() === "email") {
      this.setState({validEmail:false});
      document.querySelector("#validEmail").innerHTML = "Invalid form of Email<br />(ie. abc123@abc.edu)"
    } else {
      this.setState({validEmail:true});
      document.querySelector("#validEmail").innerHTML = ""
    };

    API.checkUser({ userdata: userData }).then(res => {
      if(res.data.status === "User not found") {
        activeElement.classList.add("glyphicon-ok")
        activeElement.classList.add("checkUserOK")
        activeElement.classList.remove("glyphicon-remove")
        activeElement.classList.remove("checkUserChange")
      } else {
        activeElement.classList.add("glyphicon-remove")
        activeElement.classList.add("checkUserChange")
        activeElement.classList.remove("glyphicon-ok")
        activeElement.classList.remove("checkUserOK")
      }
    }).catch(err => console.log(err));
  }

  // Checks if both password entries match
  handlePwdConfirm = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
    let pwd1 = document.querySelector("#pwd1").value;
    let pwd2 = document.querySelector("#pwd2").value;
    let validMatch = document.querySelector("#valid");
    validMatch.textContent = pwd1 === pwd2 ? "" : "Confirm Password";
  };

    render() {
        return (
            
        <div className="wrapper">
            
            <div id="landing" className="container-fluid text-center">

                <div className="col-sm-3 col-md-4"></div>

                    <div id="login" className="well col-sm-6 col-md-4">
                        <h2>User Login</h2>
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form onSubmit={this.handleLoginSubmit}> 
                                   <div className="form-group text-left">
                                        <label htmlFor="email">Username / E-Mail</label>
                                        <input type="text" className="form-control" id="username-email" placeholder="contact@example.com" name="userdata"
                                        value={this.state.userdata}
                                        onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group text-left">
                                        <label htmlFor="pwd">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Password" name="password"
                                     value={this.state.password}
                                    onChange={this.handleInputChange} />
                                    </div>
                                    <div className="col-sm-6 col-md-6 text-center">
                                        <button type="submit" className="btn btn-lg"
                                        disabled={!(this.state.userdata && this.state.password)}
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
                                    <div className="col-md-6">
                                        <label htmlFor="username">Username:</label>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <span id="userNameOK" className="glyphicon"></span>
                                    </div>
                                    <input type="text" className="form-control" id="username" name="name" 
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    onBlur={() => this.handleUsername(this.state.name,"userName")} />
                               </div>
                                <div className="form-group">
                                    <div className="col-md-6">
                                        <label htmlFor="email">Email address:</label>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <span id="emailOK" className="glyphicon"></span>
                                    </div>
                                    <input type="email" className="form-control" id="email" name="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    onBlur={() => this.handleUsername(this.state.email,"email")} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control" id="pwd1" name="password" 
                                    value={this.state.password}
                                    onChange={this.handlePwdConfirm} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd">Confirm Password:</label>
                                    <input type="password" className="form-control" id="pwd2" name="pwd2" 
                                    value={this.state.pwd2} 
                                    onChange={this.handlePwdConfirm} />
                              </div>
                                <div className="modal-footer">
                                    <div className="col-md-6 text-left">
                                      <span id="valid"></span><br />
                                      <span id="validEmail"></span>
                                    </div>
                                    <div className="col-md-6">
                                      <button type="submit" className="btn btn-lg" data-dismiss="modal"
                                        disabled={!(this.state.name && this.state.email && this.state.password && this.state.pwd2) || this.state.password !== this.state.pwd2 || !(this.state.validEmail)}
                                        onChange={this.handlePwdConfirm} 
                                        onClick={this.handleRegisterSubmit}>Submit</button>
                                    </div>
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
