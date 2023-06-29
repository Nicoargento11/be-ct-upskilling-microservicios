const { Router } = require("express");
const controllers = require("../controllers/index");

const planetRouter = Router();

planetRouter.get("/", controllers.getPlanets);

module.exports = planetRouter;
