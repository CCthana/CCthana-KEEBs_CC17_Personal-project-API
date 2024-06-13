const productService = require("../services/product-service");


const productController = {};

productController.getAllProduct = async (req, res, next) => {
   try {
      const data = await productService.getAllProduct()
      res.status(200).json({ allProduct: data})
   } catch (err) {
      next(err)
   }
}

productController.getAllKb = async (req, res, next) => {
   try {
      const data = await productService.getAllKb()
      res.status(200).json({ allKb: data})
   } catch (err) {
      next(err)
   }
}

productController.getAllSw = async (req, res, next) => {
   try {
      const data = await productService.getAllSw()
      res.status(200).json({ allSw: data})
   } catch (err) {
      next(err)
   }
}

productController.getAllKeycap = async (req, res, next) => {
   try {
      const data = await productService.getAllKeycap()
      res.status(200).json({ allKeycap: data})
   } catch (err) {
      next(err)
   }
}

productController.getAllAccess = async (req, res, next) => {
   try {
      const data = await productService.getAllAccess()
      res.status(200).json({ allAccess: data})
   } catch (err) {
      next(err)
   }
}

productController.getProductByName = async (req, res, next) => {
   try {
      const data = await productService.getProductByName(req.params.productName)
      res.status(200).json({ selectedProduct: data})
   } catch (err) {
      next(err)
   }
}

module.exports = productController;