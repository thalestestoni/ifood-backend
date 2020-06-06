import mongoose from 'mongoose';

const mongo = {
  url:
    'mongodb+srv://cloneifood:4m83kekz@cluster0-nkn58.mongodb.net/ifoodclone?retryWrites=true&w=majority',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  },
};

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    mongoose.connect(mongo.url, mongo.options);
  }
}

export default new Database();
