const mongoose = require("mongoose");

const { MONGO_URI } = require("../config/envs");
const characterSchema = require("./schemas/characterSchema");
const filmSchema = require("./schemas/filmSchema");
const planetSchema = require("./schemas/planetSchema");

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
  Character: conn.model("characters", characterSchema),
  Film: conn.model("films", filmSchema),
  Planet: conn.model("planets", planetSchema),
};
