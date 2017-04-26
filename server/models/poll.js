console.log("Loading poll model...");

var mongoose = require("mongoose");

var PollSchema = new mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    question: {type: String, minlength: 8, required: true},
    options: [{option: {type: String, required: true}, vote: {type: Number, default: 0}}]
}, {timestamps: true})

mongoose.model("Poll", PollSchema);