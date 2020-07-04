const express = require('express');
const campgroundsRouter = require('./routers/campgrounds')
require('dotenv').config();
require('./db/mongoose');

const app = express();

app.use(campgroundsRouter);
app.use(express.json())


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
