const weatherModel = require("../models/weather");

class weatherControllers {
  static async weather(req, res) {
    try {
      const { latitude, longitude } = req.query;

      correctParams(latitude, longitude);

      const temperature = await weatherModel.weather(latitude, longitude);

      res.status(200).json({
        Temperature: temperature,
      });
    } catch (error) {
      if (error.message === "missing Params") {
        return res.status(400).json({
          error: "The parameters: latitude and longitude are required.",
        });
      } else if (error.message === "must be Numbers") {
        return res.status(400).json({
          error: "The parameters: latitude and longitude must be Numbers",
        });
      } else {
        return res.status(400).json({ error: error.message });
      }
    }
  }
}
function correctParams(latitude, longitude) {
  if (!latitude || !longitude) {
    throw new Error("missing Params");
  }
  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);
  if (isNaN(lat) || isNaN(lon)) {
    throw new Error("must be Numbers");
  }
  return;
}

module.exports = weatherControllers;
