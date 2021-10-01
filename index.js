const express = require("express");

const app = express();
const apiRouter = require("./routes/api");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./db");

app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("levantado.");
});
