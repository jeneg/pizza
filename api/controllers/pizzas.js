const mongoose = require('mongoose');
const Pizza = mongoose.model('Pizza');


module.exports.getPizza = getPizza;
module.exports.addPizza = addPizza;

async function addPizza(ctx, next) {
  let pizza = new Pizza();

  let data = await pizza.save();

  ctx.body = {user: data.toAuthJSON()};
}

async function getPizza(ctx, next){
  // ctx.body = await Pizza.findById(ctx.state.user.id).then(function(user){
  //   if(!user){ return ctx.throw(404); }
  //
  //   return {user: user.toProfileJSON()};
  // }).catch(next);
}
