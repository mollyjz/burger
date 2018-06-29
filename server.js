var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var burger = require("./models/burger.js");
var routes = require("./controllers/burgers_controller.js");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});