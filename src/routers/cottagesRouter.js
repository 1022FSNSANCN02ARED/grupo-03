const { Router } = require("express");
const multer = require("multer");
const router = Router();
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/cottageImages"));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_img_cottage${path.extname(file.originalname)}`);
    },
});
const uploadFile = multer({ storage });

const createCottageMiddleware = require("../middlewares/createCottageMiddleware");
const redirectUserLoggedOut = require("../middlewares/redirectUserLoggedOut");
const cottagesController = require("../controllers/cottagesController");
const error_product_form = require("../middlewares/error_product_form");

router.get("/details/:id", cottagesController.productDetail);

// Falta poner el middleware de "redirectUserLoggedOut"
// no esta colocado, para poder verlo y modificarlo sin tener que iniciar sesíon.
router.get("/cart", cottagesController.productCart);

router.get("/create", cottagesController.showCreateForm);
router.post(
    "/create",
    uploadFile.array("image"),
    createCottageMiddleware,
    error_product_form,
    cottagesController.create
);

router.get("/edit/:id", cottagesController.showEditForm);
router.put("/edit/:id", cottagesController.update);

router.get("/delete/:id", cottagesController.showDeleteOption);
router.delete("/delete/:id", cottagesController.delete);

module.exports = router;
