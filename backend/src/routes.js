import { Router } from 'express';
import connection from '../src/database/connection';
import { ensureAuthenticate } from '../src/middlewares/ensureAuthenticate';

import { UserController } from './Controllers/UserController';
import { AuthenticateController } from './Controllers/AuthenticateController';

const routes = Router();

routes.post('/user', UserController.create);
routes.post('/auth', AuthenticateController.store);
routes.post('/index', ensureAuthenticate,UserController.index);

export { routes };
