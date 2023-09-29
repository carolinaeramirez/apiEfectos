const express = require("express");
// const bodyParser= require('body-parser');
let server = express();
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,HEAD, OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
const cors = require("cors");
const app = express();
app.use(cors());

const apiRouter = require("./routes/api");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./db");

app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("levantado.");
});
