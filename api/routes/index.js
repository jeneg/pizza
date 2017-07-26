const router = require('koa-router')();
const users = require('./api/users');
const pizzas = require('./api/pizzas');
const orders = require('./api/orders');

router.get('/', async (ctx, next) => {
  ctx.body = {
    message: 'dat pizza'
  };
});

router.use(users.routes());
router.use(pizzas.routes());
router.use(orders.routes());

module.exports = router;
