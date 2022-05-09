const { Mentor } = require("../models/mentors/mentors.model");

//add a mentor
//@route POST api/mentors
//@desc add a mentor

exports.addMentor = async (req, res) => {
  const mentor = await Mentor.create(req.body);
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
  const mentors = await Mentor.find();
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
