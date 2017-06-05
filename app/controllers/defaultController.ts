import * as restify from 'restify';
import { logger } from '../services/logger';

export default class DefaultController {
    public static get(req: restify.Request, res: restify.Response, next: restify.Next) {
        res.json(200, { message: 'Hello World!' });
    }

}
