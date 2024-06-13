const adminService = require("../services/admin-service");
const hashService = require("../services/hash-service");
const jwtService = require("../services/jwt-service");


const adminController = {};


adminController.login = async (req, res, next) => {
try {
   
   const data = req.body
   console.log(data)
   const existUser = await adminService.findUserByAccount(data.userName);

      if(!existUser) {
         createError({message: 'invalid account', statusCode: 400});
      }

   const isMatch = await hashService.compare(data.password, existUser.password)

      if(!isMatch){
         createError({message: 'invalid password', statusCode: 400});
      }   

   const accessToken = jwtService.sign({id: existUser.id});
   res.status(200).json({ accessToken });

} catch (err) {
   next(err)
}
}

adminController.getAllOrder = async (req, res, next) => {
   try {
      const data = await adminService.getAllOrder()
      
      res.status(200).json({ allOrder: data})
   } catch (err) {
      next(err)
   }
}

adminController.updateOrder = async (req, res, next) => {
   try {
      const data = req.body
      console.log(req.body)
      const orderId  = +req.params.orderId
      const status = data.status


       await adminService.updateOrder(orderId, status )
      res.status(201).json({ message: 'STATUS updated'})

   } catch (err) {
      next(err)
   }
}





module.exports = adminController;