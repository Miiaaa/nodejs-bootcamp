var http = require('http');
var fs = require("fs");

// Create an HTTP server
var routes = {
  "/":"templates/index.html",
  "/page01":"templates/page01.html"
}
var srv = http.createServer(function(req, res) {
  console.log(req.url);
  if (routes[req.url]) {
    res.writeHead(200, {"Content-type" : "text/html"});
    var routeFile = routes[req.url];
    fs.readFile(routeFile, function(err, data) {
      if (err) throw err
      res.end(data);
    })

  } else {
    res.writeHead(404);
    res.end("The url : "+req.url+" does not exist");
  }

});
srv.listen(3000, function(err) {
  console.log("Server is now listening on port 3000");
});
