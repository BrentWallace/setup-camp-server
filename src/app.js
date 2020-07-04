const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send('welcome to setup.camp')
});

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
