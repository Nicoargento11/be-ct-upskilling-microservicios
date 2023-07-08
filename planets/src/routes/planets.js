const { Router } = require("express");
const controllers = require("../controllers/index");
const middlewares = require("../middlewares");

const planetRouter = Router();

planetRouter.get("/", controllers.getPlanets);
planetRouter.post("/", middlewares.planetValidation, controllers.createPlanet);

module.exports = planetRouter;
