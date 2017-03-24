var mongoose = require("mongoose"),
    express = require("express"),
    bp = require("body-parser"),
    path = require("path"),
    session = require("express-session");
    bcrypt = require("bcryptjs");
    root = __dirname,
    port = process.env.PORT || 8000,
    app = express();

app.use(express.static(path.join(root, "./client")));
app.use(express.static(path.join(root, "./bower_components")));
app.use(bp.json());
app.use(session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
}))

require("./server/config/mongoose.js");

require("./server/config/routes.js")(app);

app.listen(port,function() {
    console.log(`server is running on ${ port }`);
});