import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    publicId: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 6,
      unique: true,
    },

    message: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 500,
      trim: true,
    },

    expiresAt: {
      type: Date,
      required: true,
    },
  },

  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
