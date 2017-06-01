const mongoose = require('mongoose');

let PizzaVariantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "can't be blank"],
    index: true
  },
  weight: Number,
  price: Number,
  pizzaId: {type: mongoose.Schema.Types.ObjectId, ref: 'Pizza'},

}, {timestamps: true});

PizzaVariantSchema.methods.toJSON = function () {
  return {
    id: this.id,
    name: this.name,
    price: this.price,
    weight: this.weight,
    pizzaId: this.pizzaId
  };
};

mongoose.model('PizzaVariant', PizzaVariantSchema);
