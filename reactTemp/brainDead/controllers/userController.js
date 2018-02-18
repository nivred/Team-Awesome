var express = require("express");
var fs = require('fs');

var router = express.Router();
var PATH = '../client/public/'

// Import user model to access its orm functions
var users = require("../models/users.js");


router.post("/api/login", function(req, res){
    console.log("req.body", req.body)

    users.findByEmail(req.body.email, function(result){
        if(result[0]){
            if(req.body.password === result[0].user_password){

                res.send({
                    status: "success",
                    url: url
                });
            } else{
                res.send("login failed");
            };
        } else{
            res.send({
            	status: "Login not found",
            	url: '/register'
            });
        };    
    });
});



router.post("/api/register", function(req, res) {
    var data = req.body
    
    users.createNew(data, function(result){

        res.send({
            status: 'success',
            url: '/'
        });
    });
});










module.exports = router;