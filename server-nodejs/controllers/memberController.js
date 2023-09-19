const express = require('express');
const router = express.Router();
const profileModel = require('../models/profileModel');
const accountModel = require('../models/accountModel');
const chihoiModel = require('../models/chihoiModel');
const memberModel = require('../models/memberModel');

router.post('/sign-up', async (req, res) => {
  console.log("MEMBER CONTROLLER");
  console.log(req.body);
  const ll_maso = await profileModel.insertProfile(req.body.bodyFormData);
  console.log(ll_maso);
  const ch_maso = await chihoiModel.getIdChihoi(req.body.bodyFormData.chiHoi,req.body.bodyFormData.lienChiHoi);
  console.log(ch_maso[0].maso);
  const taikhoan = await accountModel.insertAccount(req.body.bodyFormData);
  console.log(taikhoan);
  const rows = await memberModel.insertMember(req.body.bodyFormData,ch_maso[0].maso,ll_maso);
  res.json(rows);
});
router.get('/member-unit', async (req, res) => {
  console.log("MEMBER CONTROLLER");
  console.log(req.query.mssv);
  const rows = await memberModel.getMemberByUnit(req.query.mssv);

  res.json(rows);
});

module.exports = router;
