const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        // "max_place" es un input único del formulario de actividad.
        req.session.formType = "max_place" in req.body ? "activity" : "cottage";
        req.session.errors = errors.mapped();
        req.session.oldData = req.body;
        res.redirect("/products/create");
    } else {
        next();
    }
};
