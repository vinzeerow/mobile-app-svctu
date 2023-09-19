const express = require('express');
const router = express.Router();
const accountModel = require('../models/accountModel.js');

router.get('/', async (req, res) => {
  const rows = await accountModel.getAccounts();
  res.json(rows);
});

module.exports = router;
