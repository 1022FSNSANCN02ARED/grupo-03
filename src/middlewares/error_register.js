const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
    let errores = validationResult(req);
    if (!errores.isEmpty()) {
        delete req.body.password;
        delete req.body.confirmPassword;
        res.send(req.body);
        res.render("register", {
            errores: errores.mapped(),
            oldData: req.body,
        });
    } else {
        next();
    }
};
