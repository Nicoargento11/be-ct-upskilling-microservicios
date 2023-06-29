const { Router } = require("express");
const controllers = require("../controllers/index");

const characterRouter = Router();

characterRouter.get("/", controllers.getCharacters);

module.exports = characterRouter;
