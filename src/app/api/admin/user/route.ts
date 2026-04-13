import { connectDb } from "@/app/lib/db";
import { hashedPassword } from "@/app/lib/password";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDb();

    const { name, email, password, role } = await req.json();

    // ✅ Basic validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, msg: "All fields are required" },
        { status: 400 },
      );
    }

    // ✅ Check existing user (by email)
    const existUser = await User.findOne({ email });
    if (existUser) {
      return NextResponse.json(
        { success: false, msg: "Email already exists" },
        { status: 400 },
      );
    }

    // ✅ Hash password
    const hashed = await hashedPassword(password);

    // ✅ Create user (default role only)
    const user = await User.create({
      name,
      email,
      password: hashed,
      role: role, // never trust frontend
    });

    return NextResponse.json({
      success: true,
      msg: "Account Created Successfully",
      userId: user._id,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, msg: "Server Error" },
      { status: 500 },
    );
  }
};

export const GET = async (req: Request) => {
  try {
    await connectDb();

    const { searchParams } = new URL(req.url);

    const page = searchParams.get("page");
    const limit = searchParams.get("limit");

    // 👉 If page is NOT provided → return all users
    if (!page) {
      const users = await User.find();
      return NextResponse.json({
        success: true,
        data: users,
      });
    }

    // 👉 If page is provided → apply pagination
    const pageNumber = Number(page) || 2;
    const limitNumber = Number(limit) || 2;

    const skip = (pageNumber - 1) * limitNumber;

    const users = await User.find().skip(skip).limit(limitNumber);

    const total = await User.countDocuments();

    return NextResponse.json({
      success: true,
      data: users,
      page: pageNumber,
      totalPages: Math.ceil(total / limitNumber),
      total,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, msg: "Server Error" },
      { status: 500 },
    );
  }
};
