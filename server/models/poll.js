console.log("Loading poll model...");

// Requires the mongoose dependency
var mongoose = require("mongoose");

// Outline of the polls model
var PollSchema = new mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    question: {type: String, minlength: 8, required: true},
    options: [{option: {type: String, required: true}, vote: {type: Number, default: 0}}]
}, {timestamps: true})

// Creates the user model
mongoose.model("Poll", PollSchema);