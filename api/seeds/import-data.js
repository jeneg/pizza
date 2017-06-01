let pizzasData = require('./json/pizzas.json');
const mongoose = require('mongoose');
const slug = require('slug');
mongoose.connect('mongodb://localhost/pizza');
require('../models/Pizza');
require('../models/Pizza-variant');
require('../models/Ingredient');
const Pizza = mongoose.model('Pizza');
const PizzaVariant = mongoose.model('PizzaVariant');
const Ingredient = mongoose.model('Ingredient');

function getIngs() {
  return pizzasData.reduce((res, pizza) => {
    (pizza.ingredients || []).forEach(ing => {
      if (!res.includes(ing)) {
        res.push(ing);
      }
    });

    return res;
  }, []);
}

let ingPromises = getIngs().map(function (ing) {
  let i = new Ingredient();

  i.name = ing;
  return i.save();
});

Promise.all(ingPromises).then(insert);

function insert() {
  pizzasData.forEach(async function (item) {
    item.slug = slug(item.name, {lower: true});
    item.price = Math.round(item.price);

    let sizes = (item.sizes || []).slice();
    let ingredients = (item.ingredients || []).slice();

    let ingredientsIDs = await importIngredients(ingredients);

    delete item.sizes;
    delete item.ingredients;

    let pizza = new Pizza();
    Object.assign(pizza, item);
    pizza.ingredients = ingredientsIDs;

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

    pizza.variants = variantsIds;

    await pizza.save()
  });

}

async function importIngredients(items) {
  let promises = items.map(async item => {
    try {
      let exist = await Ingredient.findOne({'name': item});

      if (exist) {
        return exist.id;
      }
    } catch (e) {
      console.error(e);
    }
  });

  return Promise.all(promises);
}
