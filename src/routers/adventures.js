const express = require('express')
const mongoose = require('mongoose')
const Adventure = require('../models/adventure');

const router = new express.Router();

router.get('/adventures', async (req, res) => {
    try {
        const results = await Adventure.find({})
    } catch (e) {
        return res.send('Could not get your adventures')
    }
});

router.post('/adventures', (req, res) => {
    try {

    } catch (e) {
        return res.send('There was a problem creating your adventure.')
    }
})