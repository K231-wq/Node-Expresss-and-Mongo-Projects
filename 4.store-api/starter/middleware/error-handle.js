const errorHandler = (err, req, res, next) => {
    console.log(err);
    return res.status(500).json({msg: 'SOMETHING WENT WRONG. PLEASE TRY AGAIN LATER...'});
}

module.exports = errorHandler;