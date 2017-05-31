const mongoose = require('mongoose');

let PizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "can't be blank"],
    index: true
  },
  images: [String],
  description: String,
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
  sizes: [{
    name: String,
    weight: Number,
    price: Number
  }]
}, {timestamps: true});


mongoose.model('Pizza', PizzaSchema);
