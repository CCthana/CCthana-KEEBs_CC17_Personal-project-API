const orderService = require("../services/order-service")
const orderController = {}

orderController.createOrder = async (req, res, next) => {
   try {
      const data = req.body
      const result = await orderService.createOrder(data)
      console.log(result);
      res.status(201).json(result)
   } catch (err) {
     next(err) 
   }
}



module.exports = orderController;