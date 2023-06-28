const express = require("express");
const router = express.Router();

const { residentdata } = require("../models");

router.post("/", async (req, res) => {
  const posttobody = req.body;
  await residentdata.create(posttobody);
  res.json(posttobody);
});

router.get("/", async (req, res) => {
  const getfromdb = await residentdata.findAll();
  res.json(getfromdb);
});

module.exports = router;
