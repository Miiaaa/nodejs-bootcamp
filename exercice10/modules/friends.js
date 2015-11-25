"use strict";
var fs = require("fs");
var _ = require("lodash");
function friends(cb) {
var friends = null;
fs.readFile("datas/data.json", function(err, data) {
  if (err) throw err;
  friends = JSON.parse(data.toString("utf8")).friends;
  cb();
});

function persistData() {
  var dataOut = JSON.stringify({"friends" : friends});
    fs.writeFile("datas/data.json", dataOut, function(err) {
      if (err) throw err;
      console.log("Données bien sauvegardées!");
    });
};

function deleteFriend(id) {
  let index = _.findIndex(friends, {"id" : parseInt(id)});
  if (index !== -1) {
    _.pullAt(friends, index) }
    else {
      console.log("Erreur, pas de fichier!");
    };
persistData();
return friends;
};

function getAllFriends()
{
  return(friends);
};

function getFriend(id) {
  return(_.find(friends, {"id" : id}));
};

function setFriend(ob) {
  if (!ob.id) {
    let maxId = _.max(friends, "id").id;
    let currentId = maxId += 1;
    ob.id = currentId;
    friends.push(ob);
  } else {
    let index = _.findIndex(friends, {"id" : parseInt(id)});
    if (index !== -1) {
        friends [index] = ob;
    } else {
      console.log("Erreur, pas de fichier!")
    };
  };
    persistData();
    return friends;
};

var that = {};
that.getFriend = getFriend;
that.getAllFriends = getAllFriends;
that.setFriend = setFriend;
that.deleteFriend = deleteFriend;
return that;
};

module.exports = friends;
