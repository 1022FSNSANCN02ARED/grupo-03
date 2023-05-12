const { Router } = require("express");
const router = Router();
const multer = require("multer");
const path = require("path");

// Controlador de usuarios.
const usersController = require("../controllers/usersController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/images/avatars"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const uploadFile = multer({ storage });

// Requiere los middlewares que redireccionan al ususario
// dependiendo si esta conectado o no.
const redirectUserLoggedIn = require("../middlewares/redirectUserLoggedIn");
const redirectUserLoggedOut = require("../middlewares/redirectUserLoggedOut");

// Validador del registro.
const registerMiddleware = require("../middlewares/registerMiddleware");
const error_register = require("../middlewares/error_register");
const error_edit_user = require("../middlewares/error_edit_user");
const editUserMiddleware = require("../middlewares/editUserMiddleware");

// Rutas
router.get("/register", redirectUserLoggedIn, usersController.showRegister);
router.post(
    "/register",
    uploadFile.single("file"),
    [registerMiddleware, error_register],
    usersController.create
);

router.get("/login", redirectUserLoggedIn, usersController.showLogin);
// router.post("/login", redirectUserLoggedIn, usersController.proccesLogin);

router.get("/profile", redirectUserLoggedOut);

router.get("/edit", redirectUserLoggedOut, usersController.showEdit);
router.put(
    "/edit/:id",
    uploadFile.single("file"),
    [redirectUserLoggedOut, editUserMiddleware, error_edit_user],
    usersController.edit
);

module.exports = router;
