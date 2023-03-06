const { Router } = require("express");
const router = Router();

const productController = require("../controllers/productController");
const createCottageMiddleware = require("../middlewares/createCottageMiddleware");
const error_create_cot = require("../middlewares/error_create_cot");

router.get("/details/:id", productController.productDetail);
router.get("/cart", productController.productCart);

router.get("/create", productController.showCreateForm);
router.post(
    "/create",
    createCottageMiddleware,
    error_create_cot,
    productController.create
);

module.exports = router;
