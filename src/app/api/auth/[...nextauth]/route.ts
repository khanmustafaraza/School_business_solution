import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDb } from "@/app/lib/db";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" }, // optional
      },

      async authorize(credentials) {
        await connectDb();

        const user = await User.findOne({
          email: credentials?.email,
        });

        if (!user) throw new Error("Invalid Email or Password");

        const isValid = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!isValid) throw new Error("Invalid Email or Password");

        // Optional role check (UI guard)
        if (credentials?.role && user.role !== credentials.role) {
          throw new Error("Role is not correct");
        }

        return {
          id: user._id.toString(), // ✅ FIXED
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = (user as any).role; // ✅ no "any"
      }
      return token;
    },

    async session({ session, token }) {
      // console.log("good morning");
      // console.log(token, "token inside session");

      if (session.user) {
        (session.user as any).id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        (session.user as any).role = token.role; // ✅ IMPORTANT
      }

      // console.log("session inside", session);
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };