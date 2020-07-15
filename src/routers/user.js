const express = require('express');
const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const User = require('../models/user');

const router = new express.Router();

// Get all users
router.get('/users', async (req, res) => {
  const response = await User.find();
  let users = response.map((user) => {
    return user.toJSON();
  })
  res.status(200).send(users);
});

// Create user
router.post('/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save()
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
})

// Login user
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
})

// Logout user
router.post('/users/logout', auth, async (req, res) => {
  try {
    const query = { _id: req.user };
    const response = await User.findOneAndUpdate(query, { tokens: [] });
    res.status(200).send();
  } catch (e) {
    res.status(500).send;
  }
});

module.exports = router;