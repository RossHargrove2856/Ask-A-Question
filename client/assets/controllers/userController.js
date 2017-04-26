app.controller("userController", function(userFactory, $location, $cookies) {
    var self = this;
    var logged_errors = [];
    self.create = function(newUser, password_confirm) {
        console.log(newUser);
        self.logged_user = {};
        if(newUser.password != password_confirm) {
            self.logged_errors = "Passwords do not match";
        } else {
            userFactory.create(newUser, function(data) {
                if(data.data.errors) {
                    self.logged_errors = data.data.errors.name.message;
                } else {
                    $cookies.put("user_name", data.data.name);
                    $cookies.put("user_id", data.data._id);
                    self.newUser = {};
                    $location.url("/polls");
                }
            })
        }
    }
    self.login = function(loggedUser) {
        self.logged_user = {};
        userFactory.login(loggedUser, function(data) {
            if(data.data.errors) {
                self.logged_errors = data.data.errors.login.message;
            } else {
                $cookies.put('user_name', data.data.name);
                $cookies.put('user_id', data.data._id);
                $location.url("/polls");
            }
        })
    }
    self.logout = function() {
        $cookies.remove("user_name");
        $cookies.remove("user_id");
        $location.url("/");
    }
})
