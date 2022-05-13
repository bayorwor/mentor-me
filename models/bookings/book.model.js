const { model, Schema } = require("mongoose");

const Book = model(
  "Book",
  new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    bookings: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
        time: { type: Date, required: true },
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Mentor",
        },
      },
    ],
    total: { type: Number, required: true },
    status: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  })
);

module.exports = Book;
