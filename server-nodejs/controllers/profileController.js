const express = require('express');
const router = express.Router();
const profileModel = require('../models/profileModel');
const memberModel = require('../models/memberModel');

router.get('/', async (req, res) => {
  console.log("PROFILE");
  console.log(req.query.mssv);
  const id = await memberModel.getIdProfile(req.query.mssv);
  console.log(id);
  const rows = await profileModel.getProfileById(id.ll_maso);
  res.json(rows);
});

module.exports = router;
