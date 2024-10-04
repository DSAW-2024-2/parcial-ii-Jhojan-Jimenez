const express = require("express");
const app = express();
const port = 3000;
const weatherRoute = require("../routes/weather");
const loginRouter = require("../routes/login");
const { cookieJwt } = require("../middlewares/cookieJwt");

app.use(express.json());

app.use("/login", loginRouter);
app.use("/weather", cookieJwt, weatherRoute);
app.use((req, res) => {
  res.status(404).json({ message: "This route doesn't exist" });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app;
