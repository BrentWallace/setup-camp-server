const express = require('express');
const mongoose = require('mongoose');
const Campground = require('../models/campground')

const router = new express.Router();

router.get('/campgrounds', async (req, res) => {
  try {
    const filters = {}
    if (req.query.state) {
      filters.state = req.query.state
    }
    if (req.query.type) {
      filters.type = req.query.type
    }
    if (req.query.minSites && !req.query.maxSites) {
      filters.campsites = { $gte: req.query.minSites }
    }
    if (req.query.maxSites && !req.query.minSites) {
      filters.campsites = { $lte: req.query.maxSites }
    }
    if (req.query.minSites && req.query.maxSites) {
      filters.campsites = { $gte: req.query.minSites, $lte: req.query.maxSites }
    }

    if (req.query.latitude && req.query.longitude && req.query.maxDistance) {
      // convert miles to meters
      const radius = req.query.maxDistance*1609
      filters.loc = { '$nearSphere': { '$geometry': { 'type': "Point", 'coordinates': [parseFloat(req.query.longitude), parseFloat(req.query.latitude)] }, '$maxDistance': radius } } }
    console.log(filters)
    const results = await Campground.find(filters);
    console.log(results)
    return res.json(results);
  } catch (e) {
    return res.send('There was an error with your search' + e)
  }
  return res.send('Sorry, no results were found for your search.');
})

module.exports = router
