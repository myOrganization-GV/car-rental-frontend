"use server";

import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

const isCredentialsSigninError = (error: unknown): error is { type: string } => {
  return (
    typeof error === "object" &&
    error !== null &&
    "type" in error &&
    typeof error.type === "string"
  );
};

export const signinFormAction = async (
  _previousState: unknown,
  formData: FormData
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const provider = formData.get("provider") as string;
  console.log(provider)
  if (provider === "google") {
    try {
      await signIn("google");
    } catch (error: unknown) {
      if (isRedirectError(error)) {
        throw error;
      }
    }
    return;
  }
  if (provider === "github") {
    try {
      await signIn("github");
    } catch (error: unknown) {
      if (isRedirectError(error)) {
        throw error;
      }
    }
    return;
  }

  if (provider === "custom") {
    try {
      await signIn("credentials", {
        email,
        password,
        redirectTo: "/",
      });
    } catch (error: unknown) {
      if (isRedirectError(error)) {
        throw error;
      }
      if (isCredentialsSigninError(error) && error.type === "CredentialsSignin") return { type: "credentials" };
      return { type: "server" };
    }
  }
};
