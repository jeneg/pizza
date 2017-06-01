const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let IngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "can't be blank"],
    index: true,
    unique: true
  },
  img: String
}, {timestamps: true});

IngredientSchema.plugin(uniqueValidator, {message: 'already exist'});

mongoose.model('Ingredient', IngredientSchema);
