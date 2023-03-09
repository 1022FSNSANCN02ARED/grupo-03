const { Router } = require("express");
const router = Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/images/avatars"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const uploadFile = multer({ storage });

const usersController = require("../controllers/usersController");
const error_register = require("../middlewares/error_register");
const registerMiddleware = require("../middlewares/registerMiddleware");

router.get("/register", usersController.showRegister);
router.post(
    "/register",
    uploadFile.single("file"),
    [registerMiddleware, error_register],
    usersController.create
);

router.get("/login", usersController.showLogin);

router.get("/edit", usersController.showEdit);
router.put("/edit/:id", usersController.edit);

module.exports = router;
