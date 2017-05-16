console.log("Loading user model...");

// Requires mongoose and bcrypt dependencies
var mongoose = require("mongoose");
    bcrypt = require("bcryptjs");

// Outline of the user model
var UserSchema = new mongoose.Schema({
    name: {type: String, minlength: 2, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}, {timestamps: true})

// When a new user registers, bcrypt hashes the user's password before the user is saved to the database
UserSchema.pre("save", function(saveUser) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    saveUser();
})

// Creates the user model
mongoose.model("User", UserSchema);