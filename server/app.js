const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const messages = require("./data");

const msgRoutes = require("./controllers/routes");

app.use(cors("*"));
app.use("/messages", msgRoutes);
app.use(bodyParser.json());

module.exports = app;
