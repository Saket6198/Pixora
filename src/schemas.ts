import { object, string } from "zod";

export const signUpSchema = object({
    firstname: string({ required_error: "First name is required" })
        .min(2, "First name must be at least 2 characters")
        .max(32, "First name must be 32 characters or less"),
    lastname: string({ required_error: "Last name is required" })
        .min(2, "Last name must be at least 2 characters")
        .max(32, "Last name must be 32 characters or less"),
    email: string({ required_error: "Email is required" }).email("Invalid email"),
    password: string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be 32 characters or less"),
});

export const signInSchema = object({
  email: string({ required_error: "Email is required" }).email("Invalid email"),
  password: string({ required_error: "Password is required" }),
});
