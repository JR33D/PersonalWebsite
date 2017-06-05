import * as restify from 'restify';
import { settings } from './config/config';
import { logger } from './services/logger';

// Load route files
var defaultRoutes = require('./routes/defaultRoutes');

export let api = restify.createServer({
    name: settings.name,
    log: logger
});

restify.CORS.ALLOW_HEADERS.push('authorization');
api.use(restify.CORS());
api.pre(restify.pre.sanitizePath());
api.use(restify.acceptParser(api.acceptable));
api.use(restify.bodyParser());
api.use(restify.queryParser());
api.use(restify.authorizationParser());
api.use(restify.fullResponse());

// Setup routes from various files
defaultRoutes.applyRoutes(api, '/api');


api.listen(settings.port, function () {
    logger.info(`INFO: ${ settings.name } is running at ${ api.url }`);
});
