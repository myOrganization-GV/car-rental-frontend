"use server";

import { z } from "zod";

const signupSchema = z
  .object({
    firstName: z.string().nonempty("First name is required"),
    lastName:  z.string().nonempty("Last name is required"),
    email:     z.string().trim().email("Invalid email address"),
    password:  z.string().min(4, "Password must be at least 4 characters"),
    confirmPassword: z
      .string(),
    marketing: z
      .literal("on")
      .optional(),
    terms: z.literal("on", {
      errorMap: () => ({ message: "You must accept terms & privacy" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const signupFormAction = async (previousState: unknown, formData: FormData) => {
  const formValues = Object.fromEntries(formData.entries());
  const result = signupSchema.safeParse(formValues);
  if(!result.success){
    const formatted = result.error.flatten();
    return {
        success: false,
        fieldErrors: formatted.fieldErrors,
        formErrors: formatted.formErrors,
    }
  }
  const { firstName, lastName, email, password } = result.data;
  try {
    const response = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: "Registration successful!", data }; 
    } else {
      const errorData = await response.json();
      return { error: errorData?.message || "Registration failed." };
    }
  } catch (error: any) {
    console.error("Error during registration:", error);
    return { error: "An unexpected error occurred during registration." }; 
  }
};
