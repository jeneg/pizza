const pizzasData = require('./json/pizzas.json');
const mongoose = require('mongoose');
const slug = require('slug');
mongoose.connect('mongodb://localhost/pizza');
require('../models/Pizza');
require('../models/Pizza-variant');
const Pizza = mongoose.model('Pizza');
const PizzaVariant = mongoose.model('PizzaVariant');

pizzasData.forEach(async function (item) {
  item.slug = slug(item.name, {lower: true});
  item.price = Math.round(item.price);

  let sizes = item.sizes.slice();

  delete item.sizes;

  let pizza = new Pizza();

  Object.assign(pizza, item);
  await pizza.save();

  let variantsIds = [];

  let promises = sizes.map(async (size) => {
    let variant = new PizzaVariant();
    Object.assign(variant, size);

    variant.pizza = pizza.id;
    await variant.save();

    variantsIds.push(variant.id);
  });

  await Promise.all(promises);

  console.log(variantsIds);

  pizza.variants = variantsIds;

  await pizza.save()


});
