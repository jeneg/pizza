const router = require('koa-router')();
const usersController = require('../../controllers/users');

router.prefix('/users');

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// });
//
// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// });

router.post('/', usersController.createUser);

module.exports = router;
