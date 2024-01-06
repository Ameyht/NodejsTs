const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Product", {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connection successful");
  })
  .catch((e : string) => {
    console.log("No connection");
  });
