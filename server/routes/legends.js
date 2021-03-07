const express = require('express');
const legendsController = require('../controllers/legends');
const router = express.Router();

// GET /legends/get-legends
router.get('/get-legends', legendsController.getLegends); //TESTED

module.exports = router;
