const { body } = require("express-validator");

module.exports = [
    body("name").notEmpty().withMessage("Debes agregar un nombre"),
    body("price").notEmpty().withMessage("Debes agregar un precio"),
    body("max_place")
        .notEmpty()
        .withMessage("Debes agregar la cantidad máxima de personas"),
    body("description")
        .notEmpty()
        .withMessage("Debe agregar una descripción")
        .bail()
        .isLength({ max: 70 })
        .withMessage("La descripción debe tener como máximo 70 caracteres"),
    body("some_selected_hours").custom((value, { req }) => {
        if (!req.body.weekday_in && !req.body.weekend_in) {
            throw new Error("No a seleccionado ningun horario");
        }
        return true;
    }),
    body("activity_images").custom((value, { req }) => {
        if (req.files.length < 3) {
            throw new Error("Debe subir como mínimo 3 fotos de la actividad");
        }
        return true;
    }),

    // Horarios de inicio:
    body("weekday_in").custom((value, { req }) => {
        if (value) {
            if (!req.body.weekday_out) {
                throw new Error("No a llenado correctamente los dos horarios");
            }
        }
        return true;
    }),
    body("second_weekday_in").custom((value, { req }) => {
        if (value) {
            if (!req.body.second_weekday_out) {
                throw new Error("No a llenado correctamente los dos horarios");
            }
            if (!req.body.weekday_in || !req.body.weekday_out) {
                throw new Error(
                    "Has intentado agregar un segundo horario sin agregar el primero."
                );
            }
        }
        return true;
    }),
    body("weekend_in").custom((value, { req }) => {
        if (value) {
            if (!req.body.weekend_out) {
                throw new Error("No a llenado correctamente los dos horarios");
            }
        }
        return true;
    }),
    body("second_weekend_in").custom((value, { req }) => {
        if (value) {
            if (!req.body.weekend_out) {
                throw new Error("No a llenado correctamente los dos horarios");
            }
            if (!req.body.weekend_in || !req.body.weekend_out) {
                throw new Error(
                    "Has intentado agregar un segundo horario sin agregar el primero."
                );
            }
        }
        return true;
    }),

    // Horaiors de fin:
    body("weekday_out").custom((value, { req }) => {
        if (value) {
            if (!req.body.weekday_in) {
                throw new Error("No a llenado correctamente los dos horarios");
            }
        }
        return true;
    }),
    body("second_weekday_out").custom((value, { req }) => {
        if (value) {
            if (!req.body.second_weekday_in) {
                throw new Error("No a llenado correctamente los dos horarios");
            }
        }
        return true;
    }),
    body("weekend_out").custom((value, { req }) => {
        if (value) {
            if (!req.body.weekend_in) {
                throw new Error("No a llenado correctamente los dos horarios");
            }
        }
        return true;
    }),
    body("second_weekend_out").custom((value, { req }) => {
        if (value) {
            if (!req.body.weekend_in) {
                throw new Error("No a llenado correctamente los dos horarios");
            }
        }
        return true;
    }),
];
