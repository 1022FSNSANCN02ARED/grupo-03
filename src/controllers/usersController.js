const serv = require("../data/serv");
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
            console.log(db.Users);
        } catch (error) {
            console.log(error);
            serv.uploadData("users.json", user);
        }

        res.redirect("/");
    },
    delete: (req, res) => {
        serv.delete("users.json", req.params.id);
        res.redirect("/");
    },
    showEdit: (req, res) => {
        // en la variable "user" estará guardada la información del usuario que este en línea en ese momento.
        res.render("edit-user", { user: req.session.userLog });
    },
    edit: (req, res) => {
        const user = {
            name: req.body.name,
            surname: req.body.surname,
        };
        serv.editData("users.json", req.params.id, user);
        res.redirect("/");
    },
};
