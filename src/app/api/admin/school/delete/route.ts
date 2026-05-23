import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/app/lib/db";
import School from "@/models/School";

export const POST = async (req: NextRequest) => {
  try {
    // Connect to the database
    await connectDb();
    const { deleteId } = await req.json();

    // Create school
    await School.findByIdAndDelete({ _id: deleteId });
    return NextResponse.json({
      success: true,
      message: "School deleted Successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to delete school" },
      { status: 500 },
    );
  }
};
