const path = require("path");
const express = require("express");
// const fs = require('fs');

const router = express.Router();
// var axios = require("axios");
// var PATH = '../client/public/'

// Import user model to access its orm functions
var users = require("../models/users");

console.log("hello from userController");
// module.exports = {
// login = function(req, res) {
router.route("/login")
    .post(function(req,res){
        users.findByEmail(req.body.email, function(result){
            console.log(result);
            
            if(result[0]){
                if(req.body.password === result[0].user_password){

                    res.send({
                        status: "Success",
                        name: result[0].user_name,
                        url: '/game'
                    });
                } else{
                    res.send({
                        status: "Incorrect password",
                        url:"/login"
                     });
                }
            } else{
                res.send({
                    status: "Email not found",
                    url: '/register'
                });
            }    
        });        
    });
// };

router.route("/")
    .get(function(req, res) {

        users.selectAll(function(data){
            if(data === "Database Error"){
                res.send({
                    status: "Internal Database Error"
                });
            }else{
                let str = JSON.stringify(data)
                res.send({ data });
             console.log(str);
            }
        });
    });
    

router.route("/register")
    .post(function(req, res) {
        console.log("req.body", req.body)
          var data = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
            }
     
        users.findEither(data, function(result){
            if(result.length > 0){

                res.send({
                    status: "User is already registered",
                    name: result[0].user_name,
                    email: result[0].user_email,
                    url: url
                });
            } else {

                users.createNew(data, function(result){
                    console.log(result);
                    res.send({
                        status: 'Success',
                        name: data.name,
                        email: data.email,
                        url: '/game'
                   });
                });   
            }
        });
    
});

router.route("/password")
    .post(function(req, res) {
        console.log("req.body", req.body)
          var data = {
            name: req.body.name,
            password: req.body.password
            }
     
        users.changePassword(data, function(result){
            if(result[0].changedRows == 1){

                res.send({
                    status: "Success"
                });
            } else {

                res.send({
                    status: 'No success',
                    url: url
                });
            }
        });
    
});









module.exports = router;