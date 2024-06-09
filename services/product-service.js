const prisma = require('../models/prisma')

const productService = {};

productService.getAllProduct = () => prisma.product.findMany()

productService.getAllKb = () => prisma.product.findMany({where:{
   type: "KEYBOARD"
}})

productService.getAllSw = () => prisma.product.findMany({where:{
   type: "SWITCH"
}})

productService.getAllKeycap = () => prisma.product.findMany({where:{
   type: "KEYCAP"
}})

productService.getAllAccess = () => prisma.product.findMany({where:{
   type: "ACCESSORIES"
}})

productService.getProductById = (productId) => prisma.product.findUnique({
   where: {
      id : productId
   }
})

module.exports = productService;