const { Router } = require("express");
const controllers = require("../controllers/index");
const middleawares = require("../middlewares/index");

const characterRouter = Router();

characterRouter.get("/", controllers.getCharacters);
characterRouter.post(
  "/",
  middleawares.characterValidation,
  controllers.createCharacter
);

module.exports = characterRouter;
