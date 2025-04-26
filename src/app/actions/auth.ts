"use server"

import {ZodError } from "zod";
import { signUpSchema } from "~/schemas";
import { db } from "~/server/db";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { signIn, signOut } from '~/server/auth';
import { AuthError } from "next-auth";

export async function signout(){
    await signOut();
}

export async function login(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn("credentials", formData);
    } catch (err: unknown) {
        if (err instanceof AuthError) {
            switch (err.type) {
                case "CredentialsSignin":
                    return "Invalid credentials. Please try again.";
                default:
                    return "An unknown error occurred. Please try again.";
            }
        }
        throw err;
    }
} 

export async function register(
    prevState: any | undefined,
    formData: FormData,
) {
    try{
        const parsedData = await signUpSchema.parseAsync({
            firstname: formData.get("firstname") ?? "",
            lastname: formData.get("lastname") ?? "",
            email: formData.get("email") ?? "",
            password: formData.get("password") ?? "",
        }); 

        const user = await db.user.findUnique({
            where: {
                email: parsedData.email
            }
        })
        if(user){
            return "User already exists";
        }

        const hashedPassword = await bcrypt.hash(parsedData.password, 10);

        await db.user.create({
            data: {
                firstname: parsedData.firstname,
                lastname: parsedData.lastname,
                email: parsedData.email,
                password: hashedPassword,
            },
        });
    }catch(err){
        if(err instanceof ZodError){
            return err.errors[0]?.message;
        }
    }
    redirect("/login");
}
