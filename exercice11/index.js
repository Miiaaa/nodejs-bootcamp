"use strict"
let express = require("express"),
fs = require("fs"),
http = require("http"),
morgan = require("morgan");
let bodyParser = require("body-parser");

//Routes
let restaurants = require(`${__dirname}/routes/restaurants`);

let app = express();

//Logger in place
let accessLogStream = fs.createWriteStream(`${__dirname}/logs/acces.log`, {flags : "a"});
app.use(morgan("combined", {stream:accessLogStream}));

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());

app.use("/api/restaurants", restaurants);

/*app.get("/api/restaurants", function(req, res) {
  db.restaurants.find(function(err, docs) {
    if (err) throw err;
    res.json(docs);
  });
});

app.get("/api/restaurants/:id", function(req, res) {
  db.restaurants.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err, docs) {
    if (err) throw err;
    console.log(docs);
    res.json(docs);
  });
});*/



http.createServer(app).listen(80, function() {
  console.log("Express started on localhost:3000 \n Press CTRL+C to terminate")
});
