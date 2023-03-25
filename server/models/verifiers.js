import mongoose from "mongoose";

const VerifierSchema = new mongoose.Schema(
    {
        hash_id: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
        name : {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

export const Verifier = mongoose.model("verifier", VerifierSchema);