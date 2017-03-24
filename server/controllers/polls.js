var mongoose = require("mongoose");
var Poll = mongoose.model("Poll");

module.exports = {
    index: function(req,res) {
        Poll.find({}).exec(function(err,polls) {
            if(err) {
                return res.json(err);
            }
            return res.json(polls)
        })
    },
    create: function(req,res) {
        var newPoll = new Poll(req.body);
        newPoll.save(function(err, poll){
            if(err){
                return res.json(err);
            }
            return res.json(poll);
        })
    },
    show: function(req,res) {
        Poll.findOne({_id:req.params.id}, function(err, poll) {
            if(err) {
                return res.json(err);
            }
            return res.json(poll);
        })
    },
    delete: function(req,res) {
        Poll.findBy({_id:req.params.id}, function(err, poll) {
            if(err) {
                return res.json(err);
            }
            return res.json(poll);
        })
    }
}