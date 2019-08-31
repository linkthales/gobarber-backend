import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', async (request, response) => {
  return response.json('lulu');
});

routes.post('/users', UserController.store);

export default routes;
