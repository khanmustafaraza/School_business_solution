// app/api/enquiry/update/route.ts

import { connectDb } from "@/app/lib/db";
import Enquiry from "@/models/Enquiry";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDb();

    const body = await req.json();

    const { deleteId } = body;

    // ✅ VALIDATION

    if (!deleteId) {
      return NextResponse.json({
        success: false,
        message: " Id is required",
      });
    }

    // ✅ FIND & UPDATE

    const deleteEnquiry = await Enquiry.findByIdAndDelete(deleteId);

    // ✅ NOT FOUND

    if (!deleteEnquiry) {
      return NextResponse.json({
        success: false,
        message: "Enquiry not found",
      });
    }

    // ✅ SUCCESS

    return NextResponse.json({
      success: true,
      message: "Enquiry deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
