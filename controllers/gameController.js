const path = require("path");
const express = require("express");

const router = express.Router();

// Import game model to access its functions
const game = require("../models/game");

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
           }
        });
    });
    

    



module.exports = router;