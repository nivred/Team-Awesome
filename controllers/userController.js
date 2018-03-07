const path = require("path");
const express = require("express");

const router = express.Router();
const bcrypt = require("bcryptjs");

// Import user model to access its functions
const users = require("../models/users");

//login route
router.route("/login")
    .post(function(req,res){

        let data = {
            name: req.body.userdata,
            email: req.body.userdata
            }

        let found = false;
    //find users where either name or email matches login input, then compare hashed password to authenticate user
        users.findEither(data, function(result){
            if(result.length > 0){
                for(let i = 0; i < result.length; i++) {
                    //compare hashed password
                    let pwComp = bcrypt.compareSync(req.body.password, result[i].user_password);
                    //if password match, return success and user data
                     if(res){
                        found = true;
                        res.send({
                            status: "Success",
                            name: result[i].user_name,
                            email: result[i].user_email,
                            url: '/game'
                        });
                    }
                    
                }
                //if password not matched
                if(!found) {
                    res.send({
                        status: "Incorrect password",
                        url:'/login'
                     });
                 }
            //if user name or email not found
            } else {
                res.send({
                    status: "User not found",
                    url: '/register'
                });
            }   
         });        
    });
//check if user exists
router.route("/exists")
    .post(function(req, res){
          let data = {
            name: req.body.userdata,
            email: req.body.userdata
            }
        //find users where either name or email matches input
        users.findEither(data, function(result){
            //if match found, return user data
            if(result.length > 0){
                    res.send({
                        status: "User found",
                        name: result[0].user_name,
                        email: result[0].user_email,
                    });
                //if user name or email not found
                } else {
                    res.send({
                        status: "User not found",
                     });
                }
          });        
    });

//select all users
router.route("/")
    .get(function(req, res) {

        users.selectAll(function(result){
            if(result === "Database Error"){
                res.send({
                    status: "Internal Database Error"
                });
            } else {
                let str = JSON.stringify(result)
                res.send({ result });
            }
        });
    });
    
//register route
router.route("/register")
    .post(function(req, res) {

          let data = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
            }
        //check if email or name matches existing user
        users.findEither(data, function(result){
            if(result.length > 0){
                //if user found, do not register
                res.send({
                    status: "User is already registered",
                    name: result[0].user_name,
                    email: result[0].user_email,
                    url: '/login'
                });
            } else {
                //if user not found, add row to users table
                users.createNew(data, function(result){
                    if(result === "Database Error"){
                        res.send({
                            status: "Internal Database Error"
                        });
                    } else {
                        res.send({
                            status: 'Success',
                            name: result[0].user_name,
                            email: result[0].user_email,
                            url: '/game'
                        });
                    }
                });   
            }
        });
});
//change password route
router.route("/password")
    .post(function(req, res) {

          let data = {
            name: req.body.name,
            password: req.body.password
            }
        //update password in table for user
        users.changePassword(data, function(result){
            if(result[0].changedRows == 1){

                res.send({
                    status: "Password successfully changed",
                    url: '/game'
                });
            } else {

                res.send({
                    status: 'Password could not be changed',
                    url: '/password'
                });
            }
        });
    
});
//find user by name
router.route("/name")
    .post(function(req, res) {

   
        users.findByName(req.body.name, function(result){
            if(result[0]){
                res.send({
                    status: "Name found",
                    name: result[0].user_name,
                    email: result[0].user_email,
                });
            } else {
                res.send({
                    status: "Name not found",
                });
            }
        });
    
});
//find user by email
router.route("/email")
.post(function(req, res) {


    users.findByEmail(req.body.email, function(result){
        if(result[0]){
            res.send({
                status: "Email found",
                name: result[0].user_name,
                email: result[0].user_email,
            });
        } else {
            res.send({
                status: "Email not found",
            });
        }
    });
    
});


module.exports = router;