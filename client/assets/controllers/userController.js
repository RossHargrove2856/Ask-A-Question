// Creates user controller and passes in the users factory and location and cookies services
// Most methods in the user controller just organize data, store information in cookies, and check for errors
app.controller("userController", function(usersFactory, $location, $cookies) {
    // Establishes a reference for each method to the controller itself
    var self = this;
    // Resets errors log each time a function in the user controller is used
    var logged_errors = [];
    // Creates a new user, checks passwords for errors, and stores user information in cookies after registration
    self.create = function(newUser, password_confirm) {
        console.log(newUser);
        self.logged_user = {};
        if(newUser.password != password_confirm) {
            self.logged_errors = "Passwords do not match";
        } else {
            usersFactory.create(newUser, function(data) {
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
    // Sends user data to login method in user factory, if there are no errors, the user's information is stored in cookies
    self.login = function(loggedUser) {
        self.logged_user = {};
        usersFactory.login(loggedUser, function(data) {
            if(data.data.errors) {
                self.logged_errors = data.data.errors.login.message;
            } else {
                $cookies.put('user_name', data.data.name);
                $cookies.put('user_id', data.data._id);
                $location.url("/polls");
            }
        })
    }
    // Removes user information from cookies and redirects to the login page
    self.logout = function() {
        $cookies.remove("user_name");
        $cookies.remove("user_id");
        $location.url("/");
    }
})
