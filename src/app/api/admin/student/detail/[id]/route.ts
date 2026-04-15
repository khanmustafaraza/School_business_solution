import { connectDb } from "@/app/lib/db";
import { Student } from "@/models/Student";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import ClassModel from "@/models/Class";
import User from "@/models/User";

export const GET = async (req: Request, { params }: any) => {
  try {
    await connectDb();

    const { id } = await params; // ✅ NO await here

    console.log("Student ID:", id);

    // ✅ Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, msg: "Invalid ID" },
        { status: 400 },
      );
    }

    // ✅ Fetch student
    const student = await Student.findById(id)
      .populate("userId", null, User) // optional (if you use ref)
      .populate("classId", null, ClassModel); // optional

    // ❌ Not found
    if (!student) {
      return NextResponse.json(
        { success: false, msg: "No Student Found" },
        { status: 404 },
      );
    }

    // ✅ Success
    return NextResponse.json({
      success: true,
      msg: "Fetched Successfully",
      data: student,
    });
  } catch (error: any) {
    console.error("GET STUDENT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        msg: error.message || "Server Error",
      },
      { status: 500 },
    );
  }
};
