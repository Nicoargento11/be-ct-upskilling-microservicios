module.exports = {
  list: async () => {
    const films = await fetch("http://database:8004/Film")
      .then((response) => response.json())
      .then((data) => data);

    return films;
  },
  create: async () => {
    throw Error("Hay un error al momento de ingresar la pelicula");
  },
};
