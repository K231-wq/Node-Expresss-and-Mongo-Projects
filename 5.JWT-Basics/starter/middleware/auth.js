const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('PLEASE PROVIDE NAME AND PASSWORD');
    }
    const token = authHeader.split(' ')[1];
    
    console.log(token);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {id, username} = decoded;
        req.user = {id, username};
        
        next();
    } catch (error) {
        throw new UnauthenticatedError('NOT AUTHORIZED TO ACCESS THIS ROUTE');
    }

}
module.exports = authenticationMiddleware;