const path = require("path");
const express = require("express");
// const fs = require('fs');

const router = express.Router();

// Import user model to access its functions
const scores = require("../models/scores");
const users = require("../models/users");

console.log("hello from scoreController");


router.route("/")
    .get(function(req, res) {

        scores.allScoresAsc(function(result){
            if(result === "Database Error"){
                res.send({
                    status: "Internal Database Error"
                });
            } else {
                let str = JSON.stringify(result)
                res.send({ result });
                console.log(str);
            }
        });
    });
    
router.route("/add")
    .post(function(req, res) {

        console.log("req.body", req.body)
          let data = {
            user_id: "",
            score: req.body.score,
            theme_id: req.body.theme
            }

        users.findByName(req.body.name, function(findresult){
            console.log(findresult);

            if(!findresult[0]){

                res.send({
                    status: "User not found"
                });
            } else { 

            data.user_id = findresult[0].user_id;

            scores.addScore(data, function(result){
                if(result === "Database Error"){
                    res.send({
                        status: "Internal Database Error"
                    });
                } else {
                    let str = JSON.stringify(result);
                    res.send({ result });
                    console.log(str);
                }
            });

            }
        });
});

 router.route("/last")
.post(function(req, res) {

    // console.log(JSON.stringify(req.body.name));

    users.findByName(req.body.name, function(findresult){
        console.log(findresult);

        if(!findresult[0]){

            res.send({
                status: "User not found"
            });
        } else { 

         let userid = findresult[0].user_id;

        scores.userScoresByDate(userid, function(result){
            if(result === "Database Error"){
                res.send({
                    status: "Internal Database Error"
                });
            } else {
                let str = JSON.stringify(result);
                res.send({ result });
                console.log(str);
            }
        });

        }
    });
});

router.route("/best")
.post(function(req, res) {

   // console.log(JSON.stringify(req.body.name));

    users.findByName(req.body.name, function(findresult){
        console.log(findresult);

        if(!findresult[0]){

            res.send({
                status: "User not found"
            });
        } else { 

         let userid = findresult[0].user_id;

        scores.userScoresAsc(userid, function(result){
            if(result === "Database Error"){
                res.send({
                    status: "Internal Database Error"
                });
            } else {
                let str = JSON.stringify(result);
                res.send({ result });
                console.log(str);
            }
        });

        }
    });
});
  



module.exports = router;