const router = require('koa-router')();
const usersController = require('../../controllers/users');
const auth = require('../auth');

router.prefix('/users');

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// });
//
// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// });

router.get('/', auth.required, usersController.getUser);
router.post('/', usersController.createUser);

module.exports = router;
