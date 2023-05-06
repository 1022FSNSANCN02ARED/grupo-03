const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
    let errores = validationResult(req);

    if (!errores.isEmpty()) {
        // "max_place" es un input único del formulario de actividad.
        req.session.formType = req.body.max_place ? "activity" : "cottage";

        req.session.errores = errores.mapped();
        req.session.oldData = req.body;
        res.redirect("/products/create");
    } else {
        next();
    }
};
