const Booking = require("../models/bookings/book.model");

// create new booking
// @route POST api/v1/bookings
// @desc Create a booking
// @access Public
exports.createBooking = async (req, res) => {
  const { booking } = req.body;

  const book = await Booking.create({
    booking,
    user: req.user._id,
  });
  res.status(201).json({
    success: true,
    data: book,
  });
};

// get all bookings
// @route GET api/v1/bookings
// @desc Get all bookings
// @access Public
exports.getAllBookings = async (req, res) => {
  const bookings = await Booking.find();
  res.status(200).json({
    success: true,
    count: bookings.length,
    data: bookings,
  });
};

//get my bookings
// @route GET api/v1/bookings/me
// @desc Get my bookings
// @access Public
exports.getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate(
    "booking.mentor"
  );
  res.status(200).json({
    success: true,
    count: bookings.length,
    data: bookings,
  });
};

//update booking status
// @route PATCH api/v1/bookings/:id
// @desc Update booking status
// @access Public
exports.updateBookingStatus = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    return res.status(404).json({
      success: false,
      error: "Booking not found",
    });
  }
  const { status } = req.body;
  if (status === "cancelled") {
    booking.status = status;
    await booking.save();
    res.status(200).json({
      success: true,
      data: booking,
    });
  }
  if (status === "completed") {
    booking.status = status;
    await booking.save();
    res.status(200).json({
      success: true,
      data: booking,
    });
  }
  if (status === "pending") {
    booking.status = status;
    await booking.save();
    res.status(200).json({
      success: true,
      data: booking,
    });
  }
};
