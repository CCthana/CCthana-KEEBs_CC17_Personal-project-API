const express = require('express');
const orderController = require('../controllers/order-controller');
const authenicate = require('../middlewares/authenicate');


const orderRouter = express.Router();

orderRouter.post('/createorder', authenicate, orderController.createOrder)
orderRouter.get('/myorder/:userId', authenicate, orderController.getUserOrder)


module.exports =  orderRouter;