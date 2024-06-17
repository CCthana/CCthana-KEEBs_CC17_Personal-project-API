const express = require('express');
const userController = require('../controllers/user-controller');
const upload = require('../middlewares/upload');
const authenicate = require('../middlewares/authenicate');


const userRouter =  express.Router();


userRouter.patch('/address/:id', authenicate, userController.updateAddressById)

userRouter.patch('/upload', authenicate,  upload.single('image'), userController.upload)



module.exports = userRouter;
