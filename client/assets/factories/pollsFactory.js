app.factory("pollsFactory", ["$http", function($http) {
    var factory = {};
    factory.index = function(callback) {
        $http.get("/polls").then(callback);
    }
    factory.show = function(id, callback) {
        $http.get(`/polls/${ id }`).then(function(data){
            // console.log(data.data);
            if(typeof(callback) == "function") {
                callback(data.data);
            }
        });
    }
    factory.create = function(newPoll, callback) {
        $http.post("/polls", newPoll).then(callback);
    }
    factory.delete = function(id, callack) {
        $http.delete(`/polls/${ id }`).then(function(data){
            console.log(data.data);
            if(typeof(callback) == "function") {
                callback(data.data);
            }
        });
    }
    return factory;
}])