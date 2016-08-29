const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  auth: {
    type: Number,
    required: true,
  },

  score: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;