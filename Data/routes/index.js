//Index routes
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');


//Route to the controllers
router.get('/', indexController.getIndex);

module.exports = router