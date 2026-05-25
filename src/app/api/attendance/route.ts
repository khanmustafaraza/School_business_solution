import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Attendance from "@/models/Attendance";
import { connectDb } from "@/app/lib/db";

export const POST = async (req: Request) => {
  await connectDb();
  try {
    const body = await req.json();
    console.log(body);

    const { classId, date, attendance } = body;

    // basic validation
    if (!classId || !date || !attendance) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    // normalize date (important for unique index by day)
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);

    // ensure valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(classId)) {
      return NextResponse.json({ message: "Invalid classId" }, { status: 400 });
    }

    // format attendance safely
    const formattedAttendance = attendance.map((a: any) => ({
      studentId: a.studentId,
      status: a.status,
    }));

    // upsert (insert or update if already exists for same class + date)
    const result = await Attendance.findOneAndUpdate(
      {
        classId,
        date: normalizedDate,
      },
      {
        classId,
        date: normalizedDate,
        attendance: formattedAttendance,
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      },
    );

    return NextResponse.json(
      {
        message: "Attendance saved successfully",
        data: result,
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Attendance POST error:", error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error.message,
      },
      { status: 500 },
    );
  }
};

export const GET = async (req: Request) => {
  await connectDb();

  try {
    const { searchParams } = new URL(req.url);

    const classId = searchParams.get("classId");
    const date = searchParams.get("date");

    // validation
    if (!classId || !date) {
      return NextResponse.json(
        { message: "classId and date are required" },
        { status: 400 },
      );
    }

    if (!mongoose.Types.ObjectId.isValid(classId)) {
      return NextResponse.json({ message: "Invalid classId" }, { status: 400 });
    }

    // normalize date (same logic as POST)
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);

    const record = await Attendance.findOne({
      classId,
      date: normalizedDate,
    })
      .populate("attendance.studentId", "name rollNo") // optional
      .populate("classId", "name"); // optional

    if (!record) {
      return NextResponse.json(
        { message: "No attendance found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        message: "Attendance fetched successfully",
        data: record,
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Attendance GET error:", error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error.message,
      },
      { status: 500 },
    );
  }
};
