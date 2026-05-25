// app/api/class-teacher/view-students/route.ts

import { NextRequest, NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";



import User from "@/models/User";
import { connectDb } from "@/app/lib/db";
import { ClassTeacher } from "@/models/ClassTeacher";
import { Student } from "@/models/Student";


export async function GET(req: NextRequest) {
  try {
    await connectDb();

    /* =========================
       GET TOKEN
    ========================= */

    const token: any = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    /* =========================
       GET USER
    ========================= */

    const user = await User.findById(
      token.id
    );

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    /* =========================
       CHECK ROLE
    ========================= */

    if (user.role !== "class_teacher") {
      return NextResponse.json(
        {
          success: false,
          message:
            "Only class teacher can access",
        },
        { status: 403 }
      );
    }

    /* =========================
       FIND CLASS TEACHER
    ========================= */

    const classTeacher =
      await ClassTeacher.findOne({
        userId: user._id,
      });

    if (!classTeacher) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Class teacher not found",
        },
        { status: 404 }
      );
    }

    /* =========================
       FIND STUDENTS
    ========================= */

    const students = await Student.find({
      classId: classTeacher.classId,
    });

    return NextResponse.json(
      {
        success: true,
        students,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error.message ||
          "Internal Server Error",
      },
      { status: 500 }
    );
  }
}