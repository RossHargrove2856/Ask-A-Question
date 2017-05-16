// Requires and stores all server-side dependencies in variables for easy reference
var mongoose = require("mongoose"),
    express = require("express"),
    bp = require("body-parser"),
    path = require("path"),
    session = require("express-session");
    bcrypt = require("bcryptjs");
    root = __dirname,
    port = process.env.PORT || 8000,
    app = express();

// Sets static path for partials, css, js
// Also sets up body-parser data format and express-session info
app.use(express.static(path.join(root, "./client")));
app.use(express.static(path.join(root, "./bower_components")));
app.use(bp.json());
app.use(session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
}))

// Requires mongoose file to link to the mongoDB database
require("./server/config/mongoose.js");

// Requires server-side routing file to process requests
require("./server/config/routes.js")(app);

// Sets active port to port variable, which is currently 8000
app.listen(port,function() {
    console.log(`server is running on ${ port }`);
});