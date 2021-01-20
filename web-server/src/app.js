const path = require("path");
const express = require("express");

const app = express();
const PORT = 3000;
const STATIC_PATH = path.join(__dirname, "../public");

app.use(express.static(STATIC_PATH));

app.get("/weather", (req, res) => {
  res.send("Weather page");
});

app.listen(PORT, () => {
  console.log("Server started on port ", PORT);
});
