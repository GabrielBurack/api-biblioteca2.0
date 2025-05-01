const HttpError = require("../errors/httpError");

module.exports = (error, req, res, next) => {
    if (error) {
        if (error instanceof HttpError) {
            return res.status(error.status).json({ message: error.message });
        }
        return res.status(500).json({ message: error.message });
    }
    next(); // Chama o próximo middleware apenas se não houver erro
};