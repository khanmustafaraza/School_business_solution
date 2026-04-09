import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/app/lib/db";
import School from "@/models/School";

export const POST = async (req: NextRequest) => {
  try {
    // Connect to the database
    await connectDb();

    // Parse multipart/form-data
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const code = formData.get("code") as string;
    const email = formData.get("email") as string;
    const contact = formData.get("contact") as string;
    const address = formData.get("address") as string;
    const imageFile = formData.get("image") as File | null;

    // Optional: Convert File to buffer if needed for DB or storage
    let imageData: Buffer | null = null;
    if (imageFile) {
      const arrayBuffer = await imageFile.arrayBuffer();
      imageData = Buffer.from(arrayBuffer);
      console.log(formData)
    }

    // Create school
    const savedSchool = await School.create({
      name,
      email,
      contact,
      code,
      address,
      image: imageData,
    });

    return NextResponse.json({ success: true, data: savedSchool });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to create school" }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectDb();

    const schools = await School.find().sort({ createdAt: -1 });
    const schoolsWithImages = schools.map((school) => ({
  ...school.toObject(),
  image: school.image ? `data:image/jpeg;base64,${school.image.toString('base64')}` : null,
}));

    return NextResponse.json({
      success: true,
      data: schoolsWithImages,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch schools" },
      { status: 500 }
    );
  }
};