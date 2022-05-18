const { model, Schema } = require("mongoose");

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    profile: { type: String },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

exports.Mentor = model(
  "Mentor",
  new Schema({
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },

    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    yearsOfExperience: {
      type: Number,
      required: true,
    },
    skills: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
  })
);
