const express = require('express');
const router = express.Router();
const setOfQuestionModel = require('../models/setOfQuestionsModel');

router.get('/get-all-set-of-questions', async (req, res) => {
    const rows = await setOfQuestionModel.getAllSetOfQuestions();
    res.json(rows);
});
router.post('/create-set-of-questions', async (req, res) => {
    const rows = await setOfQuestionModel.createSetOfQuestions(req.body);
    // console.log("CONTROLLER");
    // console.log(req.body);
    res.json(rows);
});

module.exports = router;
