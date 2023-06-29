const { Router } = require("express");
const planets = require("./planets");

const router = Router();

router.get("/", planets);

module.exports = router;
