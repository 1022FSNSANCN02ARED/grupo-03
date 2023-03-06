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

const productController = require("../controllers/productController");
const createCottageMiddleware = require("../middlewares/createCottageMiddleware");
const error_create_cot = require("../middlewares/error_create_cot");

router.get("/details/:id", productController.productDetail);
router.get("/cart", productController.productCart);

router.get("/create", productController.showCreateForm);
router.post(
    "/create",
    uploadFile.array("image"),
    createCottageMiddleware,
    error_create_cot,
    productController.create
);

router.get("/edit/:id", productController.showEditForm);
router.put("/edit/:id", productController.update);

router.get("/delete/:id", productController.showDeleteOption);
router.delete("/delete/:id", productController.delete);

module.exports = router;
