import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Student } from "@/models/Student";
import { connectDb } from "@/app/lib/db";
export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    await connectDb();

    const { id } = await params;
    console.log(id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid ID" },
        { status: 400 },
      );
    }

    const student = await Student.findById({ _id: id }).select("photo");

    if (!student || !student.photo?.data) {
      return NextResponse.json(
        { success: false, message: "Image not found" },
        { status: 404 },
      );
    }

    return new NextResponse(student.photo.data, {
      status: 200,
      headers: {
        "Content-Type": student.photo.imageType, // image/jpeg
        "Cache-Control": "public, max-age=31536000",
      },
    });
  } catch (error: any) {
    console.error("GET PHOTO ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to load image",
      },
      { status: 500 },
    );
  }
}
