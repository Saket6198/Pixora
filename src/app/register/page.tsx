"use client";

import type React from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { useActionState, useEffect} from "react";
import {register} from "../actions/auth";
// import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { AiFillDiscord } from "react-icons/ai";
import { Loader2 } from "lucide-react";
import {signIn as Oauth} from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession} from "next-auth/react";
import Image from "next/image";

export default function Page() {
    const router = useRouter();
    const {data: session, status} = useSession();
  const [errorMessage, formAction, isPending] = useActionState(
    register,
    undefined,
  );
  console.log("Session data:", session); 
  const [dpending, setdpending] = useState(false);
  const [gpending, setgpending] = useState(false);
  useEffect(() => {
    if(status === "authenticated"){
      router.replace("/dashboard"); 
    }
  }, [status, router]);
  
  
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        theme: "dark",
        transition: Slide,
        pauseOnHover: true,
      });
    }
  }, [errorMessage]);

  if(status === "loading"){
    return <p className="min-h-screen items-center justify-center flex flex-col gap-3"><Image className="h-10 w-10 animate-bounce" alt="pixora-icon" src="/icons/canva.svg"></Image>Authenticating</p>
  }
  if(status === "unauthenticated"){

    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 dark:bg-zinc-900">
        <ToastContainer />
        <div className="shadow-input mx-auto w-full max-w-md rounded-2xl bg-white p-8 dark:bg-black">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            Create an account
          </h2>
          <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
            Join us today and start your journey with our platform.
          </p>

          <form action={formAction} className="my-8">
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="John"
                  type="text"
                  name="firstname"
                  required
                  minLength={2}
                  maxLength={32}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Doe"
                  type="text"
                  name="lastname"
                  required
                  minLength={2}
                  maxLength={32}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="you@example.com"
                type="email"
                name="email"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                name="password"
                required
                minLength={8}
                maxLength={16}
              />
            </LabelInputContainer>

            <Button
              className="flex justify-center items-center group/btn relative h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              type="submit"
              disabled={isPending}
            >
              {isPending ? 
              <Loader2 className="h-4 w-4 animate-spin" /> :
              "Sign up"}
              <BottomGradient />
            </Button>

            <div className="my-8 flex items-center">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
              <span className="mx-4 text-sm text-neutral-600 dark:text-neutral-400">
                or continue with
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            </div>

            <div className="flex flex-col space-y-4">
              <button
                className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                type="button"
                disabled={dpending}
                onClick={async () => {
                  setdpending(true);
                  await Oauth("discord", { redirectTo: '/dashboard' })}
                  }
                  >
                {dpending ? 
                  <>
                  <AiFillDiscord className="h-5 w-5 animate-spin" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Discord
                  </span>
                  </> :
                  <>
                  <AiFillDiscord className="h-5 w-5" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Discord
                  </span>
                  </>
                  }
                <BottomGradient />
              </button>
              <button
                className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                type="button"
                disabled={gpending}
                onClick={
                    async () => {
                    setgpending(true);
                    await Oauth("google", { redirectTo: '/dashboard' })}
                  }
                    
              >
                {/* <GoogleIcon className="h-5 w-5" /> */}
                  {gpending ? 
                  <>
                  <GoogleIcon className="h-5 w-5 animate-spin" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Google
                  </span>
                  </> :
                  <>
                  <GoogleIcon className="h-5 w-5" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Google
                  </span>
                  </>
                  }
                <BottomGradient />
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-neutral-800 underline dark:text-neutral-200"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

// const DiscordIcon = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="9" cy="12" r="1" />
//       <circle cx="15" cy="12" r="1" />
//       <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
//       <path d="M7 16.5c3.5 1 6.5 1 10 0" />
//       <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
//       <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.48-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5" />
//     </svg>
//   );
// };

const GoogleIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="24"
      height="24"
    >
      <path
        fill="#4285F4"
        d="M24 9.5c3.15 0 5.76 1.09 7.6 2.86l5.64-5.64C33.33 3.06 28.95 1 24 1 14.89 1 7.47 6.76 4.52 14.27l6.9 5.37C13.15 13.92 18.09 9.5 24 9.5z"
      />
      <path
        fill="#34A853"
        d="M46.1 24.5c0-1.61-.14-3.15-.4-4.63H24v9.13h12.44c-.54 2.87-2.15 5.3-4.62 6.95l7.2 5.59c4.19-3.87 6.58-9.57 6.58-16.04z"
      />
      <path
        fill="#FBBC05"
        d="M10.42 28.64A14.47 14.47 0 0 1 9.5 24c0-1.61.28-3.15.77-4.64L3.33 13.9A22.95 22.95 0 0 0 1 24c0 3.63.87 7.06 2.4 10.1l7.02-5.46z"
      />
      <path
        fill="#EA4335"
        d="M24 46c6.2 0 11.4-2.06 15.2-5.6l-7.2-5.6a14.46 14.46 0 0 1-21.58-5.56l-7.02 5.46C8.53 42.67 15.73 46 24 46z"
      />
      <path fill="none" d="M0 0h48v48H0z" />
    </svg>
  );
};
