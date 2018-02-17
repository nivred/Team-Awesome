var express = require("express");
var fs = require('fs');

var router = express.Router();
var PATH = '../client/public/'

var orm = require('../models/orm.js')

//CUSTOM MODELS
router.use('/users', require('./userController'))
router.use('/scores', require('./scoreController'))
router.use('/game', require('./gameController'))

//LOGIN ROUTE
router.post("/api/login", function(req, res){

    orm.select('users', {user_email: req.body.email}, function(result){
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
            res.send("login failed");
        };    
    });
});


module.exports = router;
