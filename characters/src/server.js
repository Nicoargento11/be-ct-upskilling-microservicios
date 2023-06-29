const express = require("express");
const morgan = require("morgan");
const { ClientError } = require("./utils/errors");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/", require("./routes"));

server.use("*", (req, res) => {
  throw new ClientError("Not Found", 401);
});

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
