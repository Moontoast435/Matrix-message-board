const app = require("./app");
const PORT = process.env.PORT || 5000;
const path = require("path");



app.listen(PORT, () =>
  console.log(`Server online at http://localhost:${PORT}`)
);
