const express = require('express');
const routers = express.Router();

const {
    login,
    dashboard
} = require('../controllers/main');

const authMiddleware = require('../middleware/auth');

routers.route('/dashboard').get(authMiddleware, dashboard);
routers.route('/login').post(login);

module.exports = routers;