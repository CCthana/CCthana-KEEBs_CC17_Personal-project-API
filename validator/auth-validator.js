const Joi = require('joi');

exports.registerSchema = Joi.object({ 
   email: Joi.string().email({tlds: false}).required().trim().messages({'string.empty': 'email require', 'string.email' : 'invalid email'}),
   userName: Joi.string().required().trim(),
   password: Joi.string().required().pattern(/^[a-zA-Z0-9]{6,}$/).messages({'string.empty': 'password require', 'string.pattern.base' : 'password must be at least 8 character long'}),
   confirmPassword : Joi.string().required().valid(Joi.ref('password')).strip().messages({'string.empty': 'confirm password require', 'any.only' : 'confirm password does not match'})
});


exports.loginSchema = Joi.object ({ 
   email: Joi.string().required().messages({'string.empty': 'Email require'}),
   password: Joi.string().required().messages({'string.empty': 'Password required'})
});