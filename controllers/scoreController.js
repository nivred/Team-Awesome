const path = require("path");
const express = require("express");

const router = express.Router();

// Import user & score models to access functions
const scores = require("../models/scores");
const users = require("../models/users");

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
            }
        });
    });
    
router.route("/add")
    .post(function(req, res) {

          let data = {
            user_id: "",
            score: req.body.score,
            theme_id: req.body.theme
            }

        users.findByName(req.body.name, function(findresult){

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
               }
            });

            }
        });
});

 router.route("/last")
.post(function(req, res) {

    users.findByName(req.body.name, function(findresult){

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
            }
        });

        }
    });
});

router.route("/best")
.post(function(req, res) {

    users.findByName(req.body.name, function(findresult){

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
            }
        });

        }
    });
});

router.route("/count")
.post(function(req, res) {

    users.findByName(req.body.name, function(findresult){

        if(!findresult[0]){

            res.send({
                status: "User not found"
            });
        } else { 

         let userid = findresult[0].user_id;

        scores.userGameCount(userid, function(result){
            if(result === "Database Error"){
                res.send({
                    status: "Internal Database Error"
                });
            } else {
                let str = JSON.stringify(result);
                res.send({ result });
            }
        });

        }
    });
});
  



module.exports = router;