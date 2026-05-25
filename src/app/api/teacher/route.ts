// app/api/admin/teacher/add-teacher/route.ts

import { connectDb } from "@/app/lib/db";
import resizeImage from "@/app/lib/imageresize";
import { ClassTeacher } from "@/models/ClassTeacher";
import { Teacher } from "@/models/Teacher";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDb();

    const formData = await req.formData();

    const role = formData.get("role") as string;

    const userId = formData.get("userId") as string;

    const firstName = formData.get("firstName") as string;

    const lastName = formData.get("lastName") as string;

    const gender = formData.get("gender") as string;

    const classId = formData.get("classId") as string;

    const dob = formData.get("dob") as string;

    const subject = formData.get("subject") as string;

    const qualification = formData.get("qualification") as string;

    const exp = Number(formData.get("exp"));

    const doj = formData.get("doj") as string;

    const mobile = formData.get("mobile") as string;

    const address = formData.get("address") as string;

    const adhaar = Number(formData.get("adhaar"));
    const photo = formData.get("photo") as File | null;
    if (!photo) {
      return NextResponse.json(
        {
          success: false,
          message: "Photo is required",
        },
        { status: 400 },
      );
    }
    /* =========================
       Validation
    ========================= */

    if (!userId || !firstName || !role) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields are missing",
        },
        { status: 400 },
      );
    }
    const bufferPhoto = Buffer.from(await photo.arrayBuffer());
    const optimized = await resizeImage(bufferPhoto);

    /* =========================
       Class Teacher
    ========================= */

    if (role === "class_teacher") {
      if (!classId) {
        return NextResponse.json(
          {
            success: false,
            message: "Class ID is required",
          },
          { status: 400 },
        );
      }

      const existingTeacher = await ClassTeacher.findOne({ userId });

      if (existingTeacher) {
        return NextResponse.json(
          {
            success: false,
            message: "Class Teacher already exists",
          },
          { status: 400 },
        );
      }

      const classTeacher = await ClassTeacher.create({
        userId,
        firstName,
        lastName,
        gender,
        classId,
        dob,
        subject,
        qualification,
        exp,
        doj,
        mobile,
        address,
        adhaar,
        photo: {
          data: bufferPhoto,
          imageType: photo.type,
          name: photo.name,
        },
      });

      return NextResponse.json(
        {
          success: true,
          message: "Class Teacher Added Successfully",
          teacher: classTeacher,
        },
        { status: 201 },
      );
    }

    /* =========================
       Normal Teacher
    ========================= */

    const existingTeacher = await Teacher.findOne({ userId });

    if (existingTeacher) {
      return NextResponse.json(
        {
          success: false,
          message: "Teacher already exists",
        },
        { status: 400 },
      );
    }

    const teacher = await Teacher.create({
      userId,
      firstName,
      lastName,
      gender,
      dob,
      subject,
      qualification,
      exp,
      doj,
      mobile,
      address,
      adhaar,
      photo: {
        data: bufferPhoto,
        imageType: photo.type,
        name: photo.name,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Teacher Added Successfully",
        teacher,
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Internal Server Error",
      },
      { status: 500 },
    );
  }
}
