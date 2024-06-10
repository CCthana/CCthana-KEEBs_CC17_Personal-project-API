const express = require('express');
const userController = require('../controllers/user-controller');


const userRouter =  express.Router();


userRouter.patch('/address/:id', userController.updateAddressById)



module.exports = userRouter;
