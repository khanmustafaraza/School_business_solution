import mongoose, { Schema, model, models } from "mongoose";

/* =========================
   Teacher Model
========================= */

const TeacherSchema = new Schema(
  {
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
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
      data:Buffer,
      imageType:  String,
      name: String ,
    }
  },
  {
    timestamps: true,
  }
);

export const Teacher =
  models.Teacher || model("Teacher", TeacherSchema);


