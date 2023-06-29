const { Router } = require("express");
const characters = require("./characters");

const router = Router();

router.get("/", characters);
router.post("/", characters);

module.exports = router;
