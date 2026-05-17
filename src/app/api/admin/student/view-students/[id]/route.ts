import { connectDb } from "@/app/lib/db";
import ClassModel from "@/models/Class";
import { Student } from "@/models/Student";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }: any) => {
  try {

    await connectDb();
    const { id } = await params; 

    // const id = await params.id;
     const classData = await ClassModel.findById(id);

    if (!classData) {
      return NextResponse.json(
        {
          success: false,
          message: "Class not found",
        },
        { status: 404 }
      );
    }


    console.log("ID >>>", id);

    const students = await Student.find({
      classId: id,
    }).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      students,
        classData,
    });

  } catch (error: any) {

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}