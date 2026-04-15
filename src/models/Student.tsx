import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ClassModel",
      required: true,
    },

    // 🔥 store display value also (ERP best practice)
    // className: {
    //   type: String,
    //   required: true,
    // },

    // section: {
    //   type: String,
    //   required: true,
    // },

    admissionNo: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    rollNo: {
      type: String,
      required: true,
    },

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },

    gender: { type: String, required: true },
    dob: { type: Date, required: true },

    bloodGroup: String,
    religion: String,
    category: String,
    aadhaar: String,

    academicYear: {
      type: String,
      index: true,
    },

    house: String,
    admissionDate: Date,

    mobile: String,
    email: String,

    address: String,
    city: String,
    state: String,
    pincode: String,

    fatherName: String,
    motherName: String,
    guardianName: String,
    parentMobile: String,
    occupation: String,

    medicalCondition: String,
    allergies: String,
    emergencyContact: String,
    transportRequired: String,

    notes: String,

    // ✅ SaaS way (use URL, not buffer)
    photo: {
      data: { type: Buffer, required: true },
      imageType: { type: String, required: true },
      name: { type: String },
    },

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Student =
  mongoose.models.Student || mongoose.model("Student", StudentSchema);
