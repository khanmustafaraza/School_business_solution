// models/School.ts
import mongoose, { Schema, Document, model, models } from "mongoose";

export interface ISchool extends Document {
  name: string;
  code?: number;
  email: string;
  contact?: number;
  address?: string;
  image?: Buffer; // store image binary, or use string for URL
}

const SchoolSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: Number },
    email: { type: String, required: true },
    contact: { type: Number },
    address: { type: String },
    image: { type: Buffer }, // can also be { type: String } for URL
  },
  { timestamps: true },
);

// Prevent model overwrite on hot reload in Next.js
const School = models.School || model<ISchool>("School", SchoolSchema);
export default School;
