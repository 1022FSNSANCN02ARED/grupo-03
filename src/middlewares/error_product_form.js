const { validationResult } = require("express-validator");
const fs = require("fs");
module.exports = async (req, res, next) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        // Eliminamos las imágenes que se hayan creado.
        for (const file of req.files) {
            await fs.promises.unlink(file.path);
        }
        // res.json(errors.mapped());
        // "max_place" es un input único del formulario de actividad.
        req.session.formType = "max_place" in req.body ? "activity" : "cottage";

        req.session.errors = errors.mapped();
        req.session.oldData = req.body;
        res.redirect("/products/create");
    } else {
        next();
    }
};
