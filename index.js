require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const notFoundMiddlwware = require('./middlewares/notfound');
const errorMiddleware = require('./middlewares/error-middleware');

const authRouter = require('./routes/auth-route');
const productRouter = require('./routes/product-route');
const cartRouter = require('./routes/cart-route');
const userRouter = require('./routes/user-route');
const orderRouter = require('./routes/order-route');
const adminRouter = require('./routes/admin-route');

const app = express();
app.use(express.json());



app.use(cors());
app.use(morgan('dev'));

app.use('/auth', authRouter)
app.use('/product', productRouter)
app.use('/cart', cartRouter)
app.use('/user', userRouter)
app.use('/order', orderRouter)
app.use('/admin', adminRouter)




app.use(notFoundMiddlwware)
app.use(errorMiddleware)





const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`proj sv running at ${PORT}`))