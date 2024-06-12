const express = require('express');
const orderController = require('../controllers/order-controller');


const orderRouter = express.Router();

orderRouter.post('/createorder', orderController.createOrder)
orderRouter.get('/myorder/:userId', orderController.getUserOrder)


module.exports =  orderRouter;