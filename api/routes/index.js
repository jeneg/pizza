const router = require('koa-router')();
const users = require('./api/users');
const pizzas = require('./api/pizzas');

router.get('/', async (ctx, next) => {
  ctx.body = {
    message: 'dat pizza'
  };
});

router.use(users.routes());
router.use(pizzas.routes());

module.exports = router;
