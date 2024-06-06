const notFoundMiddlwware =  (req, res, next) => {
   res.status(404).json({message: `requested url ${req.url} was not found on this server`});
};

module.exports = notFoundMiddlwware;