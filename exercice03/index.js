/*var fs = require("fs");
fs.readdir("fichiers", function (err, data) {
  if (err) throw err;
console.log("Il y a "+data.length+" fichiers dans ce dossier.")

  for (var i = 0, l = data.length; i<l; i++) {
    console.log(data[i]);
  }
});*/

var fs = require("fs");
fs.readdir("fichiers", function (err, data) {
  if (err) throw err;
  console.log("Il y a "+data.length+" fichiers dans ce dossier.")

  data.forEach(function(elem) {
    console.log(elem);
});
}
