require('dotenv').config();
const express = require('express');
const cors = require('cors');

const notFoundMiddlwware = require('./middlewares/notfound');
const errorMiddleware = require('./middlewares/error-middleware');

const authRouter = require('./routes/auth-route');
const morgan = require('morgan');
const productRouter = require('./routes/product-route');

const app = express();
app.use(express.json());



app.use(cors());
app.use(morgan('dev'));

app.use('/auth', authRouter)
app.use('/product', productRouter)




app.use(notFoundMiddlwware)
app.use(errorMiddleware)





const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`proj sv running at ${PORT}`))