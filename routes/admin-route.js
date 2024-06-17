const express = require('express');
const adminController = require('../controllers/admin-controller');
const adminAuthenicate = require('../middlewares/adminauthenicate');


const adminRouter = express.Router();

adminRouter.post('/login', adminController.login)

adminRouter.get('/orders', adminAuthenicate, adminController.getAllOrder)

adminRouter.patch('/updateorder/:orderId', adminAuthenicate, adminController.updateOrder)



module.exports = adminRouter;