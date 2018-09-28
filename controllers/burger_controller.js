// Import the npm express package
var express = require("express");

// Import the burger model
var burger = require("../models/burger.js");

// Create the 'router' for the app
var router = express.Router();

// Routes for our HTTP requests
// Route for a GET request -- to get info about all the burgers
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        res.render("index", handlebarsObject);
    });
});

// Route for a POST request -- to add a new burger to the list of burgers
router.post("/api/burgers", function(req, res) {
    burger.insertOne("burger_name", req.body.name,
    function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

// Route for a PUT request -- to update the status of an existing burger
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne("devoured", true, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export the 'router'
module.exports = router;