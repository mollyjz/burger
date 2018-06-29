var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var burger = require('../models/burger.js');


//Retrieve all burgers
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    res.render("index", { burger: data });
  });
});

//Create new burger
router.post("/", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      console.log("added " + result);
    });
  });

// Update a burger
router.put("/:id", function(req, res) {
  burger.updateOne({
    devoured: req.body.devoured
  }), function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  }
});



module.exports = router;