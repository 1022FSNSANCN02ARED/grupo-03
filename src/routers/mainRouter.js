const { Router } = require("express");
const mainController = require("../controllers/mainControllers");
const router = Router();

router.get("/", mainController.home);
router.get("/product", mainController.product);
router.get("/register", mainController.register);
router.get("/productCart", mainController.productCart);
router.get("/login", mainController.login);
router.get("/crear", mainController.crear)

module.exports = router;
