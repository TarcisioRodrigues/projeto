import { Express, Router } from "express";
import connection from '../src/database/connection'

import { UserController } from "./Controllers/UserController";

const routes=Router()

routes.post('/user',UserController.create)


export {routes}