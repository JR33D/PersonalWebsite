import DefaultController from '../controllers/defaultController';
var Router = require('restify-router').Router;

const router = new Router();
const controller = new DefaultController();
router.get("/", controller.get);

module.exports = router;
