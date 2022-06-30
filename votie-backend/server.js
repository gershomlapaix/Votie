const app = require("./app");
const mongoose = require("mongoose");

// database connection

mongoose
  .connect("mongodb://localhost:27017/votie", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully...");
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is up and runnning");
});
