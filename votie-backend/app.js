const express = require("express");
const path = require("path");
const morgan = require('morgan')
const cors = require('cors')

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("dev"));
app.use(express.json({ limit: "150mb" }));

const whiteList = ["http://localhost:3000"];
app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      if (whiteList.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("not allowed by CORS"));
      }
    },
  })
);

// define the routes here

module.exports = app;
