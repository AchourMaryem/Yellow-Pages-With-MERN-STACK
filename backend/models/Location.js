import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    avgRating: {
      type: String,
      required: true,
    },

    recommended: {
      type: Boolean,
      default: false,
    },

  },
  { timestamps: true }
);

export default mongoose.model("Location", locationSchema);
