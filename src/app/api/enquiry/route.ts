import { connectDb } from "@/app/lib/db";
import { validateData } from "@/app/lib/validate";
import Enquiry from "@/models/Enquiry";
import { EnquirySchema } from "@/validators/enquiryvalidator";
import { error } from "console";
import { NextResponse } from "next/server";

/* ================= CREATE ENQUIRY ================= */
export async function POST(req:Request) {
  try {
    await connectDb();

    const body = await req.json();
      const result= validateData(EnquirySchema,body)
      console.log(result,"result on backend")
      if(!result.success){
      return NextResponse.json({
      success: result.success,
      message: "validation fail",
      errors:result.errors
      // data: enquiry,
    });
  }
        // console.log("err",err)
        // if(!result.success){
         
    
        // }
    // console.log(body)
      // console.log(enquiry)
    const exsistMobileNumber = await Enquiry.findOne({mobile:body.mobile})
    // console.log(exsistMobileNumber)
    if(exsistMobileNumber){
      return NextResponse.json({
      success: false,
      message: "Mobile Number Already Exsist",
      // data: enquiry,
    });
    }

    const enquiry = await Enquiry.create(body);
  

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted",
      data: enquiry,
    });
  } catch (error:any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

/* ================= GET ALL ENQUIRIES ================= */
export async function GET() {
  try {
    await connectDb();

    const enquiries = await Enquiry.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: enquiries,
    });
  } catch (error:any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}