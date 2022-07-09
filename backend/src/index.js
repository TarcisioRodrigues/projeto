import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen('3333', () => console.log('Servidor Rodando 🔥 '));
