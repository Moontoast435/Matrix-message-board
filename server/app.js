const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const messages = require("./data");
const path = require("path");
const msgRoutes = require("./controllers/routes");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(cors("*"));
app.use("/messages", msgRoutes);
app.use(bodyParser.json());

module.exports = app;
