
const express = require('express');
const app = express();
const indexRoutes =require('./routes/index');
require('dotenv').config({path: './config/.env'});
const { request } = require('express');

//set middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

//Set Routes
app.use('/', indexRoutes);

//start server
app.listen(process.env.PORT || PORT, ()=> console.log(`Server is running on ${process.env.PORT}!`)) 

