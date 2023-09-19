const express = require('express');
const router = express.Router();

const archivementModel = require('../models/archivementModel');
const memberModel = require('../models/memberModel');

router.get('/', async (req, res) => {
  console.log("ARCHIVEMENT CONTROLLER");
  console.log(req.query.mssv);
  const member= await memberModel.getMemberById(req.query.mssv);
  console.log(member);
  const rows = await archivementModel.getArchivementById(member.maso);
  console.log(rows);
  res.json(rows);
});

module.exports = router;
