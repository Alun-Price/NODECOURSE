const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

// /admin/add-products => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/products => POST
router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
