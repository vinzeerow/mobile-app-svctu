const express = require('express');
const router = express.Router();
const questionModel = require('../models/questionModel');

router.get('/all-id-position', async (req, res) => {
  const rows = await questionModel.getIdPosition();
  res.json(rows);
});

module.exports = router;
