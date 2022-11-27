const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');
const adminData = require('./admin.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop.pug');
});

module.exports = router;
