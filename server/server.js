const express = require('express');
const app = express();
var cors = require('cors')
require("dotenv").config();
const dbConfig = require('./config/dbConfig')
const usersRoute = require('./routes/usersRoute');
const laptopRoute = require('./routes/laptopRoute');
app.use(cors())
app.use(express.json());
app.use('/api/users', usersRoute);
app.use('/api/laptops', laptopRoute);
const PORT = process.env.PORT || 5522
app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
})