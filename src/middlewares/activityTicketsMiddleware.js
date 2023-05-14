const { body } = require("express-validator");

module.exports = [
    body("day").notEmpty().isDate().withMessage("No ha seleccionado el día"),
    body("hour").notEmpty().withMessage("No ha seleccionado el horario"),
    body("quantity")
        .notEmpty()
        .withMessage("No ha seleccionado la cantidad de tickets"),
    body("total")
        .notEmpty()
        .withMessage("No se ha podido especificar el total"),
];
