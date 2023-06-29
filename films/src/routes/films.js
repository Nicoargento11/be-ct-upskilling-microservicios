const { Router } = require("express");
const controllers = require("../controllers");

const filmRouter = Router();

filmRouter.get("/", controllers.getCharacters);

module.exports = filmRouter;
