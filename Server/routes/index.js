const express = require('express');
const Controller = require('../controllers');
const router = express.Router();

router.get('/result', Controller.showResult);

module.exports = router;