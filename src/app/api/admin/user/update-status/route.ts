import { connectDb } from "@/app/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDb();

    const { updateId, status } = await req.json();
    console.log(updateId,status)
    if (status == "true") {
      await User.findByIdAndUpdate(
        {
          _id: updateId,
        },
        {
          isActive: false,
        },
        {
          new: true,
        },
      );
      return NextResponse.json({
        success: true,
        message: "Status Updated  Successfully",
      });
    }
    if (status == "false") {
      await User.findByIdAndUpdate(
        {
          _id: updateId,
        },
        {
          isActive: true,
        },
        {
          new: true,
        },
      );
      return NextResponse.json({
        success: true,
        message: "Status Updated  Successfully",
      });
    }

    // ✅ Create user (default role only)
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, msg: "Server Error" },
      { status: 500 },
    );
  }
};
