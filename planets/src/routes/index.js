const { Router } = require("express");
const planets = require("./planets");

const router = Router();

router.get("/", planets);
router.post("/", planets);

module.exports = router;
