const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  places: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Place',
      required: true,
      default: [],
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
