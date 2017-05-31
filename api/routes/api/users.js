const router = require('koa-router')();
const usersController = require('../../controllers/users');
const auth = require('../auth');

router.prefix('/users');

router.get('/', auth.required, usersController.getUser);
router.post('/', usersController.createUser);
router.post('/login', usersController.login);

module.exports = router;
