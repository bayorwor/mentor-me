const router = require("express").Router();

const {
  registerUser,
  loginUser,
  updateUser,
} = require("../controllers/users.controller");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.patch("/:id", updateUser);

exports.usersRoute = router;
