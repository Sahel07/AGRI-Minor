const mongoose = require("mongoose");

const url =
  "mongodb+srv://SG:SG@cluster0.qecw1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => console.log("Error connecting to MongoDB:", err));
};
