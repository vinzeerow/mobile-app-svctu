const express = require('express');
const router = express.Router();
const roomModel = require('../models/geoRoomModel');

router.get('/', async (req, res) => {
  await roomModel.getRoomsCTU(req,res);
//   res.json(rows);
//   console.log(rows);
});

module.exports = router;
