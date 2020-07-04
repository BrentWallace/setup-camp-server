const mongoose = require('mongoose');
const { kStringMaxLength } = require('buffer');
const Schema = mongoose.Schema

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
    nearestTown: String
});

const Campground = mongoose.model('campground', campgroundSchema)

module.exports = Campground