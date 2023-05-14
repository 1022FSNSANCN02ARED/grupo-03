const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
    let errores = validationResult(req);
    if (!errores.isEmpty()) {
        req.session.errores = errores.mapped();
        req.session.oldData = req.body;
        res.redirect(`/products/activities/tickets/${req.params.id}`);
    } else {
        next();
    }
};
