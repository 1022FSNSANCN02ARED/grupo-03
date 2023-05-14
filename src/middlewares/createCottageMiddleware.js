const { body } = require("express-validator");

module.exports = [
    body("name").notEmpty().withMessage("Debes agregar un nombre"),

    body("price").notEmpty().withMessage("Debes agregar un precio"),

    body("guest")
        .notEmpty()
        .withMessage("Debes agregar la cantidad de huéspedes"),

    body("beds").notEmpty().withMessage("Debes agregar la cantidad de camas"),

    body("bedrooms")
        .notEmpty()
        .withMessage("Debes agregar la cantidad de habitaciones"),

    body("bathrooms")
        .notEmpty()
        .withMessage("Debes agregar la cantidad de baños"),

    body("description")
        .notEmpty()
        .withMessage("Debes agregar una descripción")
        .bail()
        .isLength({ max: 70 })
        .withMessage("La descripción debe tener como máximo 70 caracteres"),

    body("services").custom((value, { req }) => {
        if (!value) {
            throw new Error("Debes agregar mínimo un servicio");
        }
        return true;
    }),
    body("cottage_images").custom((value, { req }) => {
        if (req.files.length < 3) {
            throw new Error("Debe subir como mínimo 3 fotos de la cabaña");
        }
        return true;
    }),
];
