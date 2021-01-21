const path = require("path");
const express = require("express");

const app = express();

const PORT = 3000;
const STATIC_PATH = path.join(__dirname, "../public");
const VIEWS_PATH = path.join(__dirname, "../templates");

app.set("view engine", "hbs");
app.set("views", VIEWS_PATH);
app.use(express.static(STATIC_PATH));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    subtitle: "Subtitle",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    subtitle: "Subtitle",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    subtitle: "Subtitle",
    helpText:
      "log watch her live needed mainly common scene road missing outside bread change courage naturally lay author outer dawn east medicine potatoes front soil",
  });
});

app.get("/weather", (req, res) => {
  res.send("Weather page");
});

app.listen(PORT, () => {
  console.log("Server started on port ", PORT);
});
