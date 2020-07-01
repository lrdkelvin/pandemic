//Dependencies
require("dotenv").config();
//Express
var express = require("express");
//Express session for the login system
var session = require('express-session');
//BodyParser for the login system
var bodyParser = require('body-parser');


//setting up Express
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware for Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//Middleware for BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Middleware for session
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true}));

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

if(process.env.NODE_ENV === 'production') {
console.log("We are running in production mode")
} else {
 // We are running in development mode
 console.loog("WE are in develpment")
}
// Starting the server, syncing our models 

  app.listen(PORT, function(
  ) {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

module.exports = app;
