const path = require('path');

const express = require('express');

const productsController = require('../controllers/products.js');
// essentially imports the products.js controller

const router = express.Router();

// /admin/add-products => GET
router.get('/add-product', productsController.getAddProduct);
// refers to the getAddProduct fn in the controller, not call it
// hence no () at the end of the fn
// saying just store the fn until the route gets called

// /admin/products => POST
router.post('/add-product', productsController.postAddProduct);

//module.exports = router;
module.exports = router;
