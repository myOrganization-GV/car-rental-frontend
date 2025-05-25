"use server";

import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export const signinFormAction = async (
  previousState: unknown,
  formData: FormData
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const provider = formData.get("provider") as string;
  if (provider === "google") {
    try {
      await signIn("google");
    } catch (error: any) {
      if (isRedirectError(error)) {
        throw error;
      }
    }
    return;
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error: any) {
    if (isRedirectError(error)) {
      throw error;
    }
    if (error.type == "CredentialsSignin") return { type: "credentials" };
    return { type: "server" };
  }
};
