// export default function Page() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-white px-4">
//       <div className="w-full max-w-sm flex flex-col gap-6 bg-red-500 text-center p-6 rounded-md">
//         <p className="text-2xl font-bold">Sign Up</p>
//         <form className="flex flex-col gap-6">
//           <div className="relative">
//             <label htmlFor="email" className="absolute top-0 left-1 px-1 text-sm">
//               EMAIL
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               className="rounded-sm border border-gray-300 bg-white px-3 py-3 text-black w-full"
//             />  
//           </div>
//           <div className="relative">
//             <label htmlFor="password" className="absolute top-0 left-1 px-1 text-sm">
//               PASSWORD
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="rounded-sm border border-gray-300 bg-white px-3 py-3 text-black w-full"
//               required
//             />
//             <button
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client"

import type React from "react"
import Link from "next/link"
import { Label } from "~/components/ui/label"
import { Input } from "~/components/ui/input"
import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"

export default function SignUpPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted")
    // You'll implement your own authentication logic here
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 dark:bg-zinc-900">
      <div className="shadow-input mx-auto w-full max-w-md rounded-2xl bg-white p-8 dark:bg-black">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Create an account</h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Join our community and start your journey with us
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="John" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Doe" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="you@example.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <Button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Sign up
            <BottomGradient />
          </Button>

          <div className="my-8 flex items-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            <span className="mx-4 text-sm text-neutral-600 dark:text-neutral-400">or continue with</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
          </div>

          <div className="flex flex-col space-y-4">
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
              type="button"
            >
              <DiscordIcon className="h-5 w-5" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">Discord</span>
              <BottomGradient />
            </button>
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
              type="button"
            >
              <GoogleIcon className="h-5 w-5" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">Google</span>
              <BottomGradient />
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-medium text-neutral-800 underline dark:text-neutral-200">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
}

const DiscordIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
      <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
      <path d="M7 16.5c3.5 1 6.5 1 10 0" />
      <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
      <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.48-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5" />
    </svg>
  )
}

const GoogleIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      <path d="M15.5 8.5L12 12m0 0L8.5 15.5M12 12L8.5 8.5m3.5 3.5l3.5 3.5" />
    </svg>
  )
}
