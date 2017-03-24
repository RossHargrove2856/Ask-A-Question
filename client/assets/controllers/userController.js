app.controller("userController", ["userFactory","$location", function(userFactory, $location) {
    var self = this;
    var logged_errors = [];
    self.create = function(newUser) {
        if(newUser.password != newUser.password_confirm) {
            self.errors = "Passwords do not match";
        }
        userFactory.create(newUser, function(data) {
            self.newUser = {};
            $location.url("/polls");
        })
    }
    self.login = function(loggedUser) {
        userFactory.login(loggedUser, function(data) {
            if(res.data.errors) {
                self.logged_errors.push(res.data.errors);
            } else {
                $location.url("/polls");
            }
        })
    }
}])
