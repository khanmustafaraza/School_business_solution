import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/, // basic validation
    },
    addmissionClass: {
      type: String,
      required: true,
    },
    comment: {
      type: String
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "completed"]
    }
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

// ✅ Prevent model overwrite in Next.js
const Enquiry =
  mongoose.models.Enquiry || mongoose.model("Enquiry", EnquirySchema);

export default Enquiry;