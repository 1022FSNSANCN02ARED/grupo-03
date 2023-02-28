const { body } = require("express-validator");

module.exports = [
    body("name").notEmpty().withMessage("Debe introducir un nombre."),
    body("surname").notEmpty().withMessage("Debe introducir un apellido."),
    body("email")
        .notEmpty()
        .withMessage("Debe introducir un correo electrónico.")
        .bail()
        .isEmail()
        .withMessage("Debe introducir un correo electrónico valido."),
    body("password")
        .notEmpty()
        .withMessage("Debe introducir una contraseña.")
        .bail()
        .isLength({ min: 6 })
        .withMessage("La contraseña debe tener como mínimo 6 caracteres.")
        .bail()
        .custom((password, { req }) => {
            if (password != req.body.confirmPassword) {
                console.log(req.body.confirmPassword);
                throw new Error("Las contraseñas no coinciden.");
            }
            return true;
        }),
    body("confirmPassword")
        .notEmpty()
        .withMessage("Debe introducir la confirmación de la contraseña")
        .bail()
        .custom((confirmPassword, { req }) => {
            if (confirmPassword != req.body.password) {
                console.log(req.body.password);
                throw new Error("Las contraseñas no coinciden.");
            }
            return true;
        }),
];
