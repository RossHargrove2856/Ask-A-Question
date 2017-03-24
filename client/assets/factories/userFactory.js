app.factory("userFactory", ["$http", function($http) {
    var factory = {};
    factory.logged_user ={};
    factory.login = function(loggedUser, callback) {
        $http.post("/users/login").then(function(data){
            // console.log(data.data);
            if(!data.data.errors) {
                factory.logged_user = data.data;
            }
        })
    }
    factory.create = function(newUser, callback) {
        $http.post("/users", newUser).then(callback);
    }

    return factory;
}])
