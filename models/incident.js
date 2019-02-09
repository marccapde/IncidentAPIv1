var mongoose = require('mongoose');

var Incident = mongoose.model('Incident', {
  category: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  subcategory: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  state: {
    type: String,
    trim: true
  },
  date: {
    type: Date
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  photo: {
    type: String
  },
  comment: {
    type: String
  },
  user: {
    type: String,
    default: false,
  },
  likes: {
    type: Number
  }
});

module.exports = {Incident};
