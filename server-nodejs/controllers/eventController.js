const express = require('express');
const router = express.Router();
const eventModel = require('../models/eventModel');

router.get('/', async (req, res) => {
  const rows = await eventModel.getAllEvent();
  console.log(rows);
  res.json(rows);
});
router.get('/get-by-id', async (req, res) => {
  const rows = await eventModel.getEventById(req.query.maso);
  console.log(rows);
  res.json(rows);
});

module.exports = router;
