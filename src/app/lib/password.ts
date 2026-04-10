import bcrypt from "bcryptjs";

export const hashedPassword = async (password: any) => {
  const hashed = await bcrypt.hash(password, 10);
  return hashed;
};
