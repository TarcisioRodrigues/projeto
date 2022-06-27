import { Router } from 'express';
import connection from '../src/database/connection';
import { ensureAuthenticate } from '../src/middlewares/ensureAuthenticate';

import multer from 'multer';
import multerConfig from './config/multer';

import { UserController } from './Controllers/UserController';
import { AuthenticateController } from './Controllers/AuthenticateController';
import { FileController } from './Controllers/FileController';
const upload=multer(multerConfig)
const routes = Router();

routes.post('/user', UserController.create);
routes.post('/auth', AuthenticateController.store);

routes.use(ensureAuthenticate)
routes.get('/index',UserController.index);
routes.post('/files',upload.single('file'),FileController.store);

export { routes };
