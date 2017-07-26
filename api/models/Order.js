const mongoose = require('mongoose');

let OrderSchema = new mongoose.Schema({
  details: {
    name: {
      type: String,
      required: [true, "can't be blank"]
    },
    email: {
      type: String,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
    },
    phone: {
      type: String,
      required: [true, "can't be blank"]
    },
    address1: {
      type: String,
      required: [true, "can't be blank"]
    },
    address2: {
      type: String,
    },
    notes: {
      type: String,
    }
  },
  items: [{
    pizzaVariantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PizzaVariant',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  userId: {
    type: String,
  }
}, {timestamps: true});

mongoose.model('Order', OrderSchema);
