// app/api/enquiry/update/route.ts

import { connectDb } from "@/app/lib/db";
import Enquiry from "@/models/Enquiry";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {

    await connectDb();

    const body = await req.json();

    const { enquiryId, comment } = body;

    // ✅ VALIDATION

    if (!enquiryId) {
      return NextResponse.json({
        success: false,
        message: "Enquiry Id is required",
      });
    }

    // ✅ FIND & UPDATE

    const updatedEnquiry = await Enquiry.findByIdAndUpdate(
      enquiryId,
      {
        comment,
        status: "completed", // optional
      },
      {
        new: true,
      }
    );

    // ✅ NOT FOUND

    if (!updatedEnquiry) {
      return NextResponse.json({
        success: false,
        message: "Enquiry not found",
      });
    }

    // ✅ SUCCESS

    return NextResponse.json({
      success: true,
      message: "Enquiry updated successfully",
      data: updatedEnquiry,
    });

  } catch (error: any) {

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}