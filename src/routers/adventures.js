const express = require('express');
const mongoose = require('mongoose');
const auth = require('../middleware/auth.js');
const Adventure = require('../models/adventure');
const ObjectId = mongoose.Types.ObjectId;

const router = new express.Router();

router.get('/adventures', auth, async (req, res) => {
  try {
    const results = await Adventure.find({ owner: ObjectId(req.user._id._id) });
    res.status(200).send(results)
  } catch (e) {
    return res.send('Could not get your adventures');
  }
});

router.post('/adventures', auth, async (req, res) => {
  const adventure = new Adventure(req.body);
  try {
    const results = await adventure.save();
    res.status(201).send();
  } catch (e) {
    return res.status(400).send(e);
  }
})

module.exports = router