const cartService = require("../services/cart-service");

const cartController = {}

cartController.addToCart =  async (req, res ,next) => {
   try {
      const data = req.body
      const result = await cartService.addItemToCart(data)
      console.log(result);
      res.status(201).json({message: 'added to cart'})
      
   } catch (err) {
      next(err)
   }
}

cartController.getCartItemByUserId = async (req, res, next) => {
   try {
      const userId = +req.params.userId
      const item = await cartService.getCartItemByUserId(userId);
      res.status(200).json(item)
   } catch (err) {
      next(err)
   }
}

cartController.deleteCartItem = async (req, res, next) => {
   try {
      await cartService.deleteCartItem(+req.params.cartId)
      res.status(201).json({message: 'delete item in cart'});
   } catch (err) {
      next(err)
   }
}


module.exports = cartController;