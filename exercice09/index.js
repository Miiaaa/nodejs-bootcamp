var fs = require("fs");
var moment = require('moment');
var express = require('express');
var app = express();

app.use(function(req,res,next) {
  console.log(moment().format()+' || '+req.url+' || '+req.method);
  next();
});

app.get('/api/friends', function(req, res) {
  fs.readFile("datas/data.json", function(err, data) {
    if (err) throw err;
    res.json(JSON.parse(data.toString("utf8")));
  });
});

app.use(function(req, res){
  res.status(404);
  res.send('Erreur 404 \n Page introuvable !'+ Date());
});

app.listen(3000, function() {
  console.log("Express a commencé sur localhost:3000 \n Press CTRL+C pour terminer")
});
