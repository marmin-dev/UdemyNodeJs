const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();

// /admin/add-product => GET
// 괄호는 적지 않고 함수에서 참조만한다
router.get('/add-product',adminController.getAddProduct);

router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);




module.exports = router;