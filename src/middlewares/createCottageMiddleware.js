const { body } = require("express-validator");

module.exports = [
    body("name").notEmpty().withMessage("Campo requerido"),
    body("price").notEmpty().withMessage("Campo requerido"),
    body("huespedes").notEmpty().withMessage("Campo requerido"),
    body("dormitorios").notEmpty().withMessage("Campo requerido"),
    body("beds").notEmpty().withMessage("Campo requerido"),
    body("description")
        .notEmpty()
        .withMessage("Campo requerido")
        .bail()
        .isLength({ max: 70 })
        .withMessage("La descripción debe tener como máximo 70 caracteres"),
];
