const mongoose = require("mongoose");

exports.connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected".cyan);
    })
    .catch((err) => {
      console.log(err);
    });
};
