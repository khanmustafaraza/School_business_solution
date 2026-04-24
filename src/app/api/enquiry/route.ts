import { connectDb } from "@/app/lib/db";
import Enquiry from "@/models/Enquiry";
import { NextResponse } from "next/server";

/* ================= CREATE ENQUIRY ================= */
export async function POST(req:Request) {
  try {
    await connectDb();

    const body = await req.json();

    const enquiry = await Enquiry.create(body);

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted",
      data: enquiry,
    });
  } catch (error:any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

/* ================= GET ALL ENQUIRIES ================= */
export async function GET() {
  try {
    await connectDb();

    const enquiries = await Enquiry.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: enquiries,
    });
  } catch (error:any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}