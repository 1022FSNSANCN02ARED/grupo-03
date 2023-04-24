const { body } = require("express-validator");
const { Users } = require("../database/models");

module.exports = [
    body("name").notEmpty().withMessage("Debe introducir un nombre."),
    body("surname").notEmpty().withMessage("Debe introducir un apellido."),
    body("email")
        .isEmail()
        .withMessage("Debe introducir un correo electrónico valido.")
        .bail()
        .custom(async (value, { req }) => {
            const emailExist = await Users.findOne({ where: { email: value } });
            if (!emailExist || value == req.session.userLog.email) {
                return true;
            } else {
                throw new Error("Este email ya existe");
            }
        }),
];
