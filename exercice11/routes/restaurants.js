"use strict";
let express = require("express"),
router = express.Router();
var _ = require("lodash");

let restaurantModel = require(`${process.cwd()}/models/restaurants`)();

router.get("/", function(req, res) {
  restaurantModel.getAll(function(err, data) {
    if (err) res.json(err.message);
    res.json(data);
  });
});

router.get("/:id", function(req, res) {
  let id = req.params.id;
  restaurantModel.getId(id, function(err, data) {
    if (err) res.json(err.message);
    res.json(data);
  });
});

router.get("/:field/:searchValue", function(req, res) {
  let field = req.params.field;
  let searchValue = req.params.searchValue;
  restaurantModel.getBySpecifiedField(field, searchValue,  function(err, data) {
    if (err) res.json(err.message);
    res.json(data);
  });
});

router.post("/", function(req, res) {
  let ob = req.body;
  console.log(ob);
  restaurantModel.setRestaurant(ob, function(err) {
    if (err) res.json(err.message);
    res.json({"message" : "insertion was a success!"});
  });
});

router.delete("/:id", function(req, res) {
  let id = req.params.id;
  restaurantModel.deleteRestaurant(id, function(err) {
    if (err) res.json(err.message);
    res.json({"message" : "deletion was a success!"});
  });
});

module.exports = router;
