const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        // res.json(errors.mapped());
        // "max_place" es un input único del formulario de actividad.
        const editFormType =
            "max_place" in req.body ? "activities" : "cottages";

        req.session.formType = "max_place" in req.body ? "activity" : "cottage";
        req.session.errors = errors.mapped();
        req.session.oldData = {
            id: req.params.id,
            ...req.body,
        };
        res.redirect(`/products/${editFormType}/edit/${req.params.id}`);
    } else {
        next();
    }
};
