require('dotenv').config();
//async errors
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handle');

//middleware
app.use(express.json());

//roots
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><br><a href="/api/v1/products">Products route</a>');
})

app.use('/api/v1/products', productsRouter);

// products routes

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => console.log(`SERVER IS RUNNING ON http://localhost:${port}`));
    } catch (error) {
        console.log(error);
    }
}
start();