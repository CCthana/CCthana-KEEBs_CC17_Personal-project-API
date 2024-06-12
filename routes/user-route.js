const express = require('express');
const userController = require('../controllers/user-controller');
const upload = require('../middlewares/upload');


const userRouter =  express.Router();


userRouter.patch('/address/:id', userController.updateAddressById)

userRouter.patch('/upload', upload.single('image'), userController.upload)



module.exports = userRouter;
