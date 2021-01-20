const express = require("express");

const app = express();
const PORT = 3000;

app.get("", (req, res) => {
  res.send("Hello express!");
});

app.get("/help", (req, res) => {
  res.send("Help page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/weather", (req, res) => {
  res.send("weather page");
});

app.listen(PORT, () => {
  console.log("Server started on port ", PORT);
});
