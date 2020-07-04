const express = require('express');
const campsiteRouter = require('./routers/campsites')
require('dotenv').config();

const app = express();

app.use(campsiteRouter);


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
