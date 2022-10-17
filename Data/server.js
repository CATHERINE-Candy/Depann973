
const express = require('express');
const app = express();
//const homeRoutes =require('./routes/home');
require('dotenv').config({path: './config/.env'});
const { request } = require('express');
//const bodySanitizer = require('./app/middlewares/bodySanitizer');

//set middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
//app.use(bodySanitizer);


//start server
app.listen(process.env.PORT || PORT, ()=> console.log(`Server is running on ${process.env.PORT}!`)) 

