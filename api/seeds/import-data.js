const pizzasData = require('./json/pizzas.json');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pizza');
require('../models/Pizza');
const Pizza = mongoose.model('Pizza');


Pizza.collection.insertMany(pizzasData, function(err,result) {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});
