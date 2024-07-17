const { cloudinary_js_config } = require('../config/cloudinary');
const prisma = require('../models/prisma')

const orderService = {};

// orderService.createOrder = (data) => prisma.order.create({data})

orderService.createOrder = async (orderData, orderItemData, userId) => {
   return await prisma.$transaction(async(tx) => {
      const order = await tx.order.create({data : {...orderData}})
      console.log(order, '///////////////// order /////////////////')
      const orderId = +order.id
      const data = orderItemData.map(item => {
         return {...item, orderId: orderId}
      })
      console.log(data, '=============================================')
      await tx.orderItem.createMany({data})

      await tx.cartItem.deleteMany({ where: { userId }})

      return
})
}

orderService.getUserOrder = (userId) => prisma.order.findMany({
   where: {userId},
   include: {
      orderItems : {
         include : {
            product: true
         }
      }
   }
})


module.exports = orderService;