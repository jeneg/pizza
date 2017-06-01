const mongoose = require('mongoose');
const Pizza = mongoose.model('Pizza');


module.exports.listPizzas = listPizzas;
module.exports.getPizza = getPizza;
module.exports.addPizza = addPizza;

// todo
async function addPizza(ctx, next) {
  let pizza = new Pizza();

  let data = await pizza.save();

  ctx.body = {user: data.toAuthJSON()};
}

async function getPizza(ctx, next) {
  ctx.body = await Pizza.findOne({'slug': ctx.params.slug})
    .populate('variants')
    .populate('ingredients')
    .then(function (pizza) {
      if (!pizza) { return ctx.throw(404); }

      return {data: pizza};
    }).catch(next);
}

async function listPizzas(ctx, next) {
  ctx.body = await Pizza.find()
    .populate('variants')
    .populate('ingredients')
    .then(function (pizzas) {
      if (!pizzas) { return ctx.throw(404); }

      return {data: pizzas};
    }).catch(next);
}
