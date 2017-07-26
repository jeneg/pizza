const mongoose = require('mongoose');
const Order = mongoose.model('Order');


module.exports.makeOrder = makeOrder;

async function makeOrder(ctx, next) {
  let order = new Order();

  Object.assign(order, ctx.request.body);

  let data = await order.save();

  ctx.body = {message: 'Order created'};
}
