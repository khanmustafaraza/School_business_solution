import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Student } from "@/models/Student";
import { connectDb } from "@/app/lib/db";

// 👇 Make sure you already have DB connection utility

/* ================= POST ================= */

export async function POST(req: Request) {
  try {
    await connectDb();

    const formData = await req.formData();

    const photoFile = formData.get("photo") as File | null;

    let photoBuffer = null;

    if (photoFile) {
      const bytes = await photoFile.arrayBuffer();
      photoBuffer = Buffer.from(bytes);
    }

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

      className: formData.get("className"),
      section: formData.get("section"),
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
      photo: photoBuffer,
    };

    const newStudent = await Student.create(studentData);

    return NextResponse.json(
      {
        success: true,
        message: "Student created successfully",
        data: newStudent,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST STUDENT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import connectDB from "@/lib/db";
// import { Student } from "@/models/Student";
// import mongoose from "mongoose";

// export async function GET(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();

//     const { id } = params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json(
//         { success: false, message: "Invalid student ID" },
//         { status: 400 }
//       );
//     }

//     const student = await Student.findById(id).select("photo");

//     if (!student || !student.photo) {
//       return NextResponse.json(
//         { success: false, message: "Photo not found" },
//         { status: 404 }
//       );
//     }

//     const imageBuffer = student.photo;

//     return new NextResponse(imageBuffer, {
//       status: 200,
//       headers: {
//         "Content-Type": "image/jpeg", // or image/png if needed
//         "Cache-Control": "public, max-age=86400",
//       },
//     });
//   } catch (error: any) {
//     console.error("PHOTO ERROR:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: error.message || "Failed to load photo",
//       },
//       { status: 500 }
//     );
//   }
// }
// <picture>
//   <source srcset="image.avif" type="image/avif" />
//   <source srcset="image.webp" type="image/webp" />
//   <img src="image.jpg" alt="photo" />
// </picture>