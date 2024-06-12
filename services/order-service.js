const prisma = require('../models/prisma')

const orderService = {};

// orderService.createOrder = (data) => prisma.order.create({data})

orderService.createOrder = async (orderData, orderItemData, userId) => {
   return await prisma.$transaction(async(tx) => {
      const order = await tx.order.create({data : {...orderData}})
      const orderId = +order.id
      const data = orderItemData.map(item => {
         return {...item, orderId: orderId}
      })
      await tx.orderItem.createMany({data})

      await tx.cartItem.deleteMany({ where: { userId }})

      return
})
}


module.exports = orderService;