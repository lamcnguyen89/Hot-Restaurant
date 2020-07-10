// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
// port for heroku access
var PORT = process.env.PORT || 3000;

// Arrays for reservations and waitlist
var reservations = [];
var waitlist = [];

// first scope of code that fires... 
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));  
});

// second scope of code that fires...this method allows user to add info to the page (fill in form)
// server is listening for the request
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));  
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));  
});

// json sends over a type of object (can be an array or any object you want to send, its seen then strinify'ed)
app.get("/api/tables", function(req, res) {
  return res.json(reservations);                    
});




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });