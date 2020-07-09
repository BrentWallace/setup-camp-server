const express = require('express');
const campgroundsRouter = require('./routers/campgrounds')
const userRouter = require('./routers/user');
const cors = require('cors');
require('dotenv').config();
require('./db/mongoose');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(campgroundsRouter);
app.use(userRouter);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
