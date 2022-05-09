const jwt = require("jsonwebtoken");

exports.generateToken = function (payload) {
  return jwt.sign({ id: payload }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });
};
