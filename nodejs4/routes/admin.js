const path = require('path');

const express = require('express');

const productController = require('../controllers/products')

const router = express.Router();

// /admin/add-product => GET
// 괄호는 적지 않고 함수에서 참조만한다
router.get('/add-product',productController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

module.exports = router;