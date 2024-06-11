const prisma = require('../models/prisma')

const orderService = {};

orderService.createOrder = (data) => prisma.order.create({data})

module.exports = orderService;