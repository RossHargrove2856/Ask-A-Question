app.controller("pollController", function(pollsFactory, $location, $routeParams, $cookies) {
    var self = this;
    var new_errors = [];
    self.index = function() {
        pollsFactory.index(function(data) {
            self.user = $cookies.get("user_id")
            self.polls = data.data;
        })
    }
    self.index();
    self.create = function(newPoll) {
        newPoll.author = $cookies.get("user_id");
        pollsFactory.create(newPoll, function(data) {
            if(data.data.errors) {
                    self.new_errors = data.data.errors.name.message;
                } else {
                    self.newPoll = {};
                    $location.url("/polls");
                }
        })
    }
    self.show = function() {
        pollsFactory.show($routeParams.id, function(data) {
            self.poll = data.data;
        });
    }
    self.vote = function(option) {
        pollsFactory.vote(option, $routeParams.id, function(data) {
            self.show(data.data);
        });
    }
    self.destroy = function(poll_id) {
        pollsFactory.destroy(poll_id, function(data) {
            self.index();
        });
    }
})