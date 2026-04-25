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
      message: "Account Created Successfully",
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

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    const role = searchParams.get("role");
    const search = searchParams.get("search");

    const skip = (page - 1) * limit;

    // 🧠 BUILD QUERY DYNAMICALLY
    const query: any = {};

    // 🔍 ROLE FILTER
    if (role) {
      query.role = role;
    }

    // 🔍 SEARCH FILTER (name or email)
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    // 📦 DATA QUERY
    const users = await User.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    // 📊 TOTAL COUNT (with filters applied)
    const total = await User.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: users,
      page,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, msg: "Server Error" },
      { status: 500 }
    );
  }
};
