const { catchedAsync } = require("../utils/index");
module.exports = {
  getCharacters: catchedAsync(require("./getCharacters")),
  createCharacter: catchedAsync(require("./createCharacter")),
};
