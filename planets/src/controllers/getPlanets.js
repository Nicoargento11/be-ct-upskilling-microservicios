const Planets = require("../data/index");

module.exports = async (req, res) => {
  const planets = await Planets.list();
  res.status(200).json(planets);
};
