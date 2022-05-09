const { Router } = require("express");
const { protect } = require("../middlewares/auth.middleware");

const {
  addMentor,
  getAllMentors,
  getMentor,
  updateMentor,
} = require("../controllers/mentors.controller");

const router = Router();

router.route("/").post(protect, addMentor).get(getAllMentors);
router.route("/:id").get(getMentor).patch(protect, updateMentor);

exports.mentorsRouter = router;
