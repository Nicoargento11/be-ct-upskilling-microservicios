const { Router } = require("express");
const store = require("../database/index");
const { model } = require("mongoose");

const router = Router();

console.log("hola");

router.get("/:model", async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

router.get("/:model/:id", async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
});
module.exports = router;
