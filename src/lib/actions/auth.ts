"use server";

import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export type RegisterState = {
  errors?: {
    fullName?: string[];
    email?: string[];
    password?: string[];
    terms?: string[];
  };
  message?: string;
};

export async function register(
  _prevState: RegisterState | undefined,
  formData: FormData
): Promise<RegisterState> {
  const fullName = formData.get("fullName") as string;
  const businessName = formData.get("businessName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const terms = formData.get("terms") as string;

  const errors: RegisterState["errors"] = {};

  if (!fullName || fullName.length < 2) {
    errors.fullName = ["Name must be at least 2 characters."];
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ["Please enter a valid email address."];
  }
  if (!password || password.length < 8) {
    errors.password = ["Password must be at least 8 characters."];
  }
  if (terms !== "on") {
    errors.terms = ["You must agree to the Terms of Service."];
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) {
    return { message: "An account with this email already exists." };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      name: fullName,
      email,
      password: hashedPassword,
      businessName: businessName || null,
    },
  });

  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  redirect("/profile/dashboard");
}
