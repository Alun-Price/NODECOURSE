const express = require('express');

const router = express.Router();

// /admin/add-products => GET
router.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

// /admin/products => POST
router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
