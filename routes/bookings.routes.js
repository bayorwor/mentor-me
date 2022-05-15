const router = require("express").Router();

const { protect } = require("../middlewares/auth.middleware");
const {
  createBooking,
  updateBookingStatus,
  getAllBookings,
  getMyBookings,
} = require("../controllers/bookings.controllers");

router.route("/").post(protect, createBooking).get(protect, getAllBookings);
router.route("/me").get(protect, getMyBookings);
router.route("/:id").patch(protect, updateBookingStatus);

module.exports = {
  bookingRouter: router,
};
