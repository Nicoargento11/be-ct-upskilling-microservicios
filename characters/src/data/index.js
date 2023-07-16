module.exports = {
  list: async () => {
    const character = await fetch("http://database:8004/Character")
      .then((response) => response.json())
      .then((data) => data);

    return character;
  },
  create: async () => {
    throw Error("Hay un error al momento de crear el personajes");
  },
};
