const express = require('express');
const app = express();
var cors = require('cors')
require("dotenv").config();
const dbConfig = require('./config/dbConfig')
const usersRoute = require('./routes/usersRoute');
const laptopRoute = require('./routes/laptopRoute');
const mobileRoute = require('./routes/mobileRoute')
app.use(cors())
app.use(express.json());
app.use('/api/users', usersRoute);
app.use('/api/laptops', laptopRoute);
app.use('/api/mobiles', mobileRoute);
const PORT = process.env.PORT || 5522
app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
})
