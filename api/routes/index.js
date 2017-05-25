const router = require('koa-router')();
const users = require('./api/users');

router.get('/', async (ctx, next) => {
  ctx.body = {
    message: 'dat pizza'
  };
});

router.use(users.routes());

module.exports = router;
