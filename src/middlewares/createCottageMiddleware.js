const { body } = require("express-validator");

module.exports = [
    body("name").notEmpty().withMessage("Campo requerido"),
    body("price").notEmpty().withMessage("Campo requerido"),
    body("beds").notEmpty().withMessage("Campo requerido"),
    body("description")
        .notEmpty()
        .withMessage("Campo requerido")
        .bail()
        .isLength({ max: 70 })
        .withMessage("La descripción debe tener como máximo 70 caracteres"),
    body("images").custom((value, { req }) => {
        if (req.files.length < 3) {
            throw new Error("Debe subir como mínimo 3 fotos de la cabaña");
        }
        return true;
    }),
];
