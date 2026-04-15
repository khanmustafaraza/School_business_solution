// import "@/models/Class";
import { NextResponse } from "next/server";
import { Student } from "@/models/Student";
import { connectDb } from "@/app/lib/db";
import resizeImage from "@/app/lib/imageresize";
import mongoose from "mongoose";
import ClassModel from "@/models/Class";
// import ClassModel from "@/models/Class";

/* ================= IMAGE UTILITY ================= */

/* ================= POST ================= */

export async function POST(req: Request) {
  try {
    await connectDb();

    const formData = await req.formData();
    const photoFile = formData.get("photo") as File | null;

    if (!photoFile) {
      return NextResponse.json(
        { success: false, message: "Photo is required" },
        { status: 400 },
      );
    }

    // 👉 Convert file → Buffer
    const photoBuffer = Buffer.from(await photoFile.arrayBuffer());

    // 👉 Optimize image
    const optimized = await resizeImage(photoBuffer);

    /* ================= STUDENT DATA ================= */

    const studentData = {
      admissionNo: formData.get("admissionNo"),
      rollNo: formData.get("rollNo"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      gender: formData.get("gender"),
      dob: formData.get("dob"),

      bloodGroup: formData.get("bloodGroup"),
      religion: formData.get("religion"),
      category: formData.get("category"),
      aadhaar: formData.get("aadhaar"),

      classId: formData.get("classId"),
      userId: formData.get("userId"),
      // section: formData.get("section"),
      academicYear: formData.get("academicYear"),
      house: formData.get("house"),
      admissionDate: formData.get("admissionDate"),

      mobile: formData.get("mobile"),
      email: formData.get("email"),
      address: formData.get("address"),
      city: formData.get("city"),
      state: formData.get("state"),
      pincode: formData.get("pincode"),

      fatherName: formData.get("fatherName"),
      motherName: formData.get("motherName"),
      guardianName: formData.get("guardianName"),
      parentMobile: formData.get("parentMobile"),
      occupation: formData.get("occupation"),

      medicalCondition: formData.get("medicalCondition"),
      allergies: formData.get("allergies"),
      emergencyContact: formData.get("emergencyContact"),
      transportRequired: formData.get("transportRequired"),

      notes: formData.get("notes"),

      // ✅ IMAGE STORED CORRECTLY
      photo: {
        data: optimized.buffer,
        imageType: optimized.type, // always image/jpeg
        name: photoFile.name,
      },
    };

    const newStudent = await Student.create(studentData);

    return NextResponse.json(
      {
        success: true,
        message: "Student created successfully",
        data: newStudent,
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("POST STUDENT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Internal Server Error",
      },
      { status: 500 },
    );
  }
}

/* ================= GET ALL STUDENTS ================= */

export async function GET() {
  try {
    await connectDb();
    console.log(mongoose.modelNames());

    const students = await Student.find()

      .select("-photo") // ❌ exclude image
      .sort({ createdAt: -1 })
      .populate("classId", null, ClassModel);
    console.log(students);

    return NextResponse.json(
      {
        success: true,
        count: students.length,
        data: students,
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("GET STUDENTS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to fetch students",
      },
      { status: 500 },
    );
  }
}

/* ================= GET (SERVE IMAGE) ================= */

// export async function GET(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDb();

//     const { id } = params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json(
//         { success: false, message: "Invalid student ID" },
//         { status: 400 }
//       );
//     }

//     const student = await Student.findById(id).select("photo");

//     if (!student || !student.photo?.data) {
//       return NextResponse.json(
//         { success: false, message: "Image not found" },
//         { status: 404 }
//       );
//     }

//     return new NextResponse(student.photo.data, {
//       status: 200,
//       headers: {
//         "Content-Type": student.photo.imageType, // image/jpeg
//         "Cache-Control": "public, max-age=31536000",
//       },
//     });
//   } catch (error: any) {
//     console.error("GET IMAGE ERROR:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: error.message || "Failed to load image",
//       },
//       { status: 500 }
//     );
//   }
// }
