// app/api/tc/register/route.js

import { NextResponse } from "next/server";

import StudentTransferCertifficate from "@/models/StudentTransferCertifficate";
import { connectDb } from "@/app/lib/db";

export async function POST(req: any) {
  try {
    await connectDb();

    const body = await req.json();

    const student = await StudentTransferCertifficate.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "TC Registered Successfully",
        data: student,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        // message: error.message,
      },
      { status: 500 },
    );
  }
}
