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
const error_product_edit_form = require("../middlewares/error_product_edit_form");

router.get("/details/:id", cottagesController.productDetail);

router.post(
    "/create",
    uploadFile.array("cottage_images"),
    createCottageMiddleware,
    error_product_form,
    cottagesController.create
);

router.get("/edit/:id", cottagesController.showEditForm);
router.put(
    "/edit/:id",
    uploadFile.array("cottage_images"),
    createCottageMiddleware,
    error_product_edit_form,
    cottagesController.update
);

router.get("/delete/:id", cottagesController.showDeleteOption);
router.delete("/delete/:id", cottagesController.delete);

module.exports = router;
