const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  res_idents: [{ type: String, ref: "characters" }],
  films: [{ type: String, ref: "films" }],
});

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("res_idents", ["_id", "name", "gender"])
    .populate("films", ["_id", "title", "directos"]);
};

planetSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("res_idents", ["_id", "name", "gender"])
    .populate("films", ["_id", "title", "directos"]);
};

planetSchema.statics.insert = async function (planet) {
  return await this.create(planet);
};

module.exports = planetSchema;
