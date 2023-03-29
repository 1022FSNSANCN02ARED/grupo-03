const serv = require("../data/serv");
const bcryptjs = require("bcryptjs");

module.exports = {
    showLogin: (req, res) => {
        res.render("login");
    },
    showRegister: (req, res) => {
        res.render("register");
    },
    create: (req, res) => {
        let user = {
            id: Date.now(),
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
        };

        if (req.file) {
            user.file = req.file.filename;
        } else {
            user.file = "usuarioDefault.jpg";
        }
        
        serv.uploadData("users.json", user);
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
