//Adding a comment in order to allow for creation of a pull request

// Require the npm express package (in order to use the express 
// web framework for node)
var express = require("express");

// Require the npm body-parser package (in order to parse request 
// bodies in a middleware before they are passed to handlers)
var bodyParser = require("body-parser");

// Code for connecting to a port, running express, parsing the 
// request bodies, and running handlebars
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

app.use(routes);
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});