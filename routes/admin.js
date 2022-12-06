const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin.js');
// essentially imports the products.js controller

const router = express.Router();

// /admin/add-products => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/products => POST
router.post('/add-product', adminController.postAddProduct);

//module.exports = router;
module.exports = router;
