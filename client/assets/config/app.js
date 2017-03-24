var app = angular.module("app", ["ngRoute"]);

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
        redirectTo: "/polls"
    })
})