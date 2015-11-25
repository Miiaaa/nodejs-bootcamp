var http = require('http');
var cheerio = require('cheerio');

http.get("http://www.triptyk.eu", function(res) {
  console.log("Réponse : "+ res.statusCode);
  res.setEncoding("utf8");
  res.on("data", function(data) {
    var $ = cheerio.load(data);
    //console.log(data); affiche tout le contenu de la page
    $("a").each(function(i, element) {
      console.log(element.attribs.href);
    });

  });
  res.on("Erreur", function(err) {
    console.log(err);
  });
});
