import { NextResponse } from "next/server";
import { Student } from "@/models/Student";
import { connectDb } from "@/app/lib/db";
import resizeImage from "@/app/lib/imageresize";
import mongoose from "mongoose";

export async function POST(req: Request) {
  try {
    await connectDb();

    const formData = await req.formData();

    const updateId = formData.get("updateId") as string | null;

    const photoFile = formData.get("photo") as File | null;

    let optimizedPhoto: any = null;

    /* ================= PHOTO SAFE CHECK ================= */
    if (photoFile && photoFile.size > 0) {
      const buffer = Buffer.from(await photoFile.arrayBuffer());
      const optimized = await resizeImage(buffer);

      optimizedPhoto = {
        data: optimized.buffer,
        imageType: optimized.type,
        name: photoFile.name,
      };
    }

    /* ================= BASE DATA ================= */
    const studentData: any = {
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
      notes: formData.get("notes"),
      isActive: true,
    };

    /* ================= CLASS ID FIX ================= */
    const classId = formData.get("classId");
    if (classId) {
      studentData.classId = new mongoose.Types.ObjectId(String(classId));
    }

    /* ================= PHOTO ATTACH ================= */
    if (optimizedPhoto) {
      studentData.photo = optimizedPhoto;
    }

    /* ================= UPDATE ================= */
    if (updateId) {
      const updatedStudent = await Student.findByIdAndUpdate(
        updateId,
        { $set: studentData },
        { new: true }
      );

      if (!updatedStudent) {
        return NextResponse.json(
          {
            success: false,
            message: "Student not found",
          },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Student updated successfully",
        data: updatedStudent,
      });
    }

    /* ================= CREATE ================= */
    const newStudent = await Student.create({
      ...studentData,
      userId: formData.get("userId"),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Student created successfully",
        data: newStudent,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("STUDENT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}