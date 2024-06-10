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

userService.updateAddressById = (userId,data) => prisma.user.update ({
   data,  
   where:{id :userId}
  
})

module.exports = userService;