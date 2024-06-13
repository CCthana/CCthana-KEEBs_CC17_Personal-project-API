const express = require('express');
const adminController = require('../controllers/admin-controller');


const adminRouter = express.Router();

adminRouter.post('/login', adminController.login)

adminRouter.get('/orders', adminController.getAllOrder)

adminRouter.patch('/updateorder/:orderId', adminController.updateOrder)



module.exports = adminRouter;