const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const messages = require("./data");
const path = require("path");
const msgRoutes = require("./controllers/routes");

app.use(cors("*"));

app.use(express.static("./client"));
app.use("/assets", express.static("./client/assets"));
app.use("/imgs", express.static("./client/assets/imgs"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve("./client/index.html"));
});

app.get("/forum", function (req, res) {
  res.sendFile(path.resolve("./client/forum.html"));
});
app.use("/messages", msgRoutes);
app.use(bodyParser.json());

module.exports = app;
