/*var fs = require("fs");
fs.readdir("../", function (err, files) {
  if (err) throw err;
  fs.writeFile("resultat.txt",
createNiceListOfFiles(files), function(err, data)
{
  if (err) throw err;
  console.log("Cool");
});
});

function createNiceListOfFiles(arrFiles) {
  return arrFiles.join("\n");
}*/

var fs = require("fs");
var utils = require("../modules/utils");
fs.readdir("../", function (err, files) {
  if (err) throw err;
  fs.writeFile("resultat.txt", utils.createNiceListOfFiles(files), function(err, data)
{
  if (err) throw err;
  console.log("Cool");
});
});
