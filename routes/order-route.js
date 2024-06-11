const express = require('express');
const orderController = require('../controllers/order-controller');


const orderRouter = express.Router();

orderRouter.post('/createorder', orderController.createOrder)


module.exports =  orderRouter;