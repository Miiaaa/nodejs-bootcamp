"use strict";
let mongoose = require('mongoose');
function Restaurants() {
  let dbURI = "mongodb://localhost/restaurants";
  mongoose.connect(dbURI);

  let restaurantSchema = mongoose.Schema ({
  Name: {
    type: String,
    required: true
  },
  address: {
  street: String,
  number: Number,
  city: String,
  zip: String
},
  phone: {
    type: String,
    required: true
  },
  web: {
    type: String,
    required: true
  },
  types: {
    type: Array,
    require :true
  },
  rating: {
    type: Number
  }
});

let restaurant = mongoose.model("Restaurant", restaurantSchema);
function getAll(next) {
  restaurant.find(null, function(err, data) {
    next(err, data);
  }).sort([["Name", "ascending"]]);
};

function getId(id, next) {
  restaurant.findById(id, function(err, data) {
  next(err, data);
  });
};

function getBySpecifiedField(field, searchValue, next) {
  var query = {[field]:new RegExp(searchValue, "i")};
  restaurant.findOne(query, function(err, data) {
    next(err, data);
  });
};

function setRestaurant(ob, next) {
    if(!ob._id) {
      let resto = new restaurant(ob);
    resto.save(function(err) {
      next(err);
    });
  } else {
    restaurant.findByIdAndUpdate(ob._id, ob, function(err) {
      next(err);
    });
  };
};

function deleteRestaurant(id, next) {
  restaurant.remove({_id:id}, function(err) {
    next(err);
  });
};

var that = {};
that.getAll = getAll;
that.getId = getId;
that.getBySpecifiedField = getBySpecifiedField;
that.setRestaurant = setRestaurant;
that.deleteRestaurant = deleteRestaurant;
return that;
};

module.exports = Restaurants;
