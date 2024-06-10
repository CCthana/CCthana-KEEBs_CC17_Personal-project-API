const userService = require("../services/user-service");

const userController = {};

userController.updateAddressById = async (req, res, next) => {
   try {
   await userService.updateAddressById(+req.params.id, req.body)
   res.status(201).json({message: 'update succsess'});
   } catch (err) {
      next(err)
   }
}



module.exports = userController