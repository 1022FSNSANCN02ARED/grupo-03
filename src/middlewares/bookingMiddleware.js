const { body } = require("express-validator");

module.exports = [
    body("check_in")
        .notEmpty()
        .withMessage("No ha seleccionado fecha de entrada."),
    body("check_out")
        .notEmpty()
        .withMessage("No ha seleccionado fecha de salida."),
    body("guest")
        .notEmpty()
        .withMessage("No ha seleccionado el número de huéspedes"),
    body("total")
        .notEmpty()
        .withMessage("No se ha podido especificar el total"),
];
