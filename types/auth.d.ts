import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    role?: string;
    accessToken?: string;
  }
}