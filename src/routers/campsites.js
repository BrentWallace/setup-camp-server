const express = require('express');
const { Router } = require('express');

const router = new express.Router()

router.get('/', (req, res) => {
    res.send('welcome to setup.camp');
})

module.exports = router
