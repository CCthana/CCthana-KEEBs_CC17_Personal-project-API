const userService = {};
const prisma = require('../models/prisma')


userService.createUser = data => prisma.user.create({data});

userService.findUserByEmail = email => prisma.user.findFirst({
   where: {
         email: email
   }
});

userService.findUserById = userId => prisma.user.findUnique ({
   where: {id: userId}
});

module.exports = userService;