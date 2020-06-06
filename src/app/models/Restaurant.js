import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  distance: String,
  deliveryPrice: String,
  deliveryTime: String,
  rating: String,
  ratingQuantity: String,
  photo: String,
});

export default mongoose.model('Restaurant', RestaurantSchema);
