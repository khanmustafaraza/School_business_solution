import { connectDb } from "@/app/lib/db";
import ClassModel from "@/models/Class";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDb();

    const { name, section, no, updateId } = await req.json();

    // console.log(await req.json())

    if (!name || !section || !no) {
      return NextResponse.json({
        success: false,
        msg: "All fields are required",
      });
    }
     const existClass = await ClassModel.findOne({ name, section,no });
    
        if (existClass) {
          return NextResponse.json({
            success: false,
            message: "Class with this section already exists!",
          });
        }

    const updateClass = await ClassModel.findByIdAndUpdate(
      { _id: updateId },
      {
        name,
        section,
        no,
      },
      {
        new: true,
      },
    );

    if (updateClass) {
      return NextResponse.json({
        success: true,
        message: "Class  Updated Successfully",
      });
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
};
