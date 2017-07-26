const mongoose = require('mongoose');
const statuses = require('../shared/order-statuses');

let OrderSchema = new mongoose.Schema({
  details: {
    name: {
      type: String,
      required: [true, "can't be blank"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      trim: true
    },
    phone: {
      type: String,
      required: [true, "can't be blank"],
      trim: true
    },
    address1: {
      type: String,
      required: [true, "can't be blank"],
      trim: true
    },
    address2: {
      type: String,
      trim: true
    },
    notes: {
      type: String,
      trim: true
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
  },
  status: {
    type: String,
    enum: statuses.statusesArray,
    default: statuses.statuses.new
  }
}, {timestamps: true});

mongoose.model('Order', OrderSchema);
