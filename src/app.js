const express = require('express');
const campgroundsRouter = require('./routers/campgrounds')
const userRouter = require('./routers/user');
require('dotenv').config();
require('./db/mongoose');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(campgroundsRouter);
app.use(userRouter);



const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
