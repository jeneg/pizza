const mongoose = require('mongoose');

let PizzaVariantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "can't be blank"],
    index: true
  },
  weight: Number,
  price: Number,
  pizza: {type: mongoose.Schema.Types.ObjectId, ref: 'Pizza'},

}, {timestamps: true});

mongoose.model('PizzaVariant', PizzaVariantSchema);
