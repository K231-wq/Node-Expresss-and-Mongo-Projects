const CustomAPIError = require('./custom-api');
const BadRequestError = require('./bad-request');
const UnauthenticatedError = require('./UnauthenticatedError');
const NotFoundError = require('./not-found');
module.exports = {
    CustomAPIError,
    BadRequestError,
    UnauthenticatedError,
    NotFoundError
}