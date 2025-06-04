const express = require('express');
const app = express();
const {logger} = require('./logger.js');
const authorize = require('./authorize.js');
const morgan = require('morgan');

// app.use([logger, authorize]);
//app.use(express.static('./public));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send("Home");
})
app.get('/about', (req, res) => {
    res.send("About");
})
app.get('/api/products', (req, res) => {
    res.send("products");
})
app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send("Items");
})

app.listen(5000, () => console.log("The server is running: http://localhost:5000"));