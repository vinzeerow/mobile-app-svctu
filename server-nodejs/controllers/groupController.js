const express = require('express');
const router = express.Router();
const groupModel = require('../models/groupModel');

router.get('/get-all-group', async (req, res) => {
    const rows = await groupModel.getAllGroup();
    res.json(rows);
});
router.post('/create-group', async (req, res) => {
    const rows = await groupModel.createGroup(req.body);
    res.json(rows);
});

module.exports = router;
