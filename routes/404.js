const path = require('path');

const express = require('express');

const router = express.Router();

const use404Controller = require('../controllers/404.js');
router.use('/', use404Controller.use404);

module.exports = router;
