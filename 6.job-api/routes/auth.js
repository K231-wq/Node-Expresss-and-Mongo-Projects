const express = require('express');
const routers = express.Router();

const {
    register,
    login
} = require('../controllers/auth.js');

routers.route('/register').post(register);
routers.route('/login').post(login);

module.exports = routers;