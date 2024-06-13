const adminService = {};
const prisma = require("../models/prisma");

adminService.findUserByAccount = (userName) =>
  prisma.admin.findUnique({
    where: { userName: userName },
  });

adminService.getAllOrder = () =>
  prisma.order.findMany({
    include: {
      user : true,
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

adminService.updateOrder = (orderId, status) => prisma.order.update({
   where: { id: orderId },
   data: { status: status }
})




module.exports = adminService;
