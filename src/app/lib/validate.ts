import { z } from "zod";

export const validateData = <
  T extends z.ZodTypeAny
>(
  schema: T,
  data: unknown
) => {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors: Record<string, string> = {};

    result.error.issues.forEach((err) => {
      const field = err.path[0] as string;

      errors[field] = err.message;
    });

    return {
      success: false,
      errors,
    };
  }

  return {
    success: true,
    data: result.data,
  };
};