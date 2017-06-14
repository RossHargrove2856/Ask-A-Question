// Creates the polls factory and injects http as a service
app.factory("pollsFactory", ["$http", function($http) {
    // Create the factory object
    var factory = {};
    // Sends a request to the index function for polls
    factory.index = function(callback) {
        $http.get("/polls").then(callback);
    }
    // Sends a request to show method for polls
    factory.show = function(id, callback) {
        $http.get(`/polls/${ id }`).then(callback);
    }
    // Sends a request to create a new poll
    factory.create = function(addPoll, callback) {
        $http.post("/polls", addPoll).then(callback);
    }
    // Sends a request to update the number of votes for an option in a poll
    factory.vote = function(option, id, callback) {
        $http.put(`polls/${ id }`, option).then(callback);
    }
    // Sends a request to delete a poll
    factory.destroy = function(id, callback) {
        $http.post(`/polls/${ id }`).then(callback);
    }
    // Returns the factory so it can be used as a service by the controllers
    return factory;
}])