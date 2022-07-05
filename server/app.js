const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const messages = require("./data");

const msgRoutes = require("../server/controllers/routes");

app.use("/messages", msgRoutes);
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello World"));

module.exports = app;
//
