import mongoose, { Schema, model, models } from "mongoose";

/* =========================
   Class Teacher Model
========================= */

const ClassTeacherSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    classId: {
      type: Schema.Types.ObjectId,
      ref: "ClassModel",
      required: true,
    },

    dob: {
      type: String,
    },

    subject: {
      type: String,
      trim: true,
    },

    qualification: {
      type: String,
      trim: true,
    },

    exp: {
      type: Number,
      default: 0,
    },

    doj: {
      type: String,
    },

    mobile: {
      type: String,
      trim: true,
    },

    address: {
      type: String,
      trim: true,
    },

    adhaar: {
      type: Number,
    },
    photo: {
      data: Buffer,
      imageType: String,
      name: String,
    },
  },
  {
    timestamps: true,
  },
);

export const ClassTeacher =
  models.ClassTeacher || model("ClassTeacher", ClassTeacherSchema);
