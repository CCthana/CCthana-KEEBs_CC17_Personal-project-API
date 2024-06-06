

const authController = {};


authController.register = (req, res, next) => {
   const data = req.input
   console.log(data)
   res.status(200).json({message: 'resigterr'})
};


authController.login = (req, res, next) => {
   const data = req.input
   console.dir(data)
   res.status(200).json({message: data })
};


module.exports = authController;