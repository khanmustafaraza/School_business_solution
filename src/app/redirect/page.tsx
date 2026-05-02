"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log("data",session)

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/login");
      return;
    }

    if ((session.user as any)?.role === "admin") {
      router.replace("/");
    } else if ((session.user as any)?.role === "student") {
      router.replace("/student/dashboard");
    } else {
      router.replace("/");
    }
  }, [session, status]);
  if(status === "loading") return null

  return null;
}