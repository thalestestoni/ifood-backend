import mongoose from 'mongoose';

const PlateSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String,
  photo: String,
  restaurantId: String,
});

export default mongoose.model('Plate', PlateSchema);
