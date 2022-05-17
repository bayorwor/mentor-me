require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("colors");
const app = express();
const { connectDB } = require("./configs/db");
const { errorHandler, notFound } = require("./middlewares/error.middleware");

//routes
const { mentorsRouter } = require("./routes/mentor.routes");
const { usersRoute } = require("./routes/user.routes");
const { bookingRouter } = require("./routes/bookings.routes");

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/v1/mentors", mentorsRouter);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/bookings", bookingRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`.rainbow);
});
