const express = require('express');
const cartController = require('../controllers/cart-controller');
const authenicate = require('../middlewares/authenicate');

const cartRouter = express.Router();

cartRouter.post('/item', authenicate, cartController.addToCart);
cartRouter.get('/user/:userId', authenicate, cartController.getCartItemByUserId)
cartRouter.delete('/cartid/:cartId', authenicate, cartController.deleteCartItem)

module.exports =  cartRouter;