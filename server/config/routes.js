console.log("User Routes");
var users = require("../controllers/users");
var polls = require("../controllers/polls");
module.exports = function(app) {
    app.post("/users", function(req, res) {
        users.create(req, res);
    });
    app.post("/users/login", function(req, res) {
        users.login(req, res);
    });
    app.get("/polls", function(req, res) {
        polls.index(req, res);
    });
    app.post("/polls", function(req, res) {
        polls.create(req, res);
    });
    app.get("/polls/:id", function(req, res) {
        polls.show(req, res);
    });
    app.delete("/polls/:id", function(req, res) {
        polls.delete(req, res);
    });
}