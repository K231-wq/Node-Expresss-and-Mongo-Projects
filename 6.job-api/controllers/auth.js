const User = require('../models/User');
const { BadRequestError, UnauthenticatedError} = require('../errors');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password){
        throw new BadRequestError('PLEASE PROVIDE NAME, EMAIL AND PASSWORD FOR REGISTER FORM!!');
    }
    const user = await User.create({ ...req.body});
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token});
}

const login = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        throw new BadRequestError('PLEASE PROVIDE EMAIL AND PASSWORD!!');
    }
    const user = await User.findOne({email});
    if(!user){
        throw new UnauthenticatedError('INVALID Credential');
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credential~~');
    }
    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ name: { name: user.name}, token});
}
module.exports = {
    register,
    login
}