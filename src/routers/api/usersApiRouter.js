const { Router } = require("express");
const usersApiControllers = require("../../controllers/api/usersApiControllers");

const router = Router();

router.get("/", usersApiControllers.findUsers);
router.get("/detail/:id", usersApiControllers.findUser);

router.get("/tickets/:id", usersApiControllers.findTickets);
router.get("/rents/:id", usersApiControllers.findRents);

module.exports = router;
