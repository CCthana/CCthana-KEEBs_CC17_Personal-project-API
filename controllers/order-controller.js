const orderService = require("../services/order-service")
const orderController = {}

orderController.createOrder = async (req, res, next) => {
   try {
      const data = req.body

      const orderData = {payment: data.payment , userId : +data.userId}
      const orderItemData  =  req.body.product
      const userId = +data.userId

      const result = await orderService.createOrder(orderData, orderItemData, userId)
   
      res.status(201).json({message: 'order succsess'})
   } catch (err) {
     next(err) 
   }
}



module.exports = orderController;