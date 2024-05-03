const express= require('express');

const path= require('path');

const router= express.Router();

const productController = require('../controllers/products');





router.post('/add-product', productController.postAddProduct );





router.get('/add-product', productController.getAddProduct );


module.exports= router;