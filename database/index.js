const server = require("./src/database/server");

const { Character, Film, Planet } = require("./src/database/index");

Planet.list().then((res) => console.log(res[0]));

const PORT = 8004;

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
