console.log("Loading user model...");

var mongoose = require("mongoose");
    bcrypt = require("bcryptjs");

var UserSchema = new mongoose.Schema({
    name: {type: String, minlength: 2, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}, {timestamps: true})

UserSchema.pre("save", function(saveUser) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    saveUser();
})

mongoose.model("User", UserSchema);