const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:19006",
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json({ limit: "150mb" }));

// define the routes here
app.use("/users", require("./routes/userRoutes"));
app.use("/vote", require("./routes/choiceRoutes"));
module.exports = app;
