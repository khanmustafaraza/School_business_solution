import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  admissionNo: string;
  rollNo: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob: Date;
  bloodGroup: string;
  religion: string;
  category: string;
  aadhaar: string;

  className: string;
  section: string;
  academicYear: string;
  house: string;
  admissionDate: Date;

  mobile: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;

  fatherName: string;
  motherName: string;
  guardianName: string;
  parentMobile: string;
  occupation: string;

  medicalCondition: string;
  allergies: string;
  emergencyContact: string;
  transportRequired: string;

  notes: string;

  photo: string; // ✅ FIXED (URL or file path)
}

const StudentSchema: Schema<IStudent> = new Schema(
  {
    admissionNo: { type: String, required: true, unique: true },
    rollNo: { type: String, required: true },

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },

    bloodGroup: { type: String },
    religion: { type: String },
    category: { type: String },
    aadhaar: { type: String },

    className: { type: String, required: true },
    section: { type: String },
    academicYear: { type: String },
    house: { type: String },
    admissionDate: { type: Date },

    mobile: { type: String },
    email: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },

    fatherName: { type: String },
    motherName: { type: String },
    guardianName: { type: String },
    parentMobile: { type: String },
    occupation: { type: String },

    medicalCondition: { type: String },
    allergies: { type: String },
    emergencyContact: { type: String },
    transportRequired: { type: String },

    notes: { type: String },

    // photo: { type: String }, // ✅ FIXED
   photo: {
  data: { type: Buffer, required: true },
  imageType: { type: String, required: true },
  name: { type: String }
}
  },
  {
    timestamps: true,
  },
);

export const Student =
  mongoose.models.Student || mongoose.model<IStudent>("Student", StudentSchema);


//   import sharp from "sharp";

// const inputBuffer = Buffer.from(await file.arrayBuffer());

// const outputBuffer = await sharp(inputBuffer)
//   .resize(600) // resize width to 600px (height auto)
//   .jpeg({ quality: 70 }) // convert to JPEG + compress
//   .toBuffer();

// sharp(inputBuffer)
//   .resize(320, 240)
//   .toFile('output.webp', (err, info) => { ... });

// const file = reqFile; // from multer or formData

// const imageBuffer = Buffer.from(await file.arrayBuffer());

// await Student.create({
//   photo: {
//     data: imageBuffer,
//     imageType: file.type,
//     name: file.name,
//   },
// });