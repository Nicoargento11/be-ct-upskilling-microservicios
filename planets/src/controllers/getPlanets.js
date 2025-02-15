const Planets = require("../data/index");
const { response } = require("../utils/index");

module.exports = async (req, res) => {
  const planets = await Planets.list();
  response(res, 200, planets);
};
