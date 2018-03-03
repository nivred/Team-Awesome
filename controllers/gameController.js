const path = require("path");
const express = require("express");
// const fs = require('fs');

const router = express.Router();

// Import user model to access its functions
const game = require("../models/game");

console.log("hello from gameController");


router.route("/")
    .get(function(req, res) {

        game.allCards(function(result){
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
    

    



module.exports = router;