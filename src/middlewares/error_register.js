const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
    let errores = validationResult(req);
    if (!errores.isEmpty()) {
        res.render("register", {
            errors: errores.mapped(),
            oldData: req.body,
        });
    } else {
        next();
    }
};
