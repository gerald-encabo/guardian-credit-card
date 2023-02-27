const errorHandler = (err, req, res, next) => {

    const statusCode = res.statusCode ? res.statusCode : 500;

    if (statusCode) {
        res.status(statusCode).json(err.message);
    } else {
        res.json({
            message: err.message,
            stack: process.env.NODE_ENV === 'production' ? null : err.stack
        })
    }
}

module.exports = errorHandler;