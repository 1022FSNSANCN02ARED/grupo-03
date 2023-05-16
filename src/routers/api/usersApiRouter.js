const { Router } = require("express");
const usersApiControllers = require("../../controllers/api/usersApiControllers");

const router = Router();

router.get("/", usersApiControllers.findUsers);
router.get("/detail/:id", usersApiControllers.findUser);

module.exports = router;
