const express = require('express');
const router = express.Router();
const {
  gethotels,
} = require('../controllers/hotelController');


router.route('/').get(gethotels)

module.exports = router;
