import { Router } from 'express';

import PlateController from './app/controllers/PlateController';
import RestaurantController from './app/controllers/RestaurantController';

const routes = new Router();

routes.get('/plates/:restaurantId/restaurant', PlateController.index);
routes.get('/plates/:plateId', PlateController.show);
routes.post('/plates', PlateController.store);

routes.get('/restaurants', RestaurantController.index);
routes.get('/restaurants/:restaurantId', RestaurantController.show);
routes.post('/restaurant', RestaurantController.store);
routes.delete('/restaurant/:restaurantId', RestaurantController.destroy);

export default routes;
