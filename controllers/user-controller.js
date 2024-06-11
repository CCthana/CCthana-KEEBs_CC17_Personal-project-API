const uploadService = require("../services/upload-service");
const userService = require("../services/user-service");
const fs = require('fs/promises');

const userController = {};

userController.updateAddressById = async (req, res, next) => {
   try {
   await userService.updateAddressById(+req.params.id, req.body)
   res.status(201).json({message: 'update succsess'});
   } catch (err) {
      next(err)
   }
}

userController.upload =  async (req, res, next) => {
   try {
      console.log(req.file)
      console.log('#####################################')
      console.log(req.body)
      console.log('++++++++++++++++++++++++++++++++++++++++++++++++')

      const result = await uploadService.upload(req.file.path)
      console.log(result)

      res.status(201).json({uploadUrl: result})
      
      
       
   } catch (err) {
      next(err);
   } finally {
      await  fs.unlink(req.file.path);
   }
}



module.exports = userController