"use client";

import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <button
      onClick={() =>
        signOut({ callbackUrl: "/" })
      }
      className="w-full text-left py-2"
    >
      Logout
    </button>
  );
}