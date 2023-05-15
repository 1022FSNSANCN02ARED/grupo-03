const { validationResult } = require("express-validator");
const fs = require("fs");

module.exports = async (req, res, next) => {
    let errores = validationResult(req);
    if (!errores.isEmpty()) {
        if (req.file) {
            await fs.promises.unlink(req.file.path);
        }

        req.session.errores = errores.mapped();
        req.session.oldData = req.body;
        res.redirect("/user/edit");
    } else {
        next();
    }
};
