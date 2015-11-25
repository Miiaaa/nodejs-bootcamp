"use strict";
var fs = require("fs");
let moment = require('moment'),
http = require("http"),
express = require('express'),
bodyParser = require("body-parser"),
friends = require(__dirname+"/modules/friends");
let myFriends = friends(initApp);

function initApp() {
  let app = express();

app.use(bodyParser.json());
app.use(function(req,res,next) {
  console.log(moment().format()+' || '+req.url+' || '+req.method+' || '+req.ip);
  next();
});

app.get('/api/friends', function(req, res) {
  res.json(myFriends.getAllFriends());
  });

app.get("/api/friends/:id", function(req, res) {
  let id = parseInt(req.params.id);
  res.json(myFriends.getFriend(id));
  });

app.post("/api/friends", function(req, res) {
  res.json(myFriends.setFriend(req.body));
});

app.put("/api/friends", function(req, res) {
  res.json(myFriends.setFriend(req.body));
});

app.delete("/api/friends/:id", function(req, res) {
  let id = parseInt(req.params.id);
  res.json(myFriends.deleteFriend(id));
  });

// Celle-ci doit être en bas

app.use(function(req, res){
  res.status(404);
  res.send("Cette page "+req.url+" n'existe pas!");
});

http.createServer(app).listen(80, function() {
  console.log("Express a commencé sur localhost:3000 \n Press CTRL+C pour terminer");
});
}
