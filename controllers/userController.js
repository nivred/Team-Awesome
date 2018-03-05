const path = require("path");
const express = require("express");

const router = express.Router();

// Import user model to access its functions
const users = require("../models/users");

router.route("/login")
    .post(function(req,res){

        let data = {
            name: req.body.userdata,
            email: req.body.userdata
            }

        let found = false;
 
        users.findEither(data, function(result){
            if(result.length > 0){
                for(let i = 0; i < result.length; i++) {
                    if(req.body.password === result[i].user_password){
                        found = true;
                        res.send({
                            status: "Success",
                            name: result[i].user_name,
                            email: result[i].user_email,
                            url: '/game'
                        });
                    }
                }
                if(!found) {
                    res.send({
                        status: "Incorrect password",
                        url:'/login'
                     });
                 }
            } else {
                res.send({
                    status: "User not found",
                    url: '/register'
                });
            }   
         });        
    });

router.route("/exists")
    .post(function(req, res){
          let data = {
            name: req.body.userdata,
            email: req.body.userdata
            }

        users.findEither(data, function(result){
            
            if(result.length > 0){
                    res.send({
                        status: "User found",
                        name: result[0].user_name,
                        email: result[0].user_email,
                    });
                } else {
                    res.send({
                        status: "User not found",
                     });
                }
          });        
    });


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
    

router.route("/register")
    .post(function(req, res) {

          let data = {
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
                    url: '/login'
                });
            } else {

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

router.route("/password")
    .post(function(req, res) {

          let data = {
            name: req.body.name,
            password: req.body.password
            }
     
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