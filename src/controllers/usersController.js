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
        // serv.editData("users.json", req.params.id, user);
        res.redirect("/");
    },

    /** Login del usuario 
    proccesLogin: async (req,res) => {
        const userLog=users.findOne({where:{email:req,res}})

        // Se verifica que el email ingresado exista en nuestra base de datos 

       if(!userLog){
           res.render("login",{errors:{
          return res.render("login",{errors:{
               email:{msg:"Credenciales inválidas"}},registro: registro})               
       }else{


        //Si el email existe se verifica el password

       if(!bscryptjs.compareSync(req.body.password,userLog.password)){
          res.render("login",{errors:{
               email:{msg:"Credenciales inválidas"}},registro: registro})
           }
       }
       delete userLog.password;
       req.session.userLog=userLog;
       res.redirect("/");

}, **/
};
