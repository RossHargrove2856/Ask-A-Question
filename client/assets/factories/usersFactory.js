// Creates the user factory and injects http as a service
app.factory("usersFactory", ["$http", function($http) {
    // Create the factory object
    var factory = {};
    // Sends a request to verify a user's login credentials
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
    // Sends a request to verify a new user's credentials and save them to the database
    factory.create = function(newUser, callback) {
        $http.post("/users", newUser).then(callback);
    }
    // Returns the factory so it can be used as a service by the controllers
    return factory;
}])
