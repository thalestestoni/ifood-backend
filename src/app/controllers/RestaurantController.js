import Restaurant from '../models/Restaurant';

class RestaurantController {
  async store(request, response) {
    const restaurant = await Restaurant.create(request.body);

    const { name, description, category } = restaurant;

    return response.json({ name, description, category });
  }

  async index(request, response) {
    const restaurants = await Restaurant.find();

    return response.json(restaurants);
  }

  async show(request, response) {
    const { restaurantId } = request.params;

    const restaurant = await Restaurant.findById(restaurantId);

    return response.json(restaurant);
  }

  async destroy(request, response) {
    const { restaurantId } = request.params;

    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
      return response
        .status(400)
        .json({ error: 'O restaurante não foi encontrados' });
    }

    await restaurant.remove();

    return response.send();
  }
}

export default new RestaurantController();
