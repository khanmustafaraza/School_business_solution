// import "@/models/Class";

import { NextResponse } from "next/server";
import { Student } from "@/models/Student";
import { connectDb } from "@/app/lib/db";
import resizeImage from "@/app/lib/imageresize";
import mongoose from "mongoose";
import ClassModel from "@/models/Class";

/* ================= POST ================= */

export async function POST(req: Request) {
  try {
    await connectDb();

    const formData = await req.formData();

    const photoFile = formData.get("photo") as File | null;

    if (!photoFile) {
      return NextResponse.json(
        {
          success: false,
          message: "Photo is required",
        },
        { status: 400 },
      );
    }

    /* ================= VALIDATE USER ID ================= */

    const userId = formData.get("userId") as string;

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid User ID",
        },
        { status: 400 },
      );
    }
    const exsistUserId = await Student.findOne({ userId: userId });
    if (exsistUserId) {
      return NextResponse.json({
        success: false,
        message: "Profile is Already Created",
      });
    }

    /* ================= IMAGE ================= */

    const photoBuffer = Buffer.from(await photoFile.arrayBuffer());

    const optimized = await resizeImage(photoBuffer);

    /* ================= STUDENT DATA ================= */

    const studentData = {
      srNo: formData.get("srNo"),

      session: formData.get("session"),

      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),

      gender: formData.get("gender"),

      dob: formData.get("dob"),
      dobInWords: formData.get("dobInWords"),
      age: formData.get("age"),

      bloodGroup: formData.get("bloodGroup"),
      religion: formData.get("religion"),
      casteCategory: formData.get("casteCategory"),

      motherName: formData.get("motherName"),
      fatherName: formData.get("fatherName"),

      motherNationality: formData.get("motherNationality"),
      fatherNationality: formData.get("fatherNationality"),

      fatherOccupation: formData.get("fatherOccupation"),
      motherOccupation: formData.get("motherOccupation"),

      motherMobileNumber: formData.get("motherMobileNumber"),

      fatherMobileNumber: formData.get("fatherMobileNumber"),

      motherPermanentAddress: formData.get("motherPermanentAddress"),

      fatherPermanentAddress: formData.get("fatherPermanentAddress"),

      officeAddress: formData.get("officeAddress"),

      annualIncome: formData.get("annualIncome"),

      localGurdianName: formData.get("localGurdianName"),

      localGurdianAddress: formData.get("localGurdianAddress"),

      lastSchoolName: formData.get("lastSchoolName"),

      lastSchoolAddress: formData.get("lastSchoolAddress"),

      isCbse: formData.get("isCbse"),

      otherBoard: formData.get("otherBoard"),

      lastResult: formData.get("lastResult"),

      percentage: formData.get("percentage"),

      motherTongue: formData.get("motherTongue"),

      homeTown: formData.get("homeTown"),

      classId: formData.get("classId"),

      userId,

      notes: formData.get("notes"),

      isActive: true,

      /* ================= PHOTO ================= */

      photo: {
        data: optimized.buffer,
        imageType: optimized.type,
        name: photoFile.name,
      },
    };
    console.log(formData.get("userId"));

    const newStudent = await Student.create(studentData);

    return NextResponse.json(
      {
        success: true,
        message: "Student created successfully",
        data: newStudent,
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("POST STUDENT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Internal Server Error",
      },
      { status: 500 },
    );
  }
}

/* ================= GET ALL STUDENTS ================= */

export async function GET() {
  try {
    await connectDb();

    const students = await Student.find()
      .select("-photo")
      .sort({ createdAt: -1 })
      .populate("classId");

    return NextResponse.json(
      {
        success: true,
        count: students.length,
        data: students,
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("GET STUDENTS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to fetch students",
      },
      { status: 500 },
    );
  }
}
