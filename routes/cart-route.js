const express = require('express');
const cartController = require('../controllers/cart-controller');

const cartRouter = express.Router();

cartRouter.post('/item', cartController.addToCart);
cartRouter.get('/user/:userId', cartController.getCartItemByUserId)
cartRouter.delete('/cartid/:cartId', cartController.deleteCartItem)

module.exports =  cartRouter;