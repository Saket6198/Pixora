import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
// import { authConfig } from "./auth/config"; 
export async function requireAuth(){
    const session = await getSession();
    if(!session){
        redirect("/login");
    }
    return session;
}


export async function alreadyAuth(){
    const session = await getSession();
    if(session){
        redirect("/dashboard");
    }
    return session;
}
