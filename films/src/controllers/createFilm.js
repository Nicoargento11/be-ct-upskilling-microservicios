const Film = require("../data");
const { response } = require("../utils");

module.exports = async () => {
  const newFilm = await Film.create();
  response(res, 201, newFilm);
};
