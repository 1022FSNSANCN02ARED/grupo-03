const { validationResult } = require("express-validator");
const fs = require("fs");

module.exports = async (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        if (req.file) {
            await fs.promises.unlink(req.file.path);
        }
        req.session.errors = errors.mapped();
        req.session.oldData = req.body;
        res.redirect("/user/register");
    } else {
        next();
    }
};
