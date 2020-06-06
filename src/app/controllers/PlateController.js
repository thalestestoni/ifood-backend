import Plate from '../models/Plate';

class PlateController {
  async index(request, response) {
    const { restaurantId } = request.params;

    const plates = await Plate.find({ restaurantId });

    return response.json(plates);
  }

  async store(request, response) {
    const plate = await Plate.create(request.body);

    return response.json(plate);
  }

  async show(request, response) {
    const { plateId } = request.params;

    const plate = await Plate.findById(plateId);

    return response.json(plate);
  }
}

export default new PlateController();
