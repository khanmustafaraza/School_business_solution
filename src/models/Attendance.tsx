import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Class",
    },

    date: {
      type: Date,
      required: true,
    },

    attendance: [
      {
        studentId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Student",
        },
        status: {
          type: String,
          enum: ["Present", "Absent", "Leave"],
          required: true,
        },
      },
    ],
  },
  { timestamps: true },
);

// one attendance per class per day
attendanceSchema.index({ classId: 1, date: 1 }, { unique: true });

// ✅ FIXED EXPORT
const Attendance =
  mongoose.models.Attendance || mongoose.model("Attendance", attendanceSchema);

export default Attendance;
