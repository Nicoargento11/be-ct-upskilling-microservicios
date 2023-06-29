const Films = require("../data/index");

module.exports = async (req, res) => {
  const films = await Films.list();
  res.status(200).json(films);
};
