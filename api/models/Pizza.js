const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let PizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "can't be blank"],
    index: true
  },
  slug: {
    type: String,
    index: true,
    required: true,

    unique: true
  },
  images: [String],
  description: String,
  ingredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}],
  variants: [{type: mongoose.Schema.Types.ObjectId, ref: 'PizzaVariant'}],
  rating: Number
}, {timestamps: true});

PizzaSchema.plugin(uniqueValidator, {message: 'slug is already exist'});


mongoose.model('Pizza', PizzaSchema);
