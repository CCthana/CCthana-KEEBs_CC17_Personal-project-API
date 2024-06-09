const express = require('express');
const productController = require('../controllers/product-controller');

const productRouter = express.Router();


productRouter.get('/allproduct', productController.getAllProduct);
productRouter.get('/allkb', productController.getAllKb);
productRouter.get('/allkeycap', productController.getAllKeycap);
productRouter.get('/allsw', productController.getAllSw);
productRouter.get('/allaccessories', productController.getAllAccess);
productRouter.get('/productid/:id', productController.getProductById);

module.exports =  productRouter;

