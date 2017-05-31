const router = require('koa-router')();
const pizzasController = require('../../controllers/pizzas');
const auth = require('../auth');

router.prefix('/pizzas');

router.get('/', pizzasController.getPizza);
router.post('/', pizzasController.addPizza);

module.exports = router;
