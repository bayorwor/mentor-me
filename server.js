require("dotenv").config();
const express = require("express");
require("colors");
const app = express();
const { connectDB } = require("./configs/db");

//routes
const { mentorsRouter } = require("./routes/mentor.routes");
const { usersRoute } = require("./routes/user.routes");

connectDB();

app.use(express.json());
app.use("/api/v1/mentors", mentorsRouter);
app.use("/api/v1/users", usersRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`.rainbow);
});
