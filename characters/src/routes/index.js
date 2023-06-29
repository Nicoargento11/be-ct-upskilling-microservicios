const { Router } = require("express");
const characters = require("./characters");

const router = Router();

router.get("/", characters);

module.exports = router;
