import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    hash_id: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    score: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("user", UserSchema);
