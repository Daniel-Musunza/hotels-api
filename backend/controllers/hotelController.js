const asyncHandler = require('express-async-handler');
const db = require('../config/db');


const gethotels = asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM hotels';
  const hotels = await db.query(query);
  res.status(200).json(hotels);
});



module.exports = {
  gethotels
};
