const express = require("express");
const weatherControllers = require("../controllers/weather");
const router = express.Router();

router.get("/", weatherControllers.weather);

module.exports = router;
