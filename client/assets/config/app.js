// Stores front-end routing and cookies into a module
var app = angular.module("app", ["ngRoute", "ngCookies"]);

// Routing for partials and front-end controller
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/login.html",
        controller: "userController as UC"
    })
    .when("/polls", {
        templateUrl: "partials/all.html",
        controller: "pollController as PC"
    })
    .when("/polls/new", {
        templateUrl: "partials/new.html",
        controller: "pollController as PC"
    })
    .when("/polls/:id", {
        templateUrl: "partials/show.html",
        controller: "pollController as PC"
    })
    .otherwise({
        redirectTo: "/"
    })
})