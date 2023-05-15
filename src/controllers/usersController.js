const bcryptjs = require("bcryptjs");
const db = require("../database/models");
module.exports = {
    showLogin: (req, res) => {
        res.render("login");
    },
    showRegister: (req, res) => {
        res.render("register");
    },
    create: (req, res) => {
        let user = {
            first_name: req.body.name,
            last_name: req.body.surname,
            phone_number: req.body.phone_number,
            email: req.body.email.toLowerCase(),
            password: bcryptjs.hashSync(req.body.password, 10),
        };
        if (req.file) {
            user.avatar = "/images/avatars/" + req.file.filename;
        } else {
            user.avatar = "/images/avatars/usuarioDefault.jpg";
        }

        try {
            db.Users.create(user);
        } catch (error) {
            console.log(error);
        }

        res.redirect("/user/login");
    },
    delete: (req, res) => {
        res.redirect("/");
    },
    showEdit: (req, res) => {
        // en la variable "user" estará guardada la información del usuario que este en línea en ese momento.
        const errores = req.session.errores;
        const oldData = req.session.oldData;
        req.session.errores = null;
        req.session.oldData = null;
        res.render("edit-user", {
            user: req.session.userLog,
            errores,
            oldData,
        });
    },
    edit: (req, res) => {
        let user = {
            ...req.session.userLog,
            first_name: req.body.name,
            last_name: req.body.surname,
            phone_number: req.body.phone_number,
            email: req.body.email.toLowerCase(),
        };
        if (req.file) {
            user.avatar = "/images/avatars/" + req.file.filename;
        } else {
            user.avatar = "/images/avatars/usuarioDefault.jpg";
        }

        try {
            db.Users.update(
                {
                    ...user,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );
            req.session.userLog = user;
        } catch (error) {
            console.log(error);
        }
        res.redirect("/");
    },
    // Login del usuario
    proccesLogin: async (req, res) => {
        try {
            const userLog = await db.Users.findOne({
                where: { email: req.body.email },
                include: ["rol"],
            });

            if (
                userLog &&
                bcryptjs.compareSync(req.body.password, userLog.password)
            ) {
                delete userLog.password;
                req.session.userLog = userLog;

                if (!!req.body.recordame) {
                    // código para que se guarde una cookie
                    res.cookie("userLogInCookie", userLog.email, {
                        maxAge: 7 * 24 * 60 * 60 * 1000,
                    });
                }

                res.redirect("/");
            } else {
                res.render("login", {
                    errors: {
                        email: { msg: "Credenciales inválidas" },
                    },
                });
            }
        } catch (error) {
            console.log(error);
        }
    },
    showProfile: (req, res) => {
        res.render("user-profile");
    },
    processLogOut: (req, res) => {
        res.clearCookie("userLogInCookie");
        req.session.userLog = null;
        req.session.cottagesInCart = null;
        req.session.activitiesInCart = null;
        res.locals.userLog = null;
        res.redirect("/");
    },
};
