app.controller("pollController", ["pollsFactory","$location","$routeParams", function(pollsFactory, $location, $routeParams) {
    var self = this;
    var index = function() {
        pollsFactory.index(function(data) {
            console.log(data.polls);
            self.polls = data.data.polls;
        })
    }
    index();
    self.create = function(newPoll) {
        pollsFactory.create(newPoll, function(data) {
            self.newPoll = {};
            $location.url("/polls");
        })
    }
    pollsFactory.show($routeParams.id, function(data) {
        self.poll = data.poll[0];
        console.log(self.poll);
    });
}])