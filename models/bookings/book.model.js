const { model, Schema } = require("mongoose");

const Book = model(
  "Book",
  new Schema(
    {
      user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      booking: {
        name: { type: String, required: true },
        image: { type: String, required: true },
        time: { type: String, required: true },
        date: { type: String, required: true },
        mentor: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Mentor",
        },
      },
      status: { type: String, required: true, default: "pending" },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Book;
