const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors/index');
const User = require('../models/User');

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError('INVALID REQUEST HEADER AUTHORIZATION KEY');
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        //another logic
        // const user = User.findById(payload.id).select('-password');
        // req.user = user;
        req.user = { userId: payload.userId, name: payload.name };
        next();
    } catch (error) {
        throw new UnauthenticatedError('Authentication Invalid!!');
    }
}
module.exports = auth;