app.factory("userFactory", ["$http", function($http) {
    var factory = {};
    factory.login = function(loggedUser, callback) {
        $http.post("/users/login", loggedUser).then(function(data){
            if(!data.data.errors) {
                console.log(data.data);
                factory.logged_user = data.data;
                callback(data);
            } else {
                callback(data);
            }
        })
    }
    factory.create = function(newUser, callback) {
        console.log(newUser);
        $http.post("/users", newUser).then(callback);
    }
    return factory;
}])
