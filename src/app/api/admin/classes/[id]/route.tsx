import { connectDb } from "@/app/lib/db";
import ClassModel from "@/models/Class";
import { NextResponse } from "next/server";

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDb();

    const { id } = params;

    const updatedClass = await ClassModel.findByIdAndUpdate(
      {_id:id},
      { isActive: false },
      { new: true }
    );

    if (!updatedClass) {
      return NextResponse.json({
        success: false,
        msg: "Class not found",
      });
    }

    return NextResponse.json({
      success: true,
      msg: "Class updated successfully",
      data: updatedClass,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      msg: "Server error",
    });
  }
};