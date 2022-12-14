const express = require("express");
const app = express();
const { sayHello, request } = require("./controller");
const port = 3000;

app.use(express.json());

app.get("/", sayHello);
app.get(`/api`, request);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server listening on port ${port}`);
});
