const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const messages = require("./data");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello World"));

app.get("/messages", (req, res) => res.send(messages));

module.exports = app;
