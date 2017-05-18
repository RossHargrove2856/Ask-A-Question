// Creates poll controller and passes in the polls factory and location, routing, and cookies services
// Most methods in the poll controller just organize data and check for errors
app.controller("pollController", function(pollsFactory, $location, $routeParams, $cookies) {
    // Establishes a reference for each method to the controller itself
    var self = this;
    // Resets errors log each time a function in the poll controller is used
    var new_errors = [];
    // Method to show all current polls in the database on the dashboard
    self.index = function() {
        pollsFactory.index(function(data) {
            self.user = $cookies.get("user_id")
            self.polls = data.data;
        })
    }
    self.index();
    // Method to create new polls
    self.create = function(newPoll) {
        var addPoll = {};
        addPoll.author = $cookies.get("user_id");
        addPoll.question = newPoll.question;
        addPoll.options = [];
        addPoll.options.push({ option: newPoll.option1 });
        addPoll.options.push({ option: newPoll.option2 });
        addPoll.options.push({ option: newPoll.option3 });
        addPoll.options.push({ option: newPoll.option4 });
        pollsFactory.create(addPoll, function(data) {
            if(data.data.errors) {
                    self.new_errors = data.data.errors.name.message;
                } else {
                    self.newPoll = {};
                    $location.url("/polls");
                }
        })
    }
    // Method to show a certian poll referenced by id
    self.show = function() {
        pollsFactory.show($routeParams.id, function(data) {
            self.poll = data.data;
        });
    }
    // Method to identify an option in a poll to increase the vote count
    self.vote = function(option) {
        pollsFactory.vote(option, $routeParams.id, function(data) {
            self.show(data.data);
        });
    }
    // Method to identify a poll to be deleted from the database
    self.destroy = function(poll_id) {
        pollsFactory.destroy(poll_id, function(data) {
            self.index();
        });
    }
})