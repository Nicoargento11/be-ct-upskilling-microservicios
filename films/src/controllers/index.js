const { catchedAsync } = require("../utils/index");
module.exports = {
  getCharacters: catchedAsync(require("./getFilms")),
  createCharacter: catchedAsync(require("./createFilm")),
};
