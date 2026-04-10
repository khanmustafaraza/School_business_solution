import { connectDb } from "@/app/lib/db";
import ClassModel from "@/models/Class";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDb();

    const { name, section, no } = await req.json();
    // console.log(await req.json())

    if (!name || !section || !no) {
      return NextResponse.json({
        success: false,
        msg: "All fields are required",
      });
    }

    const existClass = await ClassModel.findOne({ name, section });

    if (existClass) {
      return NextResponse.json({
        success: false,
        msg: "Class with this section already exists!",
      });
    }

    const savedClass = await ClassModel.create({
      name,
      section,
      no,
    });

    return NextResponse.json({
      success: true,
      msg: "Class added successfully!",
      data: savedClass,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      msg: "Server error",
    });
  }
};

export const GET = async (req: Request) => {
  try {
    await connectDb();

    const classes = await ClassModel.find();

    return NextResponse.json({
      success: true,
      data: classes,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      msg: "Server error",
    });
  }
};