const express = require('express');
const routers = express.Router();

const {
    getAllProductsStatic,
    getAllProducts
} = require('../controller/products');

routers.route('/').get(getAllProducts);
routers.route('/static').get(getAllProductsStatic);

module.exports = routers; 