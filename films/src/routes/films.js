const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares/index");

const filmRouter = Router();

filmRouter.get("/", controllers.getCharacters);
filmRouter.post(
  "/",
  middlewares.characterValidation,
  controllers.createCharacter
);

module.exports = filmRouter;
