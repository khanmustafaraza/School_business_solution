// utils/connectDb.ts
import mongoose from "mongoose";

let isConnected = false; // track connection

export const connectDb = async () => {
  if (isConnected) return; // already connected

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    isConnected = true;
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Could not connect to database");
  }
};