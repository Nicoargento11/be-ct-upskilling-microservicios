const { Router } = require("express");
const films = require("./films");

const router = Router();

router.get("/", films);
router.post("/", films);

module.exports = router;
