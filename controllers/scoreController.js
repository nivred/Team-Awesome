const path = require("path");
const express = require("express");

const router = express.Router();

// Import user & score models to access functions
const scores = require("../models/scores");
const users = require("../models/users");

//route to return all scores in ascending order
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
//route to add score    
router.route("/add")
    .post(function(req, res) {

          let data = {
            user_id: "",
            score: req.body.score,
            theme_id: req.body.theme
            }
        //find user id by user name
        users.findByName(req.body.name, function(findresult){

            if(!findresult[0]){

                res.send({
                    status: "User not found"
                });
            } else { 

            data.user_id = findresult[0].user_id;
            //add row to scores table
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
//find last score for user
 router.route("/last")
.post(function(req, res) {
    //find user id by user name
    users.findByName(req.body.name, function(findresult){

        if(!findresult[0]){

            res.send({
                status: "User not found"
            });
        } else { 

         let userid = findresult[0].user_id;
         //return all scores by user sorted in descending date order
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
//find best score for user
router.route("/best")
.post(function(req, res) {
    //find user id by user name
    users.findByName(req.body.name, function(findresult){

        if(!findresult[0]){

            res.send({
                status: "User not found"
            });
        } else { 

         let userid = findresult[0].user_id;
         //return all scores for user in ascending order
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
//return count of games played by user
router.route("/count")
.post(function(req, res) {
    //find user id by user name
     users.findByName(req.body.name, function(findresult){

        if(!findresult[0]){

            res.send({
                status: "User not found"
            });
        } else { 

         let userid = findresult[0].user_id;
         //return rowcount of scores for user
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