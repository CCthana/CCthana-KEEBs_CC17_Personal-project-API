
const adminService = require("../services/admin-service");
const jwtService = require("../services/jwt-service");

const createError = require("../utils/create-error");


const adminAuthenicate = async (req, res, next) => {
   try {
      const authorization = req.headers.authorization;
      console.log(req.headers)
      if(!authorization || !authorization.startsWith('Bearer ')) {
         createError({
            message: 'unauthorized',
            statusCode: 401
         })
      }

      const accessToken = authorization.split(' ')[1];
      const payload = jwtService.verify(accessToken);
     
      const admin = await adminService.findUserById(payload.id);
      if(!admin) {
         createError({
            message: 'user was not found',
            statusCode: 400
         });
      }

      delete admin.password

      req.admin = admin;
      next();

   } catch (err) {
      next(err)
   }
};



module.exports = adminAuthenicate; 