var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {
    create: function(req,res) {
        var newUser = new User(req.body);
        console.log(req.body);
        newUser.save(function(err, user){
            if(err){
                return res.json(err);
            }
            req.session.user = user;
            return res.json(user);
        })
    },
    login: function(req,res) {
        var isValid = true;
        User.findOne({email:req.body.email}, function(err, user) {
            if(err){
                return res.json(err);
            }
            if(!user) {
                isValid = false;
            } else {
                if(bcrypt.compareSync(req.body.password, user.password)) {
                    req.session.user = user;
                    return res.json(user);
                } else {
                    isValid = false;
                }
            }
            if(!isValid) {
                return res.json({
                    "errors": {
                        "login": {
                            "message": ""
                        }
                    }
                })
            }
        });
    },
    session: function(req,res) {
        if(!req.session.user) {
            return res.json({"message": "Must Be Logged In"});
        }
        return res.json(req.session.user);
    }
}