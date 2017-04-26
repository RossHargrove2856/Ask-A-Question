console.log("Loading poll controller...");

var mongoose = require("mongoose");
var Poll = mongoose.model("Poll");

module.exports = {
    index: function(req,res) {
        Poll.find({}).populate("author").exec(function(err,polls) {
            if(err) {
                return res.json(err);
            }
            return res.json(polls)
        });
    },
    create: function(req,res) {
        var newPoll = new Poll(req.body);
        newPoll.save(function(err, poll){
            if(err){
                return res.json(err);
            }
            return res.json(poll);
        });
    },
    show: function(req,res) {
        Poll.findOne({_id:req.params.id}).populate("author").exec(function(err, poll) {
            if(err) {
                return res.json(err);
            }
            return res.json(poll);
        });
    },
    vote: function(req,res) {
        Poll.findById({_id:req.params.id}).exec(function(err, poll) {
            if(err) {
                return res.json(err);
            }
            for(var i = 0; i < poll.options.length; i++) {
                if(poll.options[i]._id == req.body._id) {
                    poll.options[i].vote++;
                }
            };
            poll.save(function(err) {
                if(err) {
                    return res.json(err)
                }
                return res.json(poll);
            });
        });
    },
    delete: function(req,res) {
        Poll.findByIdAndRemove({_id:req.params.id}).exec(function(err, poll) {
            if(err) {
                return res.json(err);
            }
            return res.json(poll);
        });
    }
}