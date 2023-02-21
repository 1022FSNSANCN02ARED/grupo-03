const { Router } = require("express");
const router = Router();

const productController = require("../controllers/productController");

router.get("/details/:id", productController.productDetail);
router.get("/cart", productController.productCart);

router.get("/create", productController.showCreateForm);
router.post("/create", productController.create);

module.exports = router;
