const app = require("./app");
const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server online at http://localhost:${port}`)
);
