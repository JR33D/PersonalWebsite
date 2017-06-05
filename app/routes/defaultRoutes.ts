import DefaultController from '../controllers/defaultController';
var Router = require('restify-router').Router;

const router = new Router();
router.get("/", DefaultController.get);

module.exports = router;
