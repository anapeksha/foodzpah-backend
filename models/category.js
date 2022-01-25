const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 40,
      unique: true
    },
    location: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
    },
    type: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
    },
    opensAt: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
