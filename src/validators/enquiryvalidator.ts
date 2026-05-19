import { z } from "zod";

export const EnquirySchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(
      30,
      "Name must be less than 30 characters"
    ),

  mobile: z
    .string()
    .min(1, "Mobile is required")
    .length(10, "Mobile must be 10 digits"),

  addmissionClass: z
    .string()
    .min(1, "Please Select Class"),

  message: z
    .string()
    .min(1, "Please Provide Message")
    .max(
      300,
      "Message must be less than 300 characters"
    ),
});

export type EnquiryType = z.infer<
  typeof EnquirySchema
>;