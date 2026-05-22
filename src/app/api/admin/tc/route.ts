// app/api/admin/tc/register/route.ts

import { NextResponse } from "next/server";
import StudentTransferCertifficate from "@/models/StudentTransferCertifficate";
import { connectDb } from "@/app/lib/db";

export async function POST(req: Request) {
  try {
    await connectDb();

    const body = await req.json();

    // 🔥 MAP FRONTEND FIELDS → SCHEMA FIELDS
    const formattedData = {
      ...body,

      dateOfBirth: body.dobFigures ? new Date(body.dobFigures) : undefined,

      dateOfBirthInWords: body.dobWords,
    };
    // ❗ VALIDATION (IMPORTANT)
    const requiredFields = [
      "pupilName",
      "motherName",
      "fatherName",
      "category",
      "dateOfBirth",
      "dateOfBirthInWords",
      "admissionClass",
      "lastStudiedClass",
    ];

    for (const field of requiredFields) {
      if (!formattedData[field as keyof typeof formattedData]) {
        return NextResponse.json(
          {
            success: false,
            message: `${field} is required`,
          },
          { status: 400 },
        );
      }
    }

    // ❗ CREATE IN DB
    const student = await StudentTransferCertifficate.create(formattedData);

    return NextResponse.json(
      {
        success: true,
        message: "Transfer Certificate created successfully",
        data: student,
      },
      { status: 201 },
    );
  } catch (error: unknown) {
    console.error("TC ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 },
    );
  }
}
