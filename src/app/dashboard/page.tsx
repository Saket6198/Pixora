"use client";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react"; 
import { useRouter } from "next/navigation"; 
import { Loader2 } from "lucide-react";

export default function Page(){
    const {data: session, status} = useSession();
    const router = useRouter();

    console.log("Session data:", session); // Use session to avoid lint error

    useEffect(() => {
        if(status === "unauthenticated") {
            router.replace("/login"); // Redirect to login page if unauthenticated
        }
    }, [status, router]); 
    if(status === "loading"){
        return <p className="min-h-screen items-center justify-center flex flex-col gap-3"><img className="h-10 w-10 animate-bounce" src="/icons/canva.svg"></img>Authenticating</p>
    } 
    if(status === "authenticated"){
        return (
            <div>
                <p>This is a dashboard</p>
                <button onClick={() => signOut({redirectTo: "/login"})}>Sign Out </button>
            </div>
        );
    }
    return null; 
}