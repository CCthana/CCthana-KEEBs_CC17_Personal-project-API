const prisma = require('../models/prisma')

const cartService = {};

cartService.addItemToCart = (data) => prisma.cartItem.create({data})

cartService.getCartItemByUserId = (userId) => prisma.cartItem.findMany({
   where: {userId : userId},
   include : { product : true}
})

cartService.deleteCartItem = (cartId) => prisma.cartItem.delete({ where: {id: cartId} })


module.exports = cartService;