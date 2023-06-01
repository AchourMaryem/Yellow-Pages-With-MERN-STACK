import mongoose from "mongoose";

const cafeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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

  },
  { timestamps: true }
);

export default mongoose.model("Cafe", cafeSchema);
