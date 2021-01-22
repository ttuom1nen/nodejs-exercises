const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

const PORT = 3000;

// Define paths for Express config
const STATIC_PATH = path.join(__dirname, "../public");
const VIEWS_PATH = path.join(__dirname, "../templates/views");
const PARTIALS_PATH = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", VIEWS_PATH);
hbs.registerPartials(PARTIALS_PATH);

// Set static directory to serve
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

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Help article not found!",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }

  res.send({ address: req.query.address });
});

// Query string param example /products?search=
app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  res.send({
    products: [],
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Page not found!",
  });
});

app.listen(PORT, () => {
  console.log("Server started on port ", PORT);
});
