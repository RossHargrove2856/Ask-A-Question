console.log("Connecting to the database...");

//Requirements for mongoose ORM
var mongoose = require("mongoose");
var fs = require("fs");
var path = require("path");

// Connects mongoose the database
mongoose.connect("mongodb://localhost/belt_survey");

// Sets path from the database to the models directory
var models_path = path.join(__dirname, "./../models");

// Indexes each file in the models directory ending in ".js"
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf(".js") >= 0) {
        require(models_path + "/" + file);
    }
});