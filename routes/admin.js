const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

const products = [];

// /admin/add-products => GET
router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
});

// /admin/products => POST
router.post('/add-product', (req, res, next) => {
  // console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect('/');
});

//module.exports = router;
exports.routes = router;
exports.products = products;
