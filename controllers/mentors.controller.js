const { Mentor } = require("../models/mentors/mentors.model");

//add a mentor
//@route POST api/mentors
//@desc add a mentor

exports.addMentor = async (req, res) => {
  const findMentor = await Mentor.findOne({ user: req.user._id });
  if (findMentor) {
    return res.status(400).json({
      success: false,
      error: "Mentor already exists",
    });
  }
  const mentor = await Mentor.create({
    ...req.body,
    user: req.user._id,
    numReviews: 0,
  });
  res.status(201).json({
    success: true,
    data: mentor,
  });
};

//get all mentors
// @route GET /api/v1/mentors
// @desc Get all mentors
// @access Public
exports.getAllMentors = async (req, res) => {
  const keywords = req.query.keywords
    ? {
        $regex: req.query.keywords,
        $options: "i",
      }
    : {};

  const mentors = await Mentor.find({ ...keywords });
  res.status(200).json({
    success: true,
    count: mentors.length,
    data: mentors,
  });
};

//get a mentor
// @route GET /api/v1/mentors/:id
// @desc Get a mentor
// @access Public
exports.getMentor = async (req, res) => {
  const mentor = await Mentor.findById(req.params.id);
  if (!mentor)
    return res.status(404).json({
      success: false,
      error: "Mentor not found",
    });
  res.status(200).json({
    success: true,
    data: mentor,
  });
};

//update a mentor
// @route PATCH /api/v1/mentors/:id
// @desc Update a mentor
// @access Public
exports.updateMentor = async (req, res) => {
  const mentor = await Mentor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!mentor)
    return res.status(404).json({
      success: false,
      error: "Mentor not found",
    });
  res.status(200).json({
    success: true,
    data: mentor,
  });
};

//create a mentor review
// @route PATCH /api/v1/mentors/:id
// @desc Update a mentor
// @access Private

exports.createMentorReview = async (req, res) => {
  const { rating, comment } = req.body;

  const mentor = await Mentor.findById(req.params.id);

  if (mentor) {
    const alreadyReviewed = mentor.reviews.find(
      (r) => r.user.toString() == req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Mentor already reviewed");
    }

    const review = {
      name: req.user.name,
      profile: req.user.profile,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };
    mentor.reviews.push(review);

    mentor.rating =
      mentor.reviews.reduce((acc, item) => item.rating + acc, 0) /
      mentor.reviews.length;

    await mentor.save();
    res.status(201).json({ message: "Review  added" });
  } else {
    res.status(404);
    throw new Error("mentor not found");
  }
};

//GET top rated mentors
// @route GET /api/v1/mentors/top
// @desc Get top rated mentors
// @access Public
exports.getTopRatedMentors = async (req, res) => {
  const mentors = await Mentor.find({}).sort({ rating: -1 }).limit(4);
  res.status(200).json({
    success: true,
    count: mentors.length,
    data: mentors,
  });
};
