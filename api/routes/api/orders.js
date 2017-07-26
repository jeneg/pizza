const router = require('koa-router')();
const ordersController = require('../../controllers/orders');
const auth = require('../auth');

router.prefix('/orders');

router.post('/', ordersController.makeOrder);

module.exports = router;
