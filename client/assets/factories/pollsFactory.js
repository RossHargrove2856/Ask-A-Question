app.factory("pollsFactory", ["$http", function($http) {
    var factory = {};
    factory.index = function(callback) {
        $http.get("/polls").then(callback);
    }
    factory.show = function(id, callback) {
        $http.get(`/polls/${ id }`).then(callback);
    }
    factory.create = function(addPoll, callback) {
        var newPoll = {};
        newPoll.author = addPoll.author;
        newPoll.question = addPoll.question;
        newPoll.options = [];
        newPoll.options.push({ option: addPoll.option1 });
        newPoll.options.push({ option: addPoll.option2 });
        newPoll.options.push({ option: addPoll.option3 });
        newPoll.options.push({ option: addPoll.option4 });
        $http.post("/polls", newPoll).then(callback);
    }
    factory.vote = function(option, id, callback) {
        $http.put(`polls/${ id }`, option).then(callback);
    }
    factory.destroy = function(id, callback) {
        $http.post(`/polls/${ id }`).then(callback);
    }
    return factory;
}])