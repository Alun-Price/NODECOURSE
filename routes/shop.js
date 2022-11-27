const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');
const adminData = require('./admin.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop.pug', { prods: products, docTitle: 'Shop' });
});

module.exports = router;
