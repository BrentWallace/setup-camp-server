const mongoose = require('mongoose');
const { kStringMaxLength } = require('buffer');
const Schema = mongoose.Schema

const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });

const campgroundSchema = new Schema({
    longitude: String,
    latitude: String,
    composite: String,
    code: String,
    name: String,
    type: String,
    phone: String,
    open: String,
    comments: String,
    campsites: Number,
    elevation: Number,
    amenities: String,
    state: String,
    distance: String,
    bearing: String,
    nearestTown: String,
    location: {
        type: pointSchema,
        index: '2dsphere'
    }
});

const Campground = mongoose.model('campground', campgroundSchema);

module.exports = Campground